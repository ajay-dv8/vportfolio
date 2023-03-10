import React, { useEffect }from 'react'
import WorkSlide from '../work_slide/work_slide'
import './feature.css'
import gallery from '../../assets/media/gallery.png'
import amazon from '../../assets/media/amazon.png'
import folio2 from '../../assets/media/folio2.png'
import folio from '../../assets/media/folio.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Feature = () => {

   useEffect(() => {
      AOS.init({duration: 1000});
    },[]);


   useEffect(() => {
      let btn = document.querySelector('.more_btn')
      
      btn.addEventListener('click', () => {
         btn.classList.add ('btn_click_animate');
       });

       btn.addEventListener('mouseout', () => {
         btn.classList.remove('btn_click_animate');
       });

   },[]);

  return (
    <div className='feature'>
        <div className='left_feature' data-aos="fade-up-left">
            <div className='feature_title'>
                <span>WORK</span>
                <span>some of our amazing</span>
                <span>featured projects</span>
                
                <button className='more_btn '>view more</button>   
                <div className='btn_offset'></div>            
            </div>
        </div>
        <div className='right_feature' data-aos="fade-up-right">
            <WorkSlide
                image={gallery}
                title="Gallery Website"
             />

             <WorkSlide
                image={amazon}
                title="Amazon-clone"
             />

             <WorkSlide
                image={folio2}
                title="Portfolio website"
             />

             <WorkSlide
                image={folio}
                title="Portfolio website"
             />
        </div>
    </div>
  )
}

export default Feature