import React from 'react'
import axios from 'axios'

export default class Registration extends React.Component {
    constructor() {
        super();
        this.state={
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }

    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    registerUser(){
        axios.post('/auth/register', { // <= this is the object that were sending //
            username: this.state.username,
            password: this.state.password
        }).then(() => this.setState({redirect: true })).catch(() => alert('registration unsuccessful. try again'))
    }
    render() {
        return (
            <div className='registration'>

                <h3>Create a New Account</h3>
                <div>
                    Username
                    <input onChange={this.handleUsername}placeholder='username' />
                    Password
                    <input onChange={this.handlePassword} placeholder='password' type='password'/>
                </div>
                <button onClick ={this.registerUser}>Register</button>
            </div> 
        )
    }
}