class TodoApp extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
   }

   handleAddTodo(todoItemValue) {
       const newTodo = {
           id: Math.random() * 984928342,
           value: todoItemValue
       };
       this.setState(state => { 
           return { todos: state.todos.concat(newTodo) }
        });
   }

   handleRemoveTodo(todoId) {
       const filteredTodos = this.state.todos.filter(todo => todo.id !== todoId);
       console.log('after filtration', filteredTodos);
       this.setState({
           todos: filteredTodos
       });
   }

   render() {
       return (
           <React.Fragment>
               <Title />
               <AddTodo handleAddTodo={this.handleAddTodo}/>
               <TodoList todos={this.state.todos} handleRemoveTodo={this.handleRemoveTodo}/>
           </React.Fragment>
       );
   }
}

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleOnChange(e) {
        this.setState({ value: e.target.value });
    }

    handleAddTodo(e) {
        e.preventDefault();
        this.props.handleAddTodo(this.state.value);
        this.state.value = '';
    }
    render() { 
       return (
           <React.Fragment>
               <form onSubmit={this.handleAddTodo}>
                    <input type="text" onChange={this.handleOnChange} value={this.state.value}></input>
                    <button>Add</button>
               </form>
           </React.Fragment>
       ); 
    }
}

const TodoList = (props) => (
    <ul>{props.todos.map(todo => <Todo key={todo.id} todo={todo} handleRemoveTodo={props.handleRemoveTodo}/>)}</ul>
);

const Todo = (props) => (
        <React.Fragment>
            <li>
                {props.todo.value}
                <button onClick={props.handleRemoveTodo.bind(null, props.todo.id)}>Remove</button>
            </li>
        </React.Fragment>
);

const Title = (props) => <h1>Todo App</h1>

const appRoot = document.getElementById('app');

ReactDOM.render(<TodoApp />, appRoot);