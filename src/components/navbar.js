import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const categories = ["Joyas", "Anillos", "Cadenas", "Pulseras"];

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Joyeria 0800-Don Rouch</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {categories.map((category, index) => (
            <Nav.Link href={`#${category.toLowerCase()}`} key={index}>
              {category}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
