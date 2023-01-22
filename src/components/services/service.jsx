import React, { useState, useEffect } from 'react'
import './services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import park from '../../assets/media/park.png'
import Service_items from './service_items';

const Service = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);


  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <div className='service'>
      <div className='service_bg'>
      <span data-aos="zoom-in"
            data-aos-delay="200"
      >WHAT</span>

        <img src={park} style={{
            transform:`translateY(${offsetY * 0.6}px)`
          }}/>
      </div>
      <div className='service_sub'>
        <span data-aos="fade-in"
            data-aos-delay="100"
        >We collaborate with clients and other brands</span>
        <span data-aos="fade-in"
            data-aos-delay="150"
        >to create a memorable experience</span>
        <span data-aos="fade-in"
            data-aos-delay="200"
        >We are more like a partner than a resource. This means we have</span>
        <span data-aos="fade-in"
            data-aos-delay="250"
        >shared perspective on how we can work together to achieve your goals.</span>
        <span data-aos="fade-in"
            data-aos-delay="300"
        >Basically, we friends now</span>
      </div>

      <Service_items />
        
    </div>
  )
}

export default Service