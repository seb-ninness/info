import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { sidebarData } from '../sidebar/SideBarData'

// turn my state to a global state

function Nav() {
  const [sidebar, setSideBar] = useState(false)

  const showSideBar = () => setSideBar(!sidebar)

  return (
  <div className='navbar'>
    <Link to='#' className='menu-bars'><FaBars onClick={showSideBar}/></Link>
    <h1 className='seb-ninness'><Link to='/'>Seb Ninness</Link></h1>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul onClick={showSideBar} className='nav-menu-items'> 
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'><AiOutlineClose /></Link>
          </li>
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
    </nav>
  </div> 
  )
}

export default Nav