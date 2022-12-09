import { Card, CardGroup, Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBarSerMod from "./NavBarSerMod";
import NavBarServCourses from "./NavBarServCourses";
import { Link } from "react-router-dom";

function ServPage() {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

  // Adicionar filtragem de tipos com base na situação
  // const [tipo, setTipo] = useState("")
  const [situacao, setSituacao] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://ironrest.cyclic.app/cursos");
        response.data.map((el) => {
          if (el.situacao == "Em andamento" || el.situacao == "Concluído") {
            el.situacao = "Inscrições Encerradas";
          }
          const dataFormatada = `${el.periodoInscricao.substr(
            6,
            4
          )}-${el.periodoInscricao.substr(3, 2)}-${el.periodoInscricao.substr(
            0,
            2
          )}`;
          const time = new Date(dataFormatada).getTime();
          if (time > new Date().getTime()) {
            el.situacao = "Em breve";
          }
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <NavBarSerMod />
      <NavBarServCourses setSituacao={setSituacao} />
      <Row>
        {/* <img
     className="sevidor mb-3 mt-3"
          src="https://blog.even3.com.br/wp-content/uploads/2020/06/dicas-estudar-online.png"
          alt="servidor"
          height="300"
          widht="300"
        /> */}

        <h2 className="mb-3 mt-3 text-muted">
          Bem-vindo, Servidor!
          <br />
        </h2>
        <h4 className="mb-4 text-muted">
          Aproveite os cursos de alto desempenho para a formação de habilidades
          nas várias áreas de conhecimento.
          <br /> <br />
        </h4>
        <h2 className="mb-4 text-muted">
          {" "}
          Confira os cursos com inscrições abertas:
        </h2>
        {data.map((current) => {
          if (current.situacao.search(situacao) != -1) {
            return (
              <>
                <Card
                  key={current._id}
                  className="mb-3 mt-3 p-2 m-4 bg-light text-dark"
                  style={{ width: "19rem" }}
                >
                  <Card.Img variant="top" src={current.foto} />
                  <Card.Body>
                    <Card.Title className="mb-4">{current.nome}</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      {current.formaRealizacao}
                    </Card.Subtitle>

                    <Button variant="outline-primary">
                      <Link
                        className="saibamais"
                        to={`/saibaMaisCourse/${current._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        Saiba mais
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </>
            );
          }
        })}
      </Row>
    </Container>
  );
}
export default ServPage;