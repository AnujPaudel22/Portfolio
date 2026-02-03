import { Route, Routes } from "react-router-dom"
import Background from "./assets/components/Background"
import Navbar from "./assets/components/Navbar"
import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Contact from "./assets/pages/Contact"
import Skills from "./assets/pages/Skills"
import Projects from "./assets/pages/Projects"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/skill" element={<Skills />}/>
          <Route path="/project" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>

      </Routes> 
    </div>
  )
}

export default App
