import React, { useEffect } from 'react'
import './abt_gal.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

import IMG_1 from '../../assets/art/IMG_1.jpg'
import IMG_3 from '../../assets/art/IMG_3.jpg'
import IMG_2 from '../../assets/art/IMG_2.jpg'
import IMG_4 from '../../assets/art/IMG_4.jpg'
import IMG_5 from '../../assets/art/IMG_5.jpg'
import IMG_6 from '../../assets/art/IMG_6.jpg'
import IMG_7 from '../../assets/art/IMG_7.jpg'

const Abt_gal = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <div div className='abt_gal'>
        <div className='gal_frame'>    
          <img src={IMG_1} />
          <img src={IMG_3} />
          <img src={IMG_2} />
          <img src={IMG_4} />
          <img src={IMG_6} />
          <img src={IMG_5} />
          <img src={IMG_7} />
        </div>
    </div>
  )
}

export default Abt_gal