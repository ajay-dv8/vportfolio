import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import fb from '../../assets/media/fb.png'
import git from '../../assets/media/git.png'
import linkedin from '../../assets/media/linkedin.png'
import Social_link from '../socialMediaLinks/social_link';

const Footer = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
      },[]);

      useEffect(() => {
        let btn = document.querySelector('.contactUs_btn')
        
        btn.addEventListener('click', () => {
           btn.classList.add ('btn_click_animate');

         });
  
         btn.addEventListener('mouseout', () => {
           btn.classList.remove('btn_click_animate');
         });
  
     },[]);  
  
  return (
    <div className='footer'>
        <div className='footer_con'>
            <div className='footer_contact'>
                <span data-aos="fade-in" data-aos-delay='200'>dv8</span>
                <span data-aos="zoom-in" data-aos-delay='100'>Ajay Dives</span>
                <Link to='/contact'>
                <button className='contactUs_btn'>Contact Us</button>
                <div className='btn_offset'></div> 
                </Link>
            </div>

            <div className='footer_links'>
                <Link to='/'>
                <a data-aos="fade-in" data-aos-delay='100'>Home</a>
                </Link>
                <Link to='/puc'>
                <a data-aos="fade-in" data-aos-delay='150'>Work</a>
                </Link>
                <Link to='/about'>
                <a data-aos="fade-in" data-aos-delay='200'>About</a>
                </Link>
                <Link to='/services'>
                <a data-aos="fade-in" data-aos-delay='150'>Service</a>
                </Link>
            </div>

            <div className='footer_social'>
                <div className='social_media_link' data-aos="fade-in" data-aos-delay='100'>
                <Social_link 
                    socialMedia="Facebook"
                    link=""
                    image={fb}
                />
                </div>
                <div className='social_media_link' data-aos="fade-in" data-aos-delay='100'>
                <Social_link 
                    socialMedia="Github"
                    link="https://github.com/ajay-dv8"
                    image={git}
                />
                </div>
                <div className='social_media_link' data-aos="fade-in" data-aos-delay='100'>
                <Social_link 
                    socialMedia="Linkedin"
                    link=""
                    image={linkedin}
                />
                </div>
            </div>
        </div>
        <div className='footer_bottom'>
            <div className='f_contact_info'>
                <span>email: ajaydives3@gmail.com | </span>
                <span>phone: +2335 5041 4170</span>
            </div>
            <div>
                <span className='copyright_info'>
                2023 copyright | dv8 | Ajay Dives  
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer