import React from 'react'
import styles from "styled-components"
const ImgBox = ({ urls: { full } }) => {


  return (
    <div
      style={{
        width: '230px', height: '250px',
        margin: 'auto',
        position: 'relative',
        padding: '5px'

      }}
    >

      <StyleBox>
        Creator
      </StyleBox>
      <img style={{ borderRadius: '3px' }} width="100%" height="100%" src={full} alt="" />
    </div>
  )
}

const StyleBox = styles.div`
  width: 70px;
  height: 20px;
  background: red;
  position: absolute;
  top: 1em;
  left: -7px;
  padding: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius:3px;
  border-top-right-radius:3px;
 

  &:after {
  content:'';
  width: 40px;
  height: 10px;
  background: #c01f1f;
  position: absolute;
  left:-1px;
  top:28px;
  z-index:-10;
  transform:rotate(21deg);
  border-radius: 30px;

  
  }
`





export default ImgBox