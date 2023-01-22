import React from 'react'
import './contact.css'
import bfb from '../../assets/media/bfb.png'
import bgit from '../../assets/media/bgit.png'
import blinkedin from '../../assets/media/blinkedin.png'
import Close_btn from './close_btn'

const Contact = () => {

  return (
    <div className='contact'>
      <div className='contact_bg'>
      <Close_btn />
        <span className='contact_title'>Contact Us</span>
        <a href='mailto:ajaydives3@gmail.com' className='mail'>ajaydives3@gmail.com</a>
        <div className='call'>
          <span className='phoneNo'>+233 550-414-170 </span>
          <a href='tel:+233550414170' id='call_btn'>CALL</a>
        </div>

        <div className='con_social'>
          <span>SOCIAL</span>
          <div className='soc_icons'>
          <img src={blinkedin}/>
            <img src={bfb}/>
            <img src={bgit}/>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Contact