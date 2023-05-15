import { useState } from 'react'
import ProfileSection from "./components/Profile"
import DescubNavbar from "./components/Navbar"
import ActivitySection from "./components/Activity"
import DescubFooter from "./components/Footer"

function App() {

  return (
    <>
      <header>
        <DescubNavbar />
      </header>
      <main>
        <ProfileSection />
        <ActivitySection/>
      </main>
      <footer>
        <DescubFooter/>
      </footer>
    </>
  );
}

export default App
