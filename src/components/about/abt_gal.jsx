import React, { useEffect } from 'react'
import './abt_gal.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

import IMG_1 from '../../assets/art/IMG_1.jpeg'
import IMG_3 from '../../assets/art/IMG_3.jpeg'
import IMG_2 from '../../assets/art/IMG_2.jpeg'
import IMG_4 from '../../assets/art/IMG_4.jpeg'
import IMG_5 from '../../assets/art/IMG_5.jpeg'
import IMG_6 from '../../assets/art/IMG_6.jpeg'
import IMG_7 from '../../assets/art/IMG_7.jpeg'
import insp_text from '../../assets/media/insp_text.png'


const Abt_gal = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <>
    <div div className='abt_gal'>
        <div className='gal_frame'>    
          <img className='abt_gal_img' src={IMG_1} />
          <img className='abt_gal_img' src={IMG_3} />
          <img className='abt_gal_img' src={IMG_2} />
          <img className='abt_gal_img' src={IMG_4} />
          <img className='abt_gal_img' src={IMG_6} />
          <img className='abt_gal_img' src={IMG_5} />
          <img className='abt_gal_img' src={IMG_7} />
          <img className='abt_gal_img' src={insp_text} />
        </div>
    </div>
    </>
  )
}

export default Abt_gal