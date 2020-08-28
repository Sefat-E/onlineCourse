import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <p><small>(Real Life Hack)</small></p>
            <nav>
                <a href="/home">Home</a>
                <a href="/courses">Courses</a>
                <a href="/teacher">Teacher</a>
            </nav>
        </div>
    );
};

export default Header;