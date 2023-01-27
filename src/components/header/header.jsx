import React, { useState } from 'react'
import './header.css'
import bg from '../../assets/media/bg.webm'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

  const Container = styled.div`
    & .contact_page_btn{
      display: block;
    }
      @media only screen and (max-width : 767px),
      @media only screen and (width <= 480px){
      & .contact_page_btn{
        display: none;
      }
    }
  `

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
    <div className='header'>
      <Link to='/'>
        <div className='header-logo'>
            <video className='logo_video' src={bg} autoPlay loop muted />
        </div>
      </Link>

    <div className='right_header_items'>
      <Link to='/contact'>
      <div className='contact_page_btn'>
        <span className='contact_main_btn'>contact</span>
      </div>
      </Link>

        <div className='menuBtn '>
            <label id='menu_label'>
              <input type='checkbox' checked={isOpen} onChange={toggleNav}/>
              <svg viewBox='0 0 100 100'>
                <circle cx='50' cy='50' r='25'/>
                <path className='line1' d='M0 40h62c13 0 6 28-4 18L35 35'/>
                <path className='line2' d='M0 50h70'/>
                <path className='line3' d='M0 60h62c13 0 6-28-4-18L35 65'/>
              </svg>
            </label>
        </div>
      </div>

        <nav className={`navbar ${isOpen ? 'navbar-open' : 'navbar-closed'}`}>
            <ul className='menu_items'>
              <Link to='/'>
                <li href='noNav' >
                  <a data-text='HOME' onClick={toggleNav}>HOME</a>
                </li>
              </Link> 
                <Link to='/contact'>
                <li>
                  <a data-text='CONTACT'>CONTACT</a>
                </li >
                </Link>
                <Link to='/puc'>
                <li>
                  <a data-text='WORK'>WORK</a>
                </li>
                </Link>
                <Link to='/about'>
                <li>
                  <a data-text='ABOUT' onClick={toggleNav}>ABOUT</a>
                </li>
                </Link>
                <Link to='/services'>
                <li>
                  <a data-text='SERVICES' onClick={toggleNav}>SERVICES</a>
                </li>
                </Link>

            </ul>
          </nav>

    </div>    
    </Container>
  )
}

export default Header