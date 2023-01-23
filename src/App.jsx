import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gal from './components/artGal/gal'
import Contact from './components/contact/contact'
import Feature from './components/featured/feature'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Intro from './components/intro/intro'
import Introduce from './components/introduction/introduce'
import Process from './components/process/process'
import Service from './components/services/service'
import About from './components/about/about'
import Puc from './components/PUC/puc'


function App() {

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');

  if (spinner){
    setTimeout(() => {
      spinner.style.display="none";
      setLoading(false);
    }, 4000);
  }

  return (
    !loading && (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path ="/" element={(
            <>      
            <Header />
            <Intro />
            <Introduce />
            <Feature />
            <Process />
            <Gal />
            <Footer/>
            </>
          )}/>
        
          <Route path='/services' element={(
            <>
              <Header />
              <Service />
              <Footer/>
            </>
          )}/>

          <Route path='/contact' element={(
            <>
              <Contact />
            </>
          )}/>

          <Route path='/puc' element={(
            <>
              <Puc />
            </>
          )}/>

          <Route path='/about' element={(
            <>
            <Header />
            <About/>
            <Footer/>
            </>
          )}/>

        </Routes>  
      </div>
    </Router>
    )
  )
}

export default App
