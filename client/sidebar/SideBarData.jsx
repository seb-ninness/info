import React from 'react'
import { IoIosFootball } from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
import { RiComputerFill } from 'react-icons/ri'
import { GrContactInfo } from 'react-icons/gr'

export const sidebarData = [
  {
    title: 'Home',
    path:'/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Work',
    path:'/Work',
    icon: <RiComputerFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Footy Fan?',
    path:'/FootyFan',
    icon: <IoIosFootball/>,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path:'/Contact',
    icon: <AiIcons.AiFillPhone/>,
    cName: 'nav-text'
  },
]