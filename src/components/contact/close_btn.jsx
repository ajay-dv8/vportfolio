import React from 'react'
import { useNavigate } from 'react-router-dom';
import './close_btn.css'

const Close_btn = () => {

    const navigate = useNavigate();    

  return (
    <div className='close_btn_con'>
    <button className='close_button' onClick={() => navigate(-1)}>Close</button>
    </div>
  )
}

export default Close_btn