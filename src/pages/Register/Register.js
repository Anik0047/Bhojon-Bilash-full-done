import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login banner'>
            <div>
                <h2>Register</h2>
                 <form onSubmit="">
                 <input className='input-field' type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input className='input-field' type="password" name="" id="" placeholder="Your Password"/>
                    <br />
                    <input className='input-field' type="password" name="" id="" placeholder="Your Re-enter Password"/>
                    <br />
                    <input className='btn-login gap' type="submit" value="Submit" />
                 </form>
                 <p> Already have an acount! <Link to="/login"  className='link'> Sign-IN</Link> </p>
                 <div className='gap'>----------------------or--------------------</div>
                <button className='btn-login gap'>Google Sign In </button>
            </div>
        </div>
    );
};

export default Register;