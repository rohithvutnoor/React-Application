import React from 'react'

class TodoItem extends React.Component {
    render() {
        return (
            <div className="todoitem">
                <label>
                    <input type="checkbox" checked={this.props.item.status} />
                    <span>{this.props.item.title}</span>
                </label>
            </div>
        )
    }
}

export default TodoItem