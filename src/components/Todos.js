import React from 'react';
import TodoItem from './TodoItem'
import data from './itemsList.json'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: data
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.status = !todo.status
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render() {
        const items = this.state.todos.map(item => {
            return (
                <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
            );
        });
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default Todos;
