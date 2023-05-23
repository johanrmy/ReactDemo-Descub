import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import logo from '../assets/descub_logo.svg'
import { Link} from "react-router-dom";

function DescubFooter(){
    return (
      <footer>
        <Container>
          <Row>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 DescubIcon">
            <Link to={"/"} className="DescubIcon">
                  <img src={logo} alt="descub_logo" className='DescubImg' width={250}/>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 linksfooter">
              <h5 className="text-uppercase linksheadfooter">Navegar</h5>

              <ul className="list-unstyled mb-0">
                <li className="linkfooter">
                  <Link to={"/tusmurales"} className="DescubLinksFooter text-dark">
                    Tus Murales
                  </Link>
                </li>
                <li className="linkfooter">
                  <Link to={"/mapear"} className="DescubLinksFooter text-dark">
                    Mapear
                  </Link>
                </li>
                <li className="linkfooter">
                  <Link to={"/estadisticas"} className="DescubLinksFooter text-dark">
                    Estadísticas
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 mb-4 mb-md-0 linksfooter">
              <h5 className="text-uppercase mb-0 linksheadfooter">Guías</h5>

              <ul className="list-unstyled mb-0">
                <li className="linkfooter">
                  <a href="#!" className="text-dark">
                    Usuario
                  </a>
                </li>
                <li className="linkfooter">
                  <a href="#!" className="text-dark">
                    Vistas
                  </a>
                </li>
                <li className="linkfooter">
                  <a href="#!" className="text-dark">
                    Configuración
                  </a>
                </li>
              </ul>
            </div>
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