import { Container,Row,Col } from "react-bootstrap";
import MuralCard from "./MuralCard";
const CargaMurales = () => {
    const estructura = [0,1,2,3,4,5]
    return(
      <>
      <section className="estadisticas_picture">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="d-flex flex-column">
              <h1 className="title-div-estadistica px-5 pt-5 text-center">Tus Murales</h1>
              <div className="px-5 pb-5 subtitle-div-estadistica text-center">Explora tu lista de murales</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Container>
      <Row>
        {estructura.map((card) => (
        <Col lg={4} md={4} sm={6} xs={12} key={card} className="my-2">
          <MuralCard titulo="Buscando mural..."  id ={card}/>
        </Col>
        )
        )}
      </Row>
    </Container>
      </>
    )
  }
export default CargaMurales