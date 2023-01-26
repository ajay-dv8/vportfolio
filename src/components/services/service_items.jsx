import React, { useEffect } from 'react'
import './service_items.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Service_brands from './service_brands';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;

  & .h2{
    margin: 2rem;
  }
  @media (width <= 480px) {
    & .h2{
      margin: 1rem;
    }
}
`

const Service_items = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
      },[]);
    
  return (
    <Container>
    <div className='service_list'>
        <span 
            className='service_title' 
            data-aos="fade-in"
            data-aos-delay="150"
        >services</span>

        <div className='service_list_items'>
          <div className='service_process'>
            <h2 className='h2' data-aos='fade-in'data-aos-delay='100'>Process</h2>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='150'>Research</span>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='200'>Plan</span>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='250'>Create</span>
          </div>
          <div className='design'>
            <h2 className='h2' data-aos='fade-in'data-aos-delay='100'>Design</h2>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='150'>Web design</span>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='200'>UI/UX</span>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='250'>Visual design</span>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='100'>Visual arts</span>
          </div>
          <div className='develop'>
            <h2 className='h2' data-aos='fade-in'data-aos-delay='100'>Develop</h2>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='150'>Web dev.</span>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='200'>Android</span>
            <span className='h2_items' data-aos='fade-in'data-aos-delay='250'>IOS</span>
          </div>
        </div>
      </div>

      <div className='service_brands'>
        <Service_brands />
      </div>
    </Container>
  )
}

export default Service_items