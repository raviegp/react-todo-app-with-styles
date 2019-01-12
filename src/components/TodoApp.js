import React from 'react';

import Title from './Title';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

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
        this.setState({
            todos: filteredTodos
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="todo-app">
                    <Title />
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

