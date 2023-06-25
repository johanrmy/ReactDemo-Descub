import DescubNavbar from "../components/Navbar";
import DescubFooter from "../components/Footer";
import HomeSection from "../components/Home";

function Home(isAllowed){
  const value = isAllowed.isAllowed
    return (
      <>
        <DescubNavbar isA={value}/>
        <HomeSection/>
        <DescubFooter />
      </>
    );
}
export default Home