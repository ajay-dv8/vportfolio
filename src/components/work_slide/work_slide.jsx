import React, { useEffect } from 'react'
import './work_slide.css'
import AOS from 'aos';

const WorkSlide = ({ image, title}) => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <>
       <div className='workSlide_container' >
        <div className='img_container'>
            <img data-aos="zoom-in" data-aos-delay="150" src={image} alt='' />
        </div>

        <div className='workText_container'>
            <h2 data-aos="fade-in" data-aos-delay="200">{title}</h2>
        </div>
       </div>
    </>
  )
}

export default WorkSlide