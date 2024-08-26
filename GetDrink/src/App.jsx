import { useState } from 'react'

import './App.css'
import Section1 from './Componentes/Section1.jsx'
import Section2 from './Componentes/Section2.jsx'
import Section3 from './Componentes/Section3.jsx'
import Footer from './Componentes/Footer.jsx'
import NavBar from './Componentes/NavBar.jsx'

function App() {


  return (
    <>

      <NavBar/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />

    </>
  )
}

export default App
