import React, { useState } from 'react'


 // turn into a global state
function Home() {
  const [city, setCity] = useState(true)

  const toggleCityMode = () => {
    setCity(!city)
  }

  return(
  <div className= 'home-container'>
    <div className={city? 'nyc-container' : 'welly-container'}>
      <h3 className='web-dev'>Web Development & Design</h3>
      <button className='city-button' onClick={toggleCityMode}>{city ? 'WELLY' : 'NYC' } MODE</button>
    </div> 
    <div className='page-holder'>
      <h3>More Content Coming Soon</h3>
    </div>
    <footer>
      <a href="mailto:seb.ninness12@gmail.com"> <i className="fa fa-envelope"></i> </a>
      <a href="https://www.instagram.com/sebninness/"><i className="fa fa-instagram"> </i> </a>
    </footer>
  </div>
  )
}

export default Home
  