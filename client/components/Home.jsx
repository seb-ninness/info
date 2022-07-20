import React from 'react'
import { Link } from 'react-router-dom'


 // turn into a global state
function Home() {
  

  return(
  <div className= 'home-container'>
    <div className='welly-container'>
    <h1 className='seb-ninness'><Link to='/'>Seb Ninness</Link></h1>
      <h3 className='web-dev'>Web Development & Design</h3>
    </div> 
    <div className='page-holder'>
      <h3>Projects</h3>
      <div className='projects'>
        <div className='manu-container'>
          <h3>Manu-Mana</h3>
          <p>Bird monitoring app for my final project at Enspiral Dev Academy</p>
          <img className='manu-mana' src='Images/Manu-Mana.png'></img>
        </div> 
      </div> 
      <h3>More Content Coming Soon</h3>
    </div>
  </div>
  )
}

export default Home
  