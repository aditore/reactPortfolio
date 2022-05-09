import React from 'react'
// import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function NavbarTop(props) {
    return (
        <nav className='navbar navbar-expand-lg justify-content-between'>             
            <NavLink className='navbar-brand' to='/'>Anthony Ditore</NavLink>
                <ul className='navbar-nav'>
                    <li className='nav-item px-2'>
                        <NavLink className='nav-link' to='/aboutMe'>About Me</NavLink>
                    </li>
                    <li className='nav-item px-2'>
                        <NavLink className='nav-link' to='/myWork'>Portfolio</NavLink>
                    </li>
                    <li className='nav-item px-2'>
                        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                    </li>
                    <li className='nav-item px-2'>
                        <NavLink className='nav-link' to='/resume'>Resume</NavLink>
                    </li>                        
                </ul>
        </nav>
    );
}

export default NavbarTop;