import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavButton from './NavButton';

// turn my state to a global state

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header>
    <h1 className='seb-ninness'><Link to='/'>Seb Ninness</Link></h1>
    <NavButton handleClick={() => setIsOpen(!isOpen)}/>
    {isOpen ? <nav>
        <ul className='nav-list'> 
          <li><Link to='/Work'>  Work  </Link></li>
          <li><Link to='/Contact'>  Get in touch  </Link></li>
          <li><Link to='/FootyFan'>  Footy Fan?  </Link></li>
          <li><Link to='/'>  Home  </Link></li>
        </ul> 
    </nav> : null }
  </header> 
  )
}

export default Nav