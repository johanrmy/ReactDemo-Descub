import DescubNavbar from "../components/Navbar";
import DescubFooter from "../components/Footer";
import MuralesSection from "../components/Murales"
import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { TusMuralesApi } from "../data/TusMurales";
function Murales(){
  const[murales,setMurales] = useState(null)
  const params = useParams()
  useEffect(()=>{
    TusMuralesApi(params.id_usuario,setMurales)
  },[])
    return (
      <>
        <DescubNavbar />
        {murales != null ? (
          <MuralesSection muralesList={murales.data}/>
        ): (
          "CARGANDO"
        )}
        <DescubFooter />
      </>
    );
}
export default Murales