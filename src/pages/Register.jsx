import React from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div class="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder='Username' />
                <input required type="text" placeholder='Email' />
                <input required type="password" placeholder='Password' />
                <button>Register</button>
                <p>Error message!</p>
                <span >Already have an account? <Link to="/login" >Login</Link>
                </span>
            </form>
            </div>
    )
}
export default Register