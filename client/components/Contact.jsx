import React from 'react'


function Contact() {
  

  return(
    <>
  <div className='contact-container'>
   <h3 className='contact'>Contact</h3>
   <div className='email'><a href="mailto:seb.ninness12@gmail.com"> <i className="fa fa-envelope"><h3>Email</h3></i> </a></div>
   <div className='phone'><i className="fa fa-phone"><h3>+64 2040164271</h3></i></div>
   <div className='instagram'><a href="https://github.com/seb-ninness?tab=repositories"><i className="fa fa-github"><h3>GitHub</h3></i> </a></div>
  </div>
  <footer>
      <a href="mailto:seb.ninness12@gmail.com"> <i className="fa fa-envelope"></i> </a>
      <a href="https://github.com/seb-ninness?tab=repositories"><i className="fa fa-github"> </i> </a>
    </footer>
    </>
  )
}

export default Contact