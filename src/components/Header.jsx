import React from 'react'
import {Navbar,NavDropdown,Nav,Container  } from 'react-bootstrap';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">School App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/addcourse">Add Course</NavDropdown.Item>
                <NavDropdown.Item href="/addsubject">Add Subject</NavDropdown.Item>
                <NavDropdown.Item href="/viewCourses">View Courses</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>
  )
}

export default Header;