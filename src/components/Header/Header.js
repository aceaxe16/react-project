import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Manga World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Always showed*/}
            <Nav.Link href="/catalog">Catalog</Nav.Link>
            {/* Show if guest */}
            {isAuthenticated && (
              <>
                <Nav.Link href="/add-manga">Add Manga</Nav.Link>
                <Nav.Link href="/profile">{userEmail}</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
