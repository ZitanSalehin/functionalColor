import React from 'react'
import { Navbar,Nav,Container,NavLink } from "react-bootstrap";

function Navbar() {
  return (
      
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Furniture Mart</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink href="#home">Sofa</NavLink>
      <NavLink href="#features">Bed</NavLink>
      <NavLink href="#pricing">Table</NavLink>
    </Nav>
    </Container>
  </Navbar>
  
  )
}

export default Navbar