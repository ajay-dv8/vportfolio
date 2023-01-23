import React from 'react'
import './contact.css'
import bfb from '../../assets/media/bfb.png'
import bgit from '../../assets/media/bgit.png'
import blinkedin from '../../assets/media/blinkedin.png'
import Close_btn from './close_btn'
import Social_link from '../socialMediaLinks/social_link'

const Contact = () => {

  return (
    <div className='contact'>
      <div className='contact_bg'>
        <div className='close_comp'>
          <Close_btn />
        </div>
        <span className='contact_title'>Contact Us</span>
        <a href='mailto:ajaydives3@gmail.com' className='mail'>ajaydives3@gmail.com</a>
        <div className='call'>
          <span className='phoneNo'>+233 550-414-170 </span>
          <a href='tel:+233550414170' id='call_btn'>CALL</a>
        </div>

        <div className='con_social'>
          <span>SOCIAL</span>
          <div className='soc_icons'>
            <div className='contact_social_icon'>
              <Social_link 
                socialMedia='Linked in'
                link=''
                image={blinkedin}
              />
            </div>
            <div className='contact_social_icon'>
              <Social_link 
                socialMedia='Facebook'
                link=''
                image={bfb}
              />
            </div>
            <div className='contact_social_icon'>
              <Social_link 
                socialMedia='Github'
                link=''
                image={bgit}
              />
            </div>

          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Contact