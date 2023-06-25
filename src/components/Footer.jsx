import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../assets/descub_logo_red.svg'
import { Link} from "react-router-dom";

function DescubFooter(){
    return (
      <footer>
        <Container>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12} className="mb-4 mb-md-0 DescubIcon">
            <Link to={"/"} className="DescubIcon">
                  <img src={logo} alt="descub_logo" className='DescubImg'/>
                </Link>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} className="mb-4 mb-md-0 linksfooter text-center">
              <h5 className="text-uppercase mb-0 linksheadfooter">Navegar</h5>

              <ul className="list-unstyled mb-0">
                <li className="linkfooter">
                  <Link to={"/tusmurales"} className="DescubLinksFooter text-footer">
                    Tus Murales
                  </Link>
                </li>
                <li className="linkfooter">
                  <Link to={"/mapear"} className="DescubLinksFooter text-footer">
                    Mapear
                  </Link>
                </li>
                <li className="linkfooter">
                  <Link to={"/estadisticas"} className="DescubLinksFooter text-footer">
                    Estadísticas
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} className="mb-4 mb-md-0 linksfooter text-center">
              <h5 className="text-uppercase mb-0 linksheadfooter">Guías</h5>

              <ul className="list-unstyled mb-0">
                <li className="linkfooter">
                  <a href="#!" className="text-footer">
                    Usuario
                  </a>
                </li>
                <li className="linkfooter">
                  <a href="#!" className="text-footer">
                    Vistas
                  </a>
                </li>
                <li className="linkfooter">
                  <a href="#!" className="text-footer">
                    Configuración
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="text-center p-3 DescubCopy">
          © 2023 Copyright:
          <Link to={"/"} className='text-dark'>Descub.com</Link>
        </div>
      </footer>
    );
}
export default DescubFooter