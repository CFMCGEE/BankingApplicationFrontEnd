import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const HeaderComponent = () => {

  return (

      <Navbar style={{ backgroundColor: "#008080", color: "#FFFFFF" }} variant="dark">
      <Container>
      <Navbar.Brand href="/">One Piece of Bread Banking</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavDropdown className ="fancy_text" title="Pages" id="basic-nav-dropdown">
      <NavDropdown.Item href="/create-account">Create Account</NavDropdown.Item>
      <NavDropdown.Item href="/create-customer">Create Customer</NavDropdown.Item>
      <NavDropdown.Item href="/create-deposit">Create Deposit</NavDropdown.Item>
      <NavDropdown.Item href="/create-bill">Create Bill</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/accounts">List of Accounts</NavDropdown.Item>
      <NavDropdown.Item href="/customers">List of Customers</NavDropdown.Item>
      <NavDropdown.Item href="/bills">List of Bills</NavDropdown.Item>
      </NavDropdown>
      </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>

  );
};

export default HeaderComponent;
