import React, { useState, useEffect } from 'react';
import './intro.css';
import gsap from 'gsap';
import wheel from '../../assets/media/wheel.png'

const Intro = () => {

    const timeline = gsap.timeline({defaults: {duration: 1 }})
    timeline
    .fromTo(".intro_bg", { y: 0, opacity: 0}, { y: 150, opacity: 1, ease: "back", })

    .fromTo(".left_intro", { x: -100, opacity: 0 }, { x: 0, ease: "back", opacity: 1 })


    
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <div className='intro'>
        <img className='intro_wheel_bg' src={wheel} style={{
            transform:`translateY(${offsetY * 0.4}px)`
          }}/>
        <div className='intro_bg'>
            <h1>Ajay's Portfolio</h1>
        </div>

        <div className='intro_items'>  
            <div className='left_intro'>       
                <span>Crafting beautiful</span> 
                <span>cutting-edge products. noBS</span>        
            </div>

            <div className='scroll_down'></div>
        </div>

        
    </div>
  )
}

export default Intro