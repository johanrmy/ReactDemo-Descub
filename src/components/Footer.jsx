import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
function DescubFooter(){
    return (
      <>
        <Container>
          <Row>
            <div className='col-lg-4 col-md-6 mb-4 mb-md-0 DescubIcon'>
              Descub
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 linksfooter">
              <h5 className="text-uppercase linksheadfooter">Navegar</h5>

              <ul className="list-unstyled mb-0">
                <li className="linkfooter">
                  <a href="#!" className="text-dark">
                    Tus murales
                  </a>
                </li>
                <li className="linkfooter">
                  <a href="#!" className="text-dark">
                    Mapear
                  </a>
                </li>
                <li className="linkfooter">
                  <a href="#!" className="text-dark">
                    Estadísticas
                  </a>
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
        <div
          className="text-center p-3 DescubCopy"
        >
          © 2023 Copyright:
          <a className="text-dark" href="#">
            Descub.com
          </a>
        </div>
      </>
    );
}
export default DescubFooter