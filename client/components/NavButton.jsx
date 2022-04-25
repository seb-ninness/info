import React from "react"

export default function NavButton(props) {
  return (
    <>
    <button onClick={props.handleClick} className="profile">
    <svg viewBox='0 0 10 8' width='40'>
  <path d='M1 1h8M1 4h 8M1 7h8' 
        stroke='#000' 
        stroke-Width='2' 
        stroke-Linecap='round'/>
</svg>
     
    </button>
    </>
  )
}