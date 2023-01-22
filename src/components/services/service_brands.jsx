import React, { useEffect } from 'react'
import './service_brands.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import blender from '../../assets/media/blender.png'
import blender2 from '../../assets/media/blender2.png'
import glo from '../../assets/media/glo.png'
import ford from '../../assets/media/ford.png'
import logo from '../../assets/media/logo.png'
import twitter from '../../assets/media/twitter.png'
import apple from '../../assets/media/apple.png'

const Service_brands = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
      },[]);
    
  return (
    <div className='brands'>
        <div className='brand_title'>
            <span data-aos="zoom-in" data-aos-delay="200">Our experience</span>
            <span data-aos="fade-in" data-aos-delay="150">Brands we've worked with</span>
        </div>


        <div className='brand_icons'>
            <div className='icon_row1'>
                <img data-aos="fade-in" data-aos-delay="100" src={blender} />
                <img data-aos="fade-in" data-aos-delay="150" src={glo} />
                <img data-aos="fade-in" data-aos-delay="200" src={ford} />
                <img data-aos="fade-in" data-aos-delay="150" src={logo} />
                <img data-aos="fade-in" data-aos-delay="200" src={twitter} />
                <img data-aos="fade-in" data-aos-delay="150" src={apple} />
                <img data-aos="fade-in" data-aos-delay="200" src={blender2} />
            </div>
            
        </div>

    </div>
  )
}

export default Service_brands