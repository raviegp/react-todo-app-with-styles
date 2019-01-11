'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
    _inherits(TodoApp, _React$Component);

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

        _this.state = {
            todos: []
        };
        _this.handleAddTodo = _this.handleAddTodo.bind(_this);
        _this.handleRemoveTodo = _this.handleRemoveTodo.bind(_this);
        return _this;
    }

    _createClass(TodoApp, [{
        key: 'handleAddTodo',
        value: function handleAddTodo(todoItemValue) {
            var newTodo = {
                id: Math.random() * 984928342,
                value: todoItemValue
            };
            this.setState(function (state) {
                return { todos: state.todos.concat(newTodo) };
            });
        }
    }, {
        key: 'handleRemoveTodo',
        value: function handleRemoveTodo(todoId) {
            var filteredTodos = this.state.todos.filter(function (todo) {
                return todo.id !== todoId;
            });
            console.log('after filtration', filteredTodos);
            this.setState({
                todos: filteredTodos
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(Title, null),
                React.createElement(AddTodo, { handleAddTodo: this.handleAddTodo }),
                React.createElement(TodoList, { todos: this.state.todos, handleRemoveTodo: this.handleRemoveTodo })
            );
        }
    }]);

    return TodoApp;
}(React.Component);

var AddTodo = function (_React$Component2) {
    _inherits(AddTodo, _React$Component2);

    function AddTodo(props) {
        _classCallCheck(this, AddTodo);

        var _this2 = _possibleConstructorReturn(this, (AddTodo.__proto__ || Object.getPrototypeOf(AddTodo)).call(this, props));

        _this2.state = {
            value: ''
        };
        _this2.handleOnChange = _this2.handleOnChange.bind(_this2);
        _this2.handleAddTodo = _this2.handleAddTodo.bind(_this2);
        return _this2;
    }

    _createClass(AddTodo, [{
        key: 'handleOnChange',
        value: function handleOnChange(e) {
            this.setState({ value: e.target.value });
        }
    }, {
        key: 'handleAddTodo',
        value: function handleAddTodo(e) {
            e.preventDefault();
            this.props.handleAddTodo(this.state.value);
            this.state.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddTodo },
                    React.createElement('input', { type: 'text', onChange: this.handleOnChange, value: this.state.value }),
                    React.createElement(
                        'button',
                        null,
                        'Add'
                    )
                )
            );
        }
    }]);

    return AddTodo;
}(React.Component);

var TodoList = function (_React$Component3) {
    _inherits(TodoList, _React$Component3);

    function TodoList() {
        _classCallCheck(this, TodoList);

        return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
    }

    _createClass(TodoList, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'ul',
                null,
                this.props.todos.map(function (todo) {
                    return React.createElement(Todo, { key: todo.id, todo: todo, handleRemoveTodo: _this4.props.handleRemoveTodo });
                })
            );
        }
    }]);

    return TodoList;
}(React.Component);

var Todo = function (_React$Component4) {
    _inherits(Todo, _React$Component4);

    function Todo() {
        _classCallCheck(this, Todo);

        return _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).apply(this, arguments));
    }

    _createClass(Todo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'li',
                    null,
                    this.props.todo.value,
                    React.createElement(
                        'button',
                        { onClick: this.props.handleRemoveTodo.bind(null, this.props.todo.id) },
                        'Remove'
                    )
                )
            );
        }
    }]);

    return Todo;
}(React.Component);

var Title = function (_React$Component5) {
    _inherits(Title, _React$Component5);

    function Title() {
        _classCallCheck(this, Title);

        return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
    }

    _createClass(Title, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'h1',
                null,
                'Todo App'
            );
        }
    }]);

    return Title;
}(React.Component);

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(TodoApp, null), appRoot);
