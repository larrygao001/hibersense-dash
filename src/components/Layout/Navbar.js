import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png';
import textLogo from '../../assets/images/HiberSenseWhite_Logo.png';
import './layout.css';

const Navbar=()=>{
    return (
        <div id='nav'>
            <NavLink className='nav-item' to='/'>
                <img className='logo' src={logo} alt='logo-white'></img>
                <img className='logo-text' src={textLogo} alt='hibersense white logo'></img>
            </NavLink>
            <NavLink className='nav-item' to='/summary'>Summary</NavLink>
            <NavLink className='nav-item' to='/rooms'>Rooms</NavLink>
            <NavLink className='nav-item' to='/settings'>Settings</NavLink>
        </div>
    )
}


export default Navbar;
