import React from 'react'

class TodoItem extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="todoitem">
                <label>
                    <input type="checkbox" checked={this.props.item.status} 
                        onChange={(event)=>this.props.handleChange(this.props.item.id)}
                    />
                    <span>{this.props.item.title}</span>
                </label>
            </div>
        )
    }
}

export default TodoItem