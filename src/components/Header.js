import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import Logo from "./Logo";

class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className="header">
                <NavLink className="nav-link" to={"/"}><Logo /></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to={"/skills"}>Skills</NavLink>
                        <NavLink className="nav-link" to={"/achievements"}>Achievements</NavLink>
                        <NavLink className="nav-link" to={"/projects"}>Projects</NavLink>
                        <NavLink className="nav-link" to={"/getInTouch"}>Get in touch</NavLink>
                        <NavLink className="nav-link" to={"/resume"}>Resume</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;