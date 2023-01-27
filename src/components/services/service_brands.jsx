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

import styled from 'styled-components';

const Container = styled.div`
  & .brands{
        margin-top: -10em; 
  } 
    @media only screen and (max-width : 767px),
    @media only screen and (width <= 480px){
    & .brands{
        margin-top: -25em;
    }
  
`;

const Service_brands = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
      },[]);
    
  return (
    <Container>
    <div className='brands'>
        <div className='brand_title'>
            <span data-aos="zoom-in" data-aos-delay="50">Our experience</span>
            <span className='m_title' data-aos="fade-in">Brands we've worked with</span>
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
    </Container>
  )
}

export default Service_brands