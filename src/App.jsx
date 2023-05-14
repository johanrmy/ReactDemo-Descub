import { useState } from 'react'
import ProfileSection from "./Profile"
import DescubNavbar from "./Navbar"
import ActivitySection from "./Activity"
import DescubFooter from "./footer"

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
