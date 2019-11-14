import React, { Component } from 'react';
import uuid from 'uuid';
import AddTodo from './../components/AddTodo';
import Todos from './../components/Todos';
import './../App.css';

class Home extends Component {
    state = {
        todos: []
    }

    // Toggle Complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id)
                    todo.completed = !todo.completed;
                return todo;
            })
        });
    }

    // Delete Todo
    delTodo = (id) => {

        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    // Add Todo
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] })

    }

    render() {
        return (
            <div className="container">
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </div>
        );
    }
}

export default Home;