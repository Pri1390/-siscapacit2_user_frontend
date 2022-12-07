import { Button, Container } from "react-bootstrap";
import NavBarServMod from "./NavBarSerMod";
import NavBarServCourses from "./NavBarServCourses";
import ServPage from "./ServPage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SaibamaisCourse() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/cursos/${id}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <NavBarServMod />
      <NavBarServCourses />
      <Container>
        <h1>Página de Detalhes de cada curso</h1>
        <h2>{data.nome}</h2>

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
