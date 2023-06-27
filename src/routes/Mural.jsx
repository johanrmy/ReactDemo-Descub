import DescubNavbar from "../components/Navbar";
import DescubFooter from "../components/Footer";
import DescubCarousel from "../components/Carousel";
import DescubPaleta from "../components/Paleta";

function Mural(){
    return (
      <body>
        <DescubNavbar/>
        <h1> 
        <p style={{ textAlign: 'center' }}>Mural</p>
        </h1>
        <DescubCarousel />
        
        <DescubPaleta/>
      </body>

    );
}
export default Mural