import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Aquí defines las categorías
const categories = [
  { id: 'plata', name: 'Plata' },
  { id: 'oro', name: 'Oro' },
  { id: 'oro-rosa', name: 'Oro Rosa' },
];

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Don Rouch</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Catalogo</Nav.Link>
          {categories.map(category => (
            <Nav.Link key={category.id} as={Link} to={`/category/${category.id}`}>
              {category.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
