import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import './SignUp.css'
const SignUp = () => {
    const [error, setError] = useState(null);

    const {createUser}=useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        if(password.length<6){
            setError('Your password must be 6 characters or more');
            return;
        }
        if (password !== confirm) {
            setError("Your password didn't match");
            return;
        }

        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          form.reset();
        })
        .catch(error=>{
          console.error("Error",error);
        })
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' id='' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type='password' name='confirm' id='' required />
                </div>
                <input className='btn-submit' type='submit' value='Sign Up' />
            </form>
            <p>Already have an Account?<Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;