import React, {useEffect} from 'react'
import './abt_r_img.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import VR from '../../assets/media/VR.png'

import styled from 'styled-components'

const Container = styled.div`

   & .left_abt_info, & .right_abt, & .rTxt, & .left_about, & .h {
    display: flex;
  }
   @media only screen and (max-width : 767px),
   @media only screen and (width <= 480px){
    & .left_abt_info{
      width: 80%;  
      margin-left: 0;
    }

    & .left_about{
      margin-left: 0;
    }

    & .right_abt{
      display: none;
    }

    & .rTxt{
      font-size: 1.3rem;
    }

    & .h{
      font-size: 2rem;
    }
  }
`;

const About_r = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);

  return (
    <Container>
    <div className='about_r'>
        <div className='left_about'>
          <div className='left_abt_info'>
            <span className='r_items h' data-aos="fade-in" data-aos-delay="200">We are, </span>
            <span className='r_items rTxt' data-aos="fade-in" data-aos-delay="300">dv8, a group of geniuses, developers, designers, artists, creatives and not very good dancers, We are here to bring to life the product you have been imagining. We create simple, direct, beautiful and usable products we all believe in. One thing dv8 really admire is creativity, it is the reason why we are always outside the box and always welcome the creativity of our clients. dv8 works with clients all around the world and  We are based in Ghana, Accra and Koforidua
            </span>
          </div>

        </div>

        <div className='right_abt' data-aos="zoom-in" data-aos-delay="400">
            <img src={VR}/>
        </div>
    </div>
    </Container>
  )
}

export default About_r