import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='shop-container'>
            <div>
                <h2>Register</h2>
                 <form onSubmit="">
                 <input type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Your Re-enter Password"/>
                    <br />
                    <input type="submit" value="Submit" />
                 </form>
                 <p>Already have an acount <Link to="/login">Sign-IN</Link> </p>
                 <div>------------or-----------</div>
                <button>Google Sign In </button>
            </div>
        </div>
    );
};

export default Register;