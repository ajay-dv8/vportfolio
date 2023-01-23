import React from 'react'
import './puc.css'
import { Link, useNavigate } from 'react-router-dom'
import Close_btn from '../contact/close_btn'

const Puc = () => {

    const navigate = useNavigate();
  return (
    <div className='puc'>
        <div className='puc_section'>
            <div className='close_comp'>
                <Close_btn />
            </div>
            <div className='puc_text'>
                <span>Oops!</span>
                <span>This page is under construction</span>
                <span>we'll be done soon</span>
            </div>

            <div className='puc_links'>
                <a onClick={() => navigate(-1)}>back</a> <a>| </a> 
                <Link to='/'><a>home</a></Link>
            </div>
        </div>

        <div className='gray_bg'></div>
    </div>
  )
}

export default Puc