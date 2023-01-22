import React from 'react'
import './dets.css'

const Dets = () => {
  return (
    <div className='dets'>
        <div className='dets_container1'>   
            <div className='dets_title'>Explore<hr/></div>
            <div className='llist'>
                <span>intro</span>
                <span>featured</span>
                <span>process</span>
                <span>art slide</span>
                <span>contact</span>
                <span>portfolio</span>
                <span>services</span>
            </div>
        </div>

        <div className='dets_container2'>   
            <div className='dets_title'>Others<hr/></div>
            <div className='llist'>
                <span>developer</span>
                <span>about dv8</span>
                <span>phone</span>
                <span>email</span>
                <span>location</span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Dets