import React from 'react';

import Todo from './Todo';

const TodoList = (props) => (
    <ul className="todo-list">{
        props.todos.map(todo => <Todo key={todo.id} todo={todo} handleRemoveTodo={props.handleRemoveTodo}/>)}
    </ul>
);

export default TodoList;