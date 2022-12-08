import { Button, Container,Card, Col, Form, ListGroup } from "react-bootstrap";
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
        
        <Card className="mb-3 mt-3 d-flex align-items-center justify-content-center "
                style={{ width: "30rem" }}>
        <Card.Img variant="top" src={data.foto} />
        </Card>        
        <h2 className="mb-5 mt-5">{data.nome}</h2>
          

        <Col>
             <ListGroup.Item action variant="primary">
                  Descrição: {data.descricao}
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  Período de inscrição: {data.situacao}
                </ListGroup.Item>
              <ListGroup variant="flush">
                <ListGroup.Item  action variant="success">
                  Forma de realização: {data.formaRealizacao}
                </ListGroup.Item>
                <ListGroup.Item  action variant="secondary">
                  Local: {data.local}
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  Ofertante: {data.ofertante}
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  Tipo: {data.tipo}
                </ListGroup.Item>
                 <ListGroup.Item action variant="warning">
                  Período de inscrição: {data.periodoInscricao}
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  Período de realização: {data.periodoRealizacao}
                </ListGroup.Item>
              </ListGroup>
            </Col>

        <br/>
        <br/>
        

        <Button className="p-4 mb-3" variant="success" >
          Inscrever-se
        </Button>
      </Container>
    </div>
  );
}

export default SaibamaisCourse;
