import React from 'react'


function Contact() {
  

  return(
  <div className='contact-container'>
   <h3 className='contact'>Contact</h3>
   <div className='email'><a href="mailto:seb.ninness12@gmail.com"> <i className="fa fa-envelope"><h3>Email</h3></i> </a></div>
   <div className='phone'><i className="fa fa-phone"><h3>+64 2040164271</h3></i></div>
   <div className='instagram'><a href="https://www.instagram.com/sebninness/"><i className="fa fa-instagram"><h3>Instagram</h3></i> </a></div>
  </div>
  )
}

export default Contact