import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

export default function navbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary myNavbar py-4 ">
    <Container>
      <Navbar.Brand className='text-white' href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='text-white' href="#home">Home</Nav.Link>
          <Nav.Link className='text-white' href="#link">Portfolio</Nav.Link>
          <Nav.Link className='text-white' href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
