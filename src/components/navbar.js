import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function NavbarTop(props) {
    return (
        <Navbar className='navbar'>
            <Nav fill variant="tabs" style={{ width: "100%" }}>
                <Nav.Item>
                    <Nav.Link className='nav-link'>About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-link'>My Work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='nav-link'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default NavbarTop;