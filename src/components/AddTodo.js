import React from 'react';

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
               <div>
                <form className="add-todo" onSubmit={this.handleAddTodo}>
                        <input type="text" placeholder="Enter an item..." onChange={this.handleOnChange} value={this.state.value}></input>
                        <button className="add-todo__button">Add Item</button>
                </form>
               </div>
           </React.Fragment>
       ); 
    }
}

export default AddTodo;