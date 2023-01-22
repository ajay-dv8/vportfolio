import React, { useEffect } from 'react'
import './introduce.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Introduce = () => {  

    useEffect(() => {
      AOS.init({duration: 1500});
    },[]);

  return (
    <div className='introduce' id='introduce_id'>
        <div className='i_intro'>
            <span data-aos="fade-in" data-aos-delay='100'>Ajay is a creative,</span>
            <span data-aos="fade-in" data-aos-delay='100'>Dedicated to designing &</span>
            <span data-aos="fade-in" data-aos-delay='100'>developing mobile & web apps</span>
            <span data-aos="zoom-in" data-aos-delay='100'>LET'S MAKE U STAND OUT</span>
        </div> 
    </div>
  )
}

export default Introduce;