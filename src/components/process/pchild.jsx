import React from 'react'
import './pchild.css'

import styled from 'styled-components'

  const Container = styled.div`
    & .child_container{
      width: 28rem;
    }
     @media only screen and (max-width : 767px),
     @media only screen and (width <= 480px){
      & .child_container{
        width: 20rem;
        height: 80vh;
      }
    }
  `;
const Pchild = ({num, title, info}) => {

  return (
    <Container>
        <div className='child_container'>
            <div className='num'>{num}</div>
            <div className='title'>{title}</div>
            <div className='info'>{info}</div>
        </div>
    </Container>
  )
}

export default Pchild