// class component to return state
import React, { Component } from 'react'
import { addCharacter } from '../actions/characters'
import { connect } from 'react-redux'
// import { RegionInput } from '../components/regionInput'

class CharacterForm extends Component {
    state = {
        firstname: "",
        lastname: "",
        gender: "",
        age: "",
        region: "",
        trait1: "",
        trait2: "",
        background: "",
        storyhook: "",
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const character = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            age: this.state.age,
            region: this.state.region,
            trait1: this.state.trait1,
            trait2: this.state.trait2,
            background: this.state.background,
            storyhook: this.state.storyhook
        }
            this.props.addCharacter(character)
            this.setState({
                firstname: "",
                lastname: "",
                gender: "",
                age: "",
                region: "",
                trait1: "",
                trait2: "",
                background: "",
                storyhook: "",
            })
    }

    render() {
        return (
            <div>
                 <hr />
                    <div>
                        <h2 className='app-title'>CHARACTER FORM</h2>
                    </div>
                <hr />
                
                <div className='form-container'>
                <div className='notes'>
                            <h3>HOW TO USE THE APP:</h3>
                            <hr />
                            <fieldset className='how-to'>    
                            <span className='how-to'> To use the app you can fill out the form to the right and generate a character card by hitting the submit button. Or you can hit the fancy Random Character button and it will create a character for you.</span>
                            </fieldset>
                        </div>
                    <div className="character-form">
                        <form onSubmit={this.handleSubmit} >
                            <label className='input-label'>firstname:</label>
                            <input type="text" name="firstname" className="form-input" value={this.state.firstname} onChange={this.handleChange} />
                            <br/>
                            <label className='input-label'>lastname: </label>
                            <input type="text" name="lastname" className="form-input" value={this.state.lastname} onChange={this.handleChange}/>
                            <br/>
                            <label className='input-label'>Gender: </label>
                            <select name="gender" value={this.state.gender} onChange={this.handleChange} className="form-input">
                                <option></option>
                                <option name="gender" value="Male">Male</option>
                                <option name="gender" value="Female">Female</option>
                                <option name="gender" value="Non-Binary">Non-Binary</option>
                            </select>
                            <br/>
                            <label className='input-label'>Age: </label>
                            <input type="number" className="form-input" name= "age" value={this.state.age} min='1' onChange={this.handleChange}/>
                            <br/>
                            <label className='input-label'>Region: </label>
                            <input type="text" name="region" className="form-input" value={this.state.region} onChange={this.handleChange} />
                            <br/>
                            <label className='input-label'>Trait 1: </label>
                            <input type="text" name="trait1" className="form-input" value={this.state.trait1} onChange={this.handleChange} />
                            <br/>
                            <label className='input-label'>Trait 2: </label>
                            <input type="text" name="trait2" className="form-input" value={this.state.trait2} onChange={this.handleChange} />
                            <br/>
                            <label className='input-label'>Background: </label>
                            <textarea type="text" name="background" className="form-input-background" value={this.state.background} onChange={this.handleChange}/>
                            <br/>
                            <label className='input-label'>Story Hook: </label>
                            <textarea type="text" name="storyhook" className="form-input-story-hook" value={this.state.storyhook} onChange={this.handleChange}/>
                            <br/>
                            <button type="submit">submit</button>
                        </form>
                    </div>
                        
                </div>
            </div>
        )
    }
}

export default connect(null, { addCharacter })(CharacterForm)
     

