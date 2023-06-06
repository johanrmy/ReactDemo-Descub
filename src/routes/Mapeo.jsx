import DescubNavbar from "../components/Navbar"
import Map from "../components/Mapping"
import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { MapearApi } from "../data/Mapear";

function Mapeo(){
  const[mural,setMural] = useState(null)
  const params = useParams()
  useEffect(()=>{
    MapearApi(params.id_usuario,setMural)
  },[])
    return (
      <>
        <DescubNavbar />
        {mural != null ? (
        <Map muralScan={mural.data} />
        ): (
          "CARGANDO"
        )}
      </>
    );
}
export default Mapeo;