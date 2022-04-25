import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'

function App() {
  

  return (
    <div>
    <Routes>
       <Route path='/' element={<Nav />}></Route>
    </Routes>
    </div>
  )
}

export default App
