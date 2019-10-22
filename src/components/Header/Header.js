import React from 'react';
import logo from '../../img/logo.jpg';
import './Header.css';

const Header = (props) => {
    return (
        <div className ='header'>
            <img src={logo} alt=""/>
        </div>
    );
}

export default Header;
