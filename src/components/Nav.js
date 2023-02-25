import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'

const Nav = () => {
    return (
        <header className='headerstyle'>
            <Link className='linksignin' to="/signin">Sign In</Link>
            <Link className='linksignup' to="/signup">Sign Up</Link>
        </header>
    );
};

export default Nav;