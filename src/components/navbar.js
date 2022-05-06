import React from 'react'
// import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function NavbarTop(props) {
    return (
        <div className='topNav'>
            <nav className='navbar'>
                <div className='container'>             
                    <NavLink className='navbar-brand' to='/'>Anthony Ditore</NavLink>
                    <ul>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/aboutMe'>About Me</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/myWork'>My Work</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        </li>                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavbarTop;