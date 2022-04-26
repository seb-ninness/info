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
      <button onClick={toggleCityMode}>{city ? 'WELLY' : 'NYC'} mode</button>
    </div> 
    <div className='page-holder'>
      <h3>More Content Coming Soon</h3>
    </div>
  </div>
  )
}

export default Home
  