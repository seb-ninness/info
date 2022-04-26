import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'

function App() {
  

  return (
    <div className='app-container'>
      <div className='nav-container'>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
      </div>
    </div>
  )
}

export default App
