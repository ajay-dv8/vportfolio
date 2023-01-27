import React, { useEffect } from 'react'
import './work_slide.css'
import AOS from 'aos';

import styled from 'styled-components'

  const Container = styled.div`
    & .wTxt{
      font-size: 2.5rem;
    }
     @media only screen and (max-width : 767px),
     @media only screen and (width <= 480px)
     {
      & .wText{
      font-size: 1rem;
      font-weight: 300;
      }
    }
  `;
const WorkSlide = ({ image, title}) => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <Container>
       <div className='workSlide_container' >
        <div className='img_container'>
            <img data-aos="zoom-in" data-aos-delay="150" src={image} alt='' />
        </div>

        <div className='workText_container'>
            <h2 className='wTxt' data-aos="fade-in" data-aos-delay="200">{title}</h2>
        </div>
       </div>
    </Container>
  )
}

export default WorkSlide