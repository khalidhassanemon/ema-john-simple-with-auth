import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import './Login.css';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(error => console.log(error));
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='' required />
                </div>
                <input className='btn-submit' type='submit' value='login' />
            </form>
            <p>New to ema john?<Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;