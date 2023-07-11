import DescubNavbar from "../components/Navbar"
import Map from "../components/Mapping"
import CargarMapa from "../components/CargarMapa";
import React,{useEffect,useState} from "react";
import { MapearApi } from "../data/Mapear";
import { useAuth0 } from "@auth0/auth0-react";


function Mapeo(){
  const [murales, setMurales] = useState(null);
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user && user.email) {
      MapearApi(user.email, setMurales);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect()
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);
    return (
      <>
        <DescubNavbar/>
        {isLoading ? (
          <CargarMapa />
      ) : isAuthenticated && murales !== null ? (
        <Map muralScan={murales.data} />
      ) : (
        <CargarMapa/>
      )}
      </>
    );
}
export default Mapeo;