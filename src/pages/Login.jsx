import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div class="auth">
            <h1>Login</h1>
            <form >
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
                <p>Error message!</p>
                <span ><Link to="/register" >Create an account</Link>
                </span>
            </form>
            </div>
    )
}
export default Login