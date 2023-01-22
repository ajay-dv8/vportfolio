import React, { useEffect } from 'react'
import './abt_l_img.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import VR from '../../assets/media/VR.png'

const About_l = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
      },[]);
    
  return (
    <div className='about_l'>

    <div className='left_abt' data-aos="zoom-in" data-aos-delay="400">
        <img src={VR}/>
    </div>

    <div className='right_abt'>
      <div className='right_abt_info'>
        <span data-aos="fade-in" data-aos-delay="200">I am, </span>
        <span data-aos="fade-in" data-aos-delay="300">Ajay, a creative artist, a Web developer and an awesome COD player from Ghana. My expertise lies in web design and development, though i do dabble in mobile and desktop app development, my mobile apps are amazing! make that my expertise too, one thing i really enjoy about this is meeting new client and sharing and exchanging idea about making an amazing product.<br/>
        i'll will like to work with u, get in touch.

        </span>
      </div>

    </div>

</div>
  )
}

export default About_l