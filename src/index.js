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

class TodoList extends React.Component {
    render() { 
        return (
        <ul>{this.props.todos.map(todo => <Todo key={todo.id} todo={todo} handleRemoveTodo={this.props.handleRemoveTodo}/>)}</ul>
        );
    }
}

class Todo extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <li>
                    {this.props.todo.value}
                    <button onClick={this.props.handleRemoveTodo.bind(null, this.props.todo.id)}>Remove</button>
                </li>
            </React.Fragment>
        );
    }
}

class Title extends React.Component {
    render() { return <h1>Todo App</h1>}
}

const appRoot = document.getElementById('app');

ReactDOM.render(<TodoApp />, appRoot);