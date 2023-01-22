import React, { useEffect } from 'react';
import './process.css';
import Pchild from './pchild';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Process = () => {

  useEffect(() => {
    AOS.init({duration: 2500});
  },[]);

  return (
    <>
    <div className='process'>

        <div className='process_child' data-aos="zoom-in" data-aos-delay='100'>
          <Pchild 
            num='01'
            title='Research & Planning'
            info="We start by researching the foundation of the project. Discovery comes with developing a clear understanding of your business and your goals and establishing a clear path forward. It's not just research behind a screen, it's about getting hands-on with workshops and interactive discussions to align our direction."
            />
        </div>

        <div className='process_child' data-aos="zoom-in" data-aos-delay='200'>
          <Pchild 
            num='02'
            title='Strategy & Creative Decisions'
            info="Strategy is the necessary ingredient for exceptional, purposeful work. Using design thinking, we unite and establish an effective strategy that enables positive transformation with a clear direction. It goes hand in hand with creative direction, where we explore bringing the strategy to life visually."
            />
        </div>

        <div className='process_child' data-aos="zoom-in" data-aos-delay='100'>
          <Pchild 
            num='03'
            title='Design & Development'
            info="This is where the magic happens. We've done all the hard work and now it's time to have some fun and bring the ideas to life. This step will vary depending on what your goals are and the services you require. I offer everything from graphic design and identity to web design and development."
            />
        </div>

        <div className='process_child' data-aos="zoom-in" data-aos-delay='200'>
          <Pchild
            num='04'
            title='Delivery & Quality Assurance'
            info="I'm here for the long haul, committed to developing long term relationships built on trust. I live by the mantra of measure twice, cut once, so by the time we reach handover, everything should look and feel just right. Rest assured that if anything does pop up, I'm dedicated to offering flexibility and providing assistance during and after the handover."
            />
        </div>       
    </div>
    </>
  )
}

export default Process;