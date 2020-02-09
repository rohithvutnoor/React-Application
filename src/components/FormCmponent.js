import React, {Component} from 'react'

function FormComponent(props) {
    return(
            <div>
                <form>
                    <input type="text" placeholder="First Name" name="firstName" value={props.data.firstName} onChange={props.handleSubmit} /><br /><br />
                    <input type="text" placeholder="Last Name" name="lastName" value={props.data.lastName} onChange={props.handleSubmit} /><br /><br />
                    <input type="text" placeholder="Age" name="age" value={props.data.age} onChange={props.handleSubmit} /><br /><br />
                    <label>
                        <input 
                        type="radio" 
                        value="male" 
                        name="gender" 
                        checked={props.data.gender==="male"}
                        onChange={props.handleSubmit} /> Male
                    </label><br />
                    <label>
                        <input 
                        type="radio" 
                        value="female" 
                        name="gender" 
                        checked={props.data.gender==="female"}
                        onChange={props.handleSubmit} /> Female
                    </label>
                    <br /><br/>
                    <select 
                        value={props.data.direction}
                        name="direction"
                        onChange={props.handleSubmit}>
                        <option value="">Please choose your direction</option>
                        <option value="East">East</option>
                        <option value="West">West</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                    </select><br/><br/>

                    <label>
                        <input 
                            type="checkbox"
                            name="cheese"
                            onChange={props.handleSubmit}
                            checked={props.data.cheese}
                            /> Cheese
                    </label><br/>
                    <label>
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            onChange={props.handleSubmit}
                            checked={props.data.pepperoni}
                            /> Pepperoni
                    </label><br/>
                    <label>
                        <input 
                            type="checkbox"
                            name="mozzarella"
                            onChange={props.handleSubmit}
                            checked={props.data.mozzarella}
                            /> Mozzarella
                    </label><br/>

                <button> Submit</button>
                </form><br /><br /><br /><br />
                <h1>Hello {props.data.firstName} {props.data.lastName}</h1>
                <h1>Age: {props.data.age} </h1>
                <h1>Direction: {props.data.direction} </h1>
                <h1>Cheese: {props.data.cheese ? "Yes" : "No"}</h1>
                <h1>Pepperoni: {props.data.pepperoni ? "Yes" : "No"}</h1>
                <h1>Mozzarella: {props.data.mozzarella ? "Yes" : "No"}</h1>
            </div>
        )
    }

export default FormComponent