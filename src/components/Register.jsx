import { Container,Row,Col,Form,Button} from "react-bootstrap";
import logo from '../assets/descub_logo_red.svg'
import React, { useEffect } from 'react'
import heartPaint from '../assets/heart-paint.svg'
import heartpixel from '../assets/heart-pixel.svg'
import { Link } from "react-router-dom";

function DescubRegister(){
    return (
      <section className="descubregister">
        <Container>
          <Row>
            <div className="col-12 d-flex justify-content-between align-items-center py-2">
              <Link to={"/"} className="DescubIcon d-inline-block">
                <img
                  src={logo}
                  alt="descub_logo"
                  className="DescubImgRegister mt-4"
                />
              </Link>
              <Link to={"/login"} className="DescubIcon d-inline-block">
                <Button
                  variant="primary"
                  type="submit"
                  className="descub-submit-form"
                >
                  Inicia Sesión
                </Button>
              </Link>
            </div>
          </Row>
          <Row className="mt-5 vertical-center">
            <Col
              lg={6}
              md={12}
              sm={12}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <img src={heartpixel} alt="Image" className="PaintImgRegister" />
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <Form className="descub-form-register" method="post">
                <div className="text-center my-3 text-register">Regístrate</div>
                <Form.Group>
                  <label htmlFor="user" className="descub-label-form mb-1">
                    Usuario
                  </label>
                  <Form.Control
                    type="text"
                    name="user"
                    id="user"
                    placeholder="Ingresa un nombre de usuario"
                    className="descub-input-form mb-4"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="email" className="descub-label-form mb-1">
                    Correo Electrónico
                  </label>
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ingresa email"
                    className="descub-input-form mb-4"
                  />
                </Form.Group>
                <Form.Group>
                  <label htmlFor="password" className="descub-label-form  mb-1">
                    Contraseña
                  </label>
                  <Form.Control
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingresa contraseña"
                    autoComplete="on"
                    className="descub-input-form mb-4"
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    className="descub-submit-form"
                  >
                    Registrar
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default DescubRegister
