import React, {Component} from 'react'

class Sample extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            secondName: "",
            freeText: "",
            check: false,
            theme: "",
            favColor: "Orange"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            }) :
            this.setState({
                [name]: value
            })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <form>
                        <input className="col-6" value={this.state.firstName} name="firstName" type="text" placeholder="First Name" onChange={this.handleChange} />
                        <input className="col-6" value={this.state.lastName} name="lastName" type="text" placeholder="Second Name" onChange={this.handleChange} />
                        <br /><br />
                        <textarea className="col-6" value={this.state.freeText} name="freeText" placeholder="start here.." onChange={this.handleChange} />
                        <br /><br />
                        <label className="col-11">
                            <input className="col-1" type="checkbox" checked={this.state.check} name="check" onChange={this.handleChange} />
                            Are you Smart ?</label>
                        <br />
                        <label>
                            <input type="radio"
                                name="theme"
                                value="Light"
                                checked={this.state.theme === "Light"}
                                onChange={this.handleChange} /> Light
                    </label>
                        <br />
                        <label>
                            <input type="radio"
                                name="theme"
                                value="Dark"
                                checked={this.state.theme === "Dark"}
                                onChange={this.handleChange} /> Dark
                    </label>
                        <br />
                        <select value={this.state.favColor} name="favColor" onChange={this.handleChange}>
                            <option value="Yellow">Yellow</option>
                            <option value="Green">Green</option>
                            <option value="Orange">Orange</option>
                        </select>
                    </form>
                    <br/>
                    <br/>
                    <br/><br/>

                </div>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h1>{this.state.freeText}</h1>
                <h1>{this.state.theme}</h1>
                <h1>{this.state.favColor}</h1>
                
                <br /><br /><br />
            </div>
        )
    }
}

export default Sample