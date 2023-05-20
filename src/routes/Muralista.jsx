import ProfileSection from "../components/Profile"
import ActivitySection from "../components/Activity"
import DescubNavbar from "../components/Navbar";
import DescubFooter from "../components/Footer";
import {Router} from "react-router-dom";

function Muralista(){
    return (
      <body>
        <DescubNavbar />
        <ProfileSection />
        <ActivitySection />
        <DescubFooter />
      </body>
    );
}

export default Muralista