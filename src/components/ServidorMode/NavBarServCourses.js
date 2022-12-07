import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavBarServCourses() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/pageServidor">Todos os Cursos</Link>{" "}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Aperfeiçoamento</Nav.Link>
            <Nav.Link href="#features">Especialização</Nav.Link>
            <Nav.Link href="#pricing">Mestrado</Nav.Link>
            <Nav.Link href="#pricing">Doutorado</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          </>
  );
}

export default NavBarServCourses;
