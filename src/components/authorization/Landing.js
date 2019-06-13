import React from 'react'
import {Link} from 'react-router-dom'

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <Link to="/login"><button>Login</button></Link>
                <Link to='/register'><button>Create Account</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
    }
}