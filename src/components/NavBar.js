import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = (props) => {
        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href=""><i className="fab fa-github" aria-hidden="true" />Github Profile Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link  as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link  as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}

export default NavBar;


