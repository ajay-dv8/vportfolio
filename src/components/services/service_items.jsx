import React, { useEffect } from 'react'
import './service_items.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Service_brands from './service_brands';

const Service_items = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
      },[]);
    
  return (
    <>
    <div className='service_list'>
        <span 
            className='service_title' 
            data-aos="fade-in"
            data-aos-delay="150"
        >services</span>

        <div className='service_list_items'>
          <div className='service_process'>
            <h2 data-aos='fade-in'data-aos-delay='100'>Process</h2>
            <span data-aos='fade-in'data-aos-delay='150'>Research</span>
            <span data-aos='fade-in'data-aos-delay='200'>Plan</span>
            <span data-aos='fade-in'data-aos-delay='250'>Create</span>
          </div>
          <div className='design'>
            <h2 data-aos='fade-in'data-aos-delay='100'>Design</h2>
            <span data-aos='fade-in'data-aos-delay='150'>Web design</span>
            <span data-aos='fade-in'data-aos-delay='200'>UI/UX</span>
            <span data-aos='fade-in'data-aos-delay='250'>Visual design</span>
            <span data-aos='fade-in'data-aos-delay='100'>Visual arts</span>
          </div>
          <div className='develop'>
            <h2 data-aos='fade-in'data-aos-delay='100'>Develop</h2>
            <span data-aos='fade-in'data-aos-delay='150'>Web development</span>
            <span data-aos='fade-in'data-aos-delay='200'>Android</span>
            <span data-aos='fade-in'data-aos-delay='250'>IOS</span>
          </div>
        </div>
      </div>

      <div className='service_brands'>
        <Service_brands />
      </div>
    </>
  )
}

export default Service_items