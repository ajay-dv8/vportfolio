import React from 'react'
import './pchild.css'

const Pchild = ({num, title, info}) => {

  return (
    <>
        <div className='child_container'>
            <div className='num'>{num}</div>
            <div className='title'>{title}</div>
            <div className='info'>{info}</div>
        </div>
    </>
  )
}

export default Pchild