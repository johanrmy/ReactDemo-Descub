import { Container,Row,Col,Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import { BsPinMapFill,BsPersonHearts } from "react-icons/bs";
import { AiOutlineBgColors } from "react-icons/ai";
function HomeSection(){
    return (
      <section>
        <Container>
          <Row className="my-2">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Row className="div-home-1">
                <Col lg={7} md={12} sm={12} xs={12}>
                  <div className="title-div-home-1 p-4">
                    Conéctate con tus murales vistos
                  </div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div className="p-4">
                    <Link to={"/tusmurales"}>
                      <Button
                        className="btn-home-1 px-4 py-2"
                        variant="warning"
                      >
                        Descubre
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-4">
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="div-home-2 p-3">
                <div className="card-home-start py-2 px-4">
                    <BsPinMapFill className="icon-home"/>
                    <div className="text-home-2 mt-3">Reconoce las ubicaciones de tus murales escaneados en un mapa</div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="div-home-2 p-3">
              <div className="card-home-center py-2 px-4">
                    <BsPersonHearts className="icon-home"/>
                    <div className="text-home-2 mt-3">Apoya a un artista mediante los QRs que se encuentran en cada mural</div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="div-home-2 p-3">
              <div className="card-home-end py-2 px-4">
                    <AiOutlineBgColors className="icon-home"/>
                    <div className="text-home-2 mt-3">Ve más allá de un mural con información detallada</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default HomeSection