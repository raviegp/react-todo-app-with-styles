import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;

const handleOnClick = () => {
    count++;
    renderCounter();
};

const renderCounter = () => {
    const CounterTemplate = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleOnClick}>+1</button>
        </div>
    );
    ReactDOM.render(CounterTemplate, document.getElementById('app'));
}

renderCounter();

