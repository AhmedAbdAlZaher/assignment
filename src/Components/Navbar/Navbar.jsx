import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';




export default function navbar() {
  return (
    <>   
  <Navbar className="bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary  myNavbar py-4 ">
    <Container>
      <Navbar.Brand className='text-white' href="Home">Start FRAMEWORK </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link  className='text-white' href="about">About</Nav.Link>
          <Nav.Link  className='text-white' href="Portfolio">Portfolio</Nav.Link>
          <Nav.Link  className='text-white' href="Contact">Contact</Nav.Link>  
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

