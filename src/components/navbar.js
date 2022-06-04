import React from 'react'
// import { Nav } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';

function NavbarTop(props) {
    const location = useLocation();

    const activePage = location.pathname;

    return (
        <nav className='navbar navbar-expand-lg navbarTop'>
            {activePage === '/' ?             
            ( <NavLink className='navbar-brand navbarHead activePage' to='/'>Anthony Ditore</NavLink> )
            : ( <NavLink className='navbar-brand navbarHead' to='/'>Anthony Ditore</NavLink> )}
            <ul className='navbar-nav navbarLink'>
                <li className='nav-item px-2'>
                    {activePage === '/aboutMe' ? 
                    ( <NavLink className='nav-link activePage' to='/aboutMe'> About Me</NavLink> )
                    : ( <NavLink className='nav-link' to='/aboutMe'> About Me</NavLink> )}
                </li>
                <li className='nav-item px-2'>
                    {activePage === '/myWork' ?
                    ( <NavLink className='nav-link activePage' to='/myWork'>Portfolio</NavLink> )
                    : ( <NavLink className='nav-link' to='/myWork'>Portfolio</NavLink> )}
                </li>
                <li className='nav-item px-2'>
                    {activePage === '/contact' ?
                    ( <NavLink className='nav-link activePage' to='/contact'>Contact</NavLink> )
                    : ( <NavLink className='nav-link' to='/contact'>Contact</NavLink> )}
                </li>
                <li className='nav-item px-2'>
                    {activePage === '/resume' ?
                    ( <NavLink className='nav-link activePage' to='/resume'>Resume</NavLink> )
                    : ( <NavLink className='nav-link' to='/resume'>Resume</NavLink> )}
                </li>                        
            </ul>
        </nav>
    );
}

export default NavbarTop;