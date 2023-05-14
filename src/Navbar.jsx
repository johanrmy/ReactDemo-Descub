import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
function DescubNavbar() {
  return (
    <>
      <Container>
        <Row className="px-0">
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className="p-3 DescubNavbar"
          >
            <Container>
              <Col>
                <Navbar.Brand href="#home" className="DescubIcon">
                  Descub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </Col>
              <Col sm={9}>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#tusmurales">Tus Murales</Nav.Link>
                    <Nav.Link href="#mapear">Mapear</Nav.Link>
                    <Nav.Link href="#estadisticas">Estadísticas</Nav.Link>
                  </Nav>
                  <Nav>
                    <NavDropdown title="Mi Usuario" id="collasible-nav-dropdown">
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
    </>
  );
}

export default DescubNavbar;