import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import useAuth from '../../Hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className='login banner'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input className='input-field' type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input className='input-field' type="password" name="" id="" placeholder="Your Password"/>
                    <br />
                    <input className='btn-login gap' type="submit" value="Submit" />
                </form>
                <p>new to Bhojon Bilash? <Link to="/register" className='link'>Create Acount</Link></p>
                <div className='gap'>----------------------or--------------------</div>
                <button onClick={handleGoogleLogin} className='btn-login gap'>Google Sign In </button>
            </div>
        </div>
    );
};

export default Login;