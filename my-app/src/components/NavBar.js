import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FormattedMessage } from 'react-intl';

export default function NavBar() {
	return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <FormattedMessage id="navbar.text" defaultMessage="Eric Lee" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <FormattedMessage id="navbar.home" defaultMessage="Home" />
          </Nav.Link>
          <Nav.Link href="/about">
            <FormattedMessage id="navbar.about" defaultMessage="About" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
	)
}
