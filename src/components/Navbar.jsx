import Mapeo from '../routes/Mapeo'
import Murales from '../routes/Murales'
import Estadisticas from '../routes/Estadisticas'
import Muralista from '../routes/Muralista';
import Home from '../routes/Home';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import logo from '../assets/descub_logo.svg'

function DescubNavbar() {
  return (
    <header>
      <Container>
        <Row className="px-0">
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className="p-4 DescubNavbar"
          >
            <Container>
              <Col>
                <Link to={"/"} className="DescubIcon">
                  <img src={logo} alt="descub_logo" className='DescubImg' width={320} height={80}/>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </Col>
              <Col sm={9}>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className='mx-auto'>
                    <Link to={"/tusmurales"} className="DescubLinks mx-4">
                      Tus Murales
                    </Link>
                    <Link to={"/mapear"} className="DescubLinks mx-4">
                      Mapear
                    </Link>
                    <Link to={"/estadisticas"} className="DescubLinks mx-4">
                      Estadisticas
                    </Link>
                  </Nav>
                  <Nav className='mx-auto'>
                    <NavDropdown
                      title="Mi Usuario"
                      id="collasible-nav-dropdown"
                      className='DescubLinks'
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Usuario
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Vistas
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.3">
                        Configuraciones
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
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