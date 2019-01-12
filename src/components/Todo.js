import React from 'react';

const Todo = (props) => (
    <React.Fragment>
        <li className="todo">
            {props.todo.value}
            <button className="add-todo__button" onClick={props.handleRemoveTodo.bind(null, props.todo.id)}>Remove</button>
        </li>
    </React.Fragment>
);

export default Todo;