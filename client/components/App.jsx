import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Work from './Work'
import Contact from './Contact'
import Footy from './Footy'
import Footer from './Footer'
import { StyledEngineProvider } from "@mui/material"

function App() {
 
  return (
    <div className='app-container'>
      <div className='nav-container'>
          <StyledEngineProvider injectFirst>
              <Nav />
                <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/Work' element={<Work />}></Route>
                  <Route path='/Contact' element={<Contact />}></Route>
                  <Route path='/FootyFan' element={<Footy />}></Route>
                </Routes>
              <Footer />
          </StyledEngineProvider>
      </div>
    </div>
  )
}

export default App
