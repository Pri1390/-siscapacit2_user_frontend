import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
          <Navbar.Brand>
            <Link to="/pageServidor" style={{ textDecoration: "none" }}>
              Todos os Cursos
            </Link>{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Por situação" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Inscrições Abertas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Inscrições encerradas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Em breve</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Por tipo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Aperfeiçoamento
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Especialização
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mestrado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Doutorado</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

/*   <Nav.Link href="#home">Aperfeiçoamento</Nav.Link>
            <Nav.Link href="#features">Especialização</Nav.Link>
            <Nav.Link href="#pricing">Mestrado</Nav.Link>
            <Nav.Link href="#pricing">Doutorado</Nav.Link> */

export default NavBarServCourses;
