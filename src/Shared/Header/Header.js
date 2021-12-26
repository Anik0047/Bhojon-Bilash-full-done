import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className="navBar">
            <div className="nav-container">
                <div className="site-name">
                    Bhojon Bilash
                </div>
                <div className="site-links">
                    <ul>
                        <li><NavLink to="/shop">Home</NavLink></li>
                        <li><NavLink to="/review">Order</NavLink></li>
                        <li><NavLink to="#">Contact</NavLink></li>
                        <li>{user.email && <span>{user.displayName}</span>}</li>
                        <li>{user.email ?
                            <button onClick={logout}>Log out</button>
                            :
                            <NavLink to="/login">LOGIN</NavLink>}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;