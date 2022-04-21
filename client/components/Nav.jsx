import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavButton from './NavButton';

// turn my state to a global state

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header>
    <h3>Seb Ninness | Web Developer</h3>
    <NavButton handleClick={() => setIsOpen(!isOpen)}/>
    {isOpen ? <nav>
        <ul className='nav-list'> 
          <li><Link to='/'>  Work  </Link></li>
          <li><Link to='/'>  Get in touch  </Link></li>
        </ul> 
    </nav> : null }
    
  </header>
  )
}

export default Nav