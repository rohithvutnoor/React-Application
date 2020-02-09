import React from 'react';
import TodoItem from './TodoItem'
import todoData from './itemsList.json'

class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            //todos: data
            todos:[],
            loading:true
        }
        this.handleChange = this.handleChange.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading:false,
                todos:data
            })
        })
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    deleteTask(id){
        this.setState(prevState=>{
            for( var i = 0; i < prevState.todos.length; i++){ 
                if ( prevState.todos[i].id === id) {
                    prevState.todos.splice(i, 1); 
                }
            }
            const updatedTodos = prevState.todos
            return {
                todos: updatedTodos
                
            }
            
        })
    }

    render() {
        const items = this.state.todos.map(item => {
            return (
                <div>
                    <TodoItem key={item.id} item={item} deleteTask={this.deleteTask} handleChange={this.handleChange} />
                </div>
            );
        });
        if (this.state.loading) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div>
                    {items}
                </div>
            )
        }
    }
}

export default Todos;