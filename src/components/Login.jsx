import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from '../assets/descub_logo_red.svg'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

function DescubLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      email: username,
      contrasena: password
    };

    try {
      const response = await axios.get('http://127.0.0.1:8080/usuario/getAllUsuarios');

      const usuarios = response.data;
      const foundUser = usuarios.find(
        (usuario) =>
          usuario.email === username && usuario.contrasena === password
      );

      if (foundUser) {
        // Inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
        // Realiza las acciones necesarias, como guardar los tokens de acceso y redirigir al usuario
      } else {
        // Credenciales inválidas
        setError('Credenciales inválidas');
      }
    } catch (error) {
      // Error al conectarse a la API
      setError('Error al conectarse a la API');
    }
  };

  return (
    <section className="descublogin">
      <Container>
        <Row>
          <div className="col-12 d-flex justify-content-between align-items-center py-2">
            <Link to={"/"} className="DescubIcon d-inline-block">
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
            <Form className="descub-form-login" method="post" onSubmit={submit}>
              <div className="text-center my-3 text-login">Inicia Sesión</div>
              <Form.Group>
                <label htmlFor="email" className="descub-label-form mb-1">
                  Correo Electrónico
                </label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Ingresa email"
                  onChange={e => setUsername(e.target.value)}
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
                  required
                  onChange={e => setPassword(e.target.value)}
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
              {error && <p className="text-danger">{error}</p>}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DescubLogin;
