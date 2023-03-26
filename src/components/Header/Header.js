import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const Header = ()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Manga World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/add-manga">Add Manga</Nav.Link>
            <Nav.Link href="/services">Catalog</Nav.Link>           
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>  
            <Nav.Link href="/profile">Profile</Nav.Link>              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

