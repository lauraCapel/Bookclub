import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    
    
    return (
        <div>
        <div className="form-floating mb-3">
            <input className='form-control' type="text" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">User</label>
        </div>
        <div class="form-floating">
            <input className='form-control' type="password" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <div>
        <Link to="/Bookclubs" className='btn btn-light'>Log in</Link>
        </div>
        </div>
    )
}
