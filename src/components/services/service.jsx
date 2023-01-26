import React, { useState, useEffect } from 'react'
import './services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import park from '../../assets/media/park.png'
import Service_items from './service_items';

  import styled from 'styled-components';

  const Container = styled.div`
  width: 100%;
  & .s_header { 
    font-size: 3em;
    font-weight: 500;
  }@media (width <= 480px){
    & .s_header{
      font-size: 1.3rem;
      width: 90%;
      margin-bottom: 1rem;
    }
  
  & .ss_header{
    font-size: 2.7em;
    font-weight: 500;
  }@media (width <= 480px){
    & .ss_header{
    font-size: 1.1rem;
    width: 90%;
    }
  }

  & .what{
    text-align: center;
    font-size: 15em;
  }@media (width <= 710px){
    & .what{
      font-size: 5em;
      top: 10vh;
      left: 18vw;
    }
  }
`;

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
    <Container className='service'>
      <div className='service_bg'>
      <span data-aos="zoom-in"
            data-aos-delay="200"
            className='what'
      >WHAT</span>

        <img src={park} style={{
            transform:`translateY(${offsetY * 0.6}px)`
          }}/>
      </div>
      <div className='service_sub'>
        <span data-aos="fade-in"
            data-aos-delay="50"
            className='s_header'
        >We collaborate with clients and other brands to create a memorable experience</span>
        <span data-aos="fade-in"
            data-aos-delay="100"
            className='ss_header'
        >We are more like a partner than a resource. This means we have shared perspective on how we can work together to achieve your goals.</span>
        <span data-aos="fade-in"
            data-aos-delay="150"
            className='ss_header'
        >Basically, we friends now</span>
      </div>

      <Service_items />
        
    </Container>
  )
}

export default Service