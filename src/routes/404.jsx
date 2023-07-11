import DescubNavbar from "../components/Navbar"
import { Container,Row,Col } from "react-bootstrap";
import evil from '../assets/evil.svg'
function NotFound(){
return(
    <>
        <DescubNavbar/>
        <section className="cero_picture my-5">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12} className="d-flex align-items-center">
                <div className="d-flex flex-column">
                  <h1 className="title-div-estadistica px-5 pt-5 text-center text-danger">Ups! 404</h1>
                  <div className="px-5 pb-5 subtitle-div-estadistica text-center text-danger">No encontramos la página que buscas</div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="d-flex justify-content-center align-items-center">
                  <img src={evil} alt="heart-paint" className="PaintImgCero"/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </>
)
}
export default NotFound