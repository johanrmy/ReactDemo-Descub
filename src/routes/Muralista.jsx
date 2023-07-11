import ProfileSection from "../components/Profile"
import ActivitySection from "../components/Activity"
import DescubNavbar from "../components/Navbar";
import DescubFooter from "../components/Footer";
import React,{useEffect,useState} from "react";
import { MuralistaApi } from "../data/Muralista";
import { useParams } from "react-router-dom";
import { MuralesApi } from "../data/Murales";
import { ScaneosApi } from "../data/Scaneos";
import load from '../assets/load.gif'
import { Container,Row,Col } from "react-bootstrap";

function Muralista(){
  const[muralista,setMuralista] = useState(null)
  const[mural,setMurales] = useState(null)
  const[scaneos,setScaneos] = useState(null)
  const params = useParams()
  useEffect(()=>{
    MuralistaApi(params.id,setMuralista)
    MuralesApi(params.id,setMurales)
    ScaneosApi(params.id,setScaneos)
  },[])
  console.log(scaneos)
    return (
      <>
        <DescubNavbar />
        {muralista != null && mural != null && scaneos != null ? (
          <ProfileSection
            seudonimo={muralista.data.seudonimo}
            user_instagram={muralista.data.userInstagram}
            user_facebook={muralista.data.userFacebook}
            email={muralista.data.email}
            foto = {muralista.data.foto}
            infoMural={mural.data}
            infoScaneos={scaneos.data}
          />
        ) : (
          <Container>
            <Row className="mb-5">
              <Col className="d-flex justify-content-center"><img src={load} alt="loading..." className="my-5" width={400}/></Col>
            </Row>
          </Container>
        )}
        {mural != null ?(
          <ActivitySection infoMural={mural.data}/>
        ):(
          <div></div>
        )}
        <DescubFooter />
      </>
    );
}

export default Muralista