import { Container,Row,Col,Form,Button} from "react-bootstrap";
import logo from '../assets/descub_logo_red.svg'
import React, { useEffect } from 'react'
import tsetse from '../assets/tsetese.svg'
import heartPaint from '../assets/heart-paint.svg'
import { Link } from "react-router-dom";

function DescubLogin(){
    return (
      <section className="descublogin">
        <Container>
          <Row>
            <div className="col-12 d-flex justify-content-between align-items-center py-2">
              <Link to={"/login"} className="DescubIcon d-inline-block">
                <img
                  src={logo}
                  alt="descub_logo"
                  className="DescubImgLogin mt-4"
                />
              </Link>
              <Link to={"/register"} className="DescubIcon d-inline-block">
                <Button
                  variant="primary"
                  type="submit"
                  className="descub-submit-form"
                >
                  Regístrate
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
              <Form className="descub-form-login" method="post">
                <div className="text-center my-3 text-login">Inicia Sesión</div>
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
                    Iniciar Sesión
                  </Button>
                </div>
              </Form>
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <img src={tsetse} alt="Image" className="PaintImgLogin" />
            </Col>
          </Row>
        </Container>
      </section>
    );
}
export default DescubLogin