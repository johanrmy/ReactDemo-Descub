import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import logo from '../assets/descub_logo_red.svg'
import { Button } from 'react-bootstrap';

function DescubNavbar(props) {
  DescubNavbar.defaultProps = {
    isA : true
  }
  console.log(props.isA)
  return (
    <header>
      <Container>
        <Row className="px-0">
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className="py-3 DescubNavbar"
          >
            <Container>
              <Col sm={4} className="d-flex justify-content-center">
                <Link to={"/"} className="DescubIcon d-inline-block">
                  <img src={logo} alt="descub_logo" className="DescubImg" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </Col>
              <Col sm={8}>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav>
                    <Link
                      to={"/tusmurales"}
                      className="DescubLinks mx-4 d-flex align-items-center text-center justify-content-center"
                    >
                      Tus Murales
                    </Link>
                    <Link
                      to={"/mapear/:id"}
                      className="DescubLinks mx-4 d-flex align-items-center text-center justify-content-center"
                    >
                      Mapear
                    </Link>
                    <Link
                      to={"/estadisticas"}
                      className="DescubLinks mx-4 d-flex align-items-center text-center justify-content-center"
                    >
                      Estadisticas
                    </Link>
                  </Nav>
                  {!props.isA ? (
                    <Link to={"/login"} className="DescubLinks mx-5 d-flex align-items-center text-center justify-content-end">
                      <Button variant="danger" type="submit" className='descub-submit-form'>
                        Inicia Sesión
                      </Button>
                    </Link>
                  ) : (
                    <Nav className="mx-auto">
                      <NavDropdown
                        title="Mi Usuario"
                        id="collasible-nav-dropdown"
                        className="DescubLinks"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Usuario
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Configuraciones
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">
                          Cerrar Sesión
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  )}
                </Navbar.Collapse>
              </Col>
            </Container>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
}

export default DescubNavbar;