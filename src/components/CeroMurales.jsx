import { Container,Row,Col } from "react-bootstrap";
import heartPaint from '../assets/heart-paint.svg'

const CeroMurales = () => {
    return(
        <>
        <section className="cero_picture my-5">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12} className="d-flex align-items-center">
                <div className="d-flex flex-column">
                  <h1 className="title-div-estadistica px-5 pt-5 text-center text-danger">Sin Murales</h1>
                  <div className="px-5 pb-5 subtitle-div-estadistica text-center text-danger">Sal a la ciudad y escanea un mural</div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="d-flex flex-column">
                  <img src={heartPaint} alt="heart-paint" className="PaintImgCero"/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        </>
    )
  }
export default CeroMurales