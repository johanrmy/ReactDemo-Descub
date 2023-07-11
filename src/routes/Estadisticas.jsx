import DescubNavbar from "../components/Navbar";
import DescubFooter from "../components/Footer";
import EstadisticaSection from "../components/Estadisticas";
import { EstadisticasApi } from "../data/Estadisticas";
import { useState,useEffect } from "react";
import load from '../assets/load.gif'
import { Container,Row,Col } from "react-bootstrap";

function Estadisticas(){
  const[estadistica,setEstadistica] = useState(null)
  useEffect(()=>{
    EstadisticasApi(setEstadistica)
  },[])
    return (
      <>
        <DescubNavbar/>
        {estadistica != null ? (
          <EstadisticaSection estadisticaScan = {estadistica.data}/>
        ): (
          <Container>
          <Row className="mb-5">
            <Col className="d-flex justify-content-center"><img src={load} alt="loading..." className="my-5" width={400}/></Col>
          </Row>
        </Container>
        )}
        <DescubFooter/>
      </>
    );
}
export default Estadisticas;