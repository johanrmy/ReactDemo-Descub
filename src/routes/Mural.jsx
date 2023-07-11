import DescubNavbar from "../components/Navbar";
import DescubFooter from "../components/Footer";
import MuralSection from "../components/Mural";
import { MuralApi } from "../data/Mural";
import { PaletaApi } from "../data/Paleta";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import load from '../assets/load.gif'
import { Container,Row,Col } from "react-bootstrap";

function Mural(){
    const[mural,setMural] = useState(null)
    const[paleta,setPalet] = useState(null)
    const params = useParams()
    useEffect(()=>{
        MuralApi(params.id,setMural)
        PaletaApi(params.id,setPalet)
    },[])
      return (
        <>
          <DescubNavbar/>
          {mural != null && paleta != null ? (
            <MuralSection infoMural = {mural.data} infoPaleta={paleta.data}/>
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
export default Mural