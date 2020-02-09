import React, {Component} from 'react'
import FormComponent from './FormCmponent'

class FormContainer extends Component{
    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            direction:"",
            cheese:false,
            pepperoni:false,
            mozzarella:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
        this.setState({
            [name]: checked
        }):
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <FormComponent data={this.state} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default FormContainer