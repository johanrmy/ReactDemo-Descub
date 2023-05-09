import { useState } from 'react'
import ProfileSection from "./Profile"
import DescubNavbar from "./Navbar"
import ActivitySection from "./Activity"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <DescubNavbar />
      </header>
      <main>
        <ProfileSection />
        <ActivitySection/>
      </main>
    </>
  );
}

export default App
