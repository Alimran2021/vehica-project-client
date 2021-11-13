import React from 'react';
import Box from '@mui/material/Box';
import { Container, Nav, Navbar } from 'react-bootstrap';
import UserMenu from '../../Home/UserMenu/UserMenu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth'
// navber here
const Navber = () => {
    const { user } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-white-retina-165x29.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link style={{ fontSize: '19px' }} as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link style={{ fontSize: '19px' }} as={Link} to="/explore">Explore</Nav.Link>
                            {user.email && <Nav.Link style={{ fontSize: '19px' }} as={Link} to="/dashboard">Dashboard</Nav.Link>}
                            <Nav.Link style={{ fontSize: '19px' }} as={Link} to="/login">Login</Nav.Link>
                            <Box>
                                <UserMenu />
                            </Box>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navber;