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
        <div className='login'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to Bhojon Bilash? <Link to="/register">Create Acount</Link></p>
                <div>------------or-----------</div>
                <button onClick={handleGoogleLogin}>Google Sign In </button>
            </div>
        </div>
    );
};

export default Login;