import React from 'react';

const Todo = (props) => (
    <React.Fragment>
        <li>
            {props.todo.value}
            <button onClick={props.handleRemoveTodo.bind(null, props.todo.id)}>Remove</button>
        </li>
    </React.Fragment>
);

export default Todo;