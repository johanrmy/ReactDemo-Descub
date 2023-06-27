
import ProfileSection from "../components/Profile"
import ActivitySection from "../components/Activity"
import DescubNavbar from "../components/Navbar";
import DescubFooter from "../components/Footer";
import React,{useEffect,useState} from "react";
import { MuralistaApi } from "../data/Muralista";
import { useParams } from "react-router-dom";


function Muralista(){
  const[muralista,setMuralista] = useState(null)
  const params = useParams()
  useEffect(()=>{
    MuralistaApi(params.id,setMuralista)
  },[])
    return (
      <>
        <DescubNavbar />
        {muralista != null ? (
          <ProfileSection
            seudonimo={muralista.data.seudonimo}
            user_instagram={muralista.data.userInstagram}
            user_facebook={muralista.data.userFacebook}
            email={muralista.data.email}
            foto = {muralista.data.foto}
          />
        ) : (
          "CARGANDO"
        )}
        <ActivitySection />
        <DescubFooter />
      </>
    );
}

export default Muralista