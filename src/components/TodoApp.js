import React from 'react';

import Title from './Title';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            title: 'todo-app'
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    // A React Lifecycle Method
    componentDidMount() {
        // Get all the notes
        fetch('http://localhost:3000/todos')
            .then(response => response.json())
            .then(todos => {
                // update state
                this.setState({
                    todos
                });
            });
    }


    handleAddTodo(todoItemValue) {
        const newTodo = {
            id: Math.random() * 984928342,
            value: todoItemValue
        };
        this.setState(state => {
            return { todos: state.todos.concat(newTodo) }
        });
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTodo)
        })
        .then(response => response.json())
        .then(todo => console.log(`todo created with value: ${JSON.stringify(todo)}`));
    }

    handleRemoveTodo(todoId) {
        const filteredTodos = this.state.todos.filter(todo => todo.id !== todoId);
        this.setState({
            todos: filteredTodos
        });
        fetch(`http://localhost:3000/todos/${todoId}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(todo => console.log(`deleted todo: ${todo}`));
    }

    render() {
        return (
            <React.Fragment>
                <div className="todo-app">
                    <Title title={this.state.title}/>
                    <div className="display-todos">
                        <AddTodo handleAddTodo={this.handleAddTodo} />
                        <TodoList todos={this.state.todos} handleRemoveTodo={this.handleRemoveTodo} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TodoApp;

