import React from 'react'
import { MdEmail } from 'react-icons/md'


function Contact() {
  

  return(
    <>
   <div className='contact-container'>
    <a href="mailto:seb.ninness12@gmail.com">
      <h3 className='contact'>Send me an email and I will get back to you as soon as possible!</h3>
      <MdEmail className='email-icon'/>
    </a>

  </div>
    </>
  )
}

export default Contact