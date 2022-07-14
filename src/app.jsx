import React from 'react'
import "./app.css";
import {Navbar, About, Header, Services, Portfolio, Contact, Footer} from "./components/index.js"



const App = () => {
  return (
    <main className='app'>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

export default App