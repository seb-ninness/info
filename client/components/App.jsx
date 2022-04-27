import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Work from './Work'
import Contact from './Contact'
import Footy from './Footy'

function App() {
  

  return (
    <div className='app-container'>
      <div className='nav-container'>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Work' element={<Work />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/FootyFan' element={<Footy />}></Route>
          </Routes>
      </div>
    </div>
  )
}

export default App
