import DescubNavbar from "../components/Navbar";
import DescubFooter from "../components/Footer";
import MuralesSection from "../components/Murales";
import React, { useEffect, useState } from "react";
import { TusMuralesApi } from "../data/TusMurales";
import CargaMurales from "../components/CargaMurales";
import { useAuth0 } from "@auth0/auth0-react";
import load from '../assets/load.gif'
import { Container,Row,Col } from "react-bootstrap";

function Murales() {
  const [murales, setMurales] = useState(null);
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  
  useEffect(() => {
    if (isAuthenticated && user && user.email) {
      TusMuralesApi(user.email, setMurales);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  return (
    <>
      <DescubNavbar />
      {isLoading ? (
        <Container>
          <Row className="mb-5">
            <Col className="d-flex justify-content-center"><img src={load} alt="loading..." className="my-5" width={400}/></Col>
          </Row>
        </Container>
      ) : isAuthenticated && murales !== null ? (
        <MuralesSection muralesList={murales.data} />
      ) : 
      <Container>
      <Row className="mb-5">
        <Col className="d-flex justify-content-center"><img src={load} alt="loading..." className="my-5" width={400}/></Col>
      </Row>
    </Container>
      }
      <DescubFooter />
    </>
  );
}
export default Murales;
