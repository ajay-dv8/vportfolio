import React, { useEffect } from 'react'
import './gal.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Gal = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <div className='gal'>
        <div className='frame'  data-aos="fade-in" data-aos-delay='200'>
          <div className='image'>
 
          </div>
        </div>
    </div>
  )
}

export default Gal