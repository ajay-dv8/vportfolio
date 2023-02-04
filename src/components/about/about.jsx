import React, { useState, useEffect } from 'react'
import './about.css'
import ft from '../../assets/media/ft.png'
import Sub_heading from './sub_heading'
import AOS from 'aos';
import 'aos/dist/aos.css'
import About_r from './abt_r_img';
import About_l from './abt_l_img';
import Abt_gal from './abt_gal';

import styled from 'styled-components'

const Container = styled.div`
& .down_btn{
  display: block;
}
 @media only screen and (max-width : 767px),
 @media only screen and (width <= 480px){
  & .down_btn{
    display: none;
  }
}
`;

const About = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);


  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return(
    <Container>
    <div className='about'>
        <div className='bg_container'>
          <a href='#abth'>
          <div className='down_btn'
                data-aos="zoom-in"
                data-aos-delay="100"
          ></div>
          </a>
          <img className='bg_image' src={ft} style={{
            transform:`translateY(${offsetY * 0.4}px)`
          }}/>

          <div className='about_header' id='abth'>
            <span data-aos="zoom-in"
                  data-aos-delay="100"
            >WHAT</span>
            <span data-aos="zoom-in"
                  data-aos-delay="100"
            >ABOUT US</span>
          </div>
        </div>
        <div className='sub_header' 
            data-aos="zoom-in-down" 
            data-aos-delay="150">

        <Sub_heading />

        <div className='abt_links' >
          <a href='#'>
            <span data-aos="zoom-in-up" 
                data-aos-delay="200"
            >about dv8</span>
          </a>
          <a href='#'>
            <span data-aos="zoom-in-up" 
                data-aos-delay="250">
              about developer</span>
          </a>
        </div>
        </div>
        <div className='about_r'>
          <About_r />
        </div>

        <div className='abt_gal'>
            <Abt_gal />
        </div>

        <div className='about_l'>
          <About_l/>
        </div>
    </div>
    
    </Container>
  )
}

export default About