import React from 'react'

function TodoItem(props) {
    const markDone = {
        fontStyle: "italic",
        color: "white",
        textDecoration: "line-through",
        backgroundColor: "rgb(135, 252, 135)"
    }

    const iconColor = {
        color: "red"
    }

    return (
        <div className="todoitem row" style={props.item.completed ? markDone : null}>
            <div className="col-1">
                <input type="checkbox" checked={props.item.completed}
                    onChange={(event) => props.handleChange(props.item.id)}
                />
            </div>
            <div className="col-10">
                <span >{props.item.title}</span>
            </div>
            <div className="col-1 text-center">
                <i style={iconColor} onClick={(event) => {
                    props.deleteTask(props.item.id)
                }} className="material-icons">delete</i>
            </div>
        </div>
    )
}

export default TodoItem