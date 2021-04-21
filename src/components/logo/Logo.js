import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css'
import ai from './ai.png';

const Logo = () => {
  return(
    <div className='ma4 '>
      <Tilt className='Tilt br4 shadow-4 center'>
        <div style={{paddingTop:'50px'}}>
          <img  src={ai} alt="logo"/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;