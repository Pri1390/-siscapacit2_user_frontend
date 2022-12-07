import { Button, Container } from "react-bootstrap";
import NavBarServMod from "./NavBarSerMod";
import NavBarServCourses from "./NavBarServCourses";
import ServPage from "./ServPage";

function SaibamaisCourse() {
    
    return (
      <div>
        <NavBarServMod />
        <NavBarServCourses />
       <Container>
          <h1>Página de Detalhes de cada curso</h1>
          <br />
          <br />
          <p>Opção de Inscrever-se</p>

          <Button className="p-4" variant="success" size="lg">
            Inscrever-se
          </Button>
        </Container> 
      </div>
    );
}

export default SaibamaisCourse;