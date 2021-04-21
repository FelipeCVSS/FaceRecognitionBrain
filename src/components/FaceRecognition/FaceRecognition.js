import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img src={imgUrl} id='inputimage' alt="" width='500px' height='auto'/>
        <div className='bounding-box' style={{
          top:box.top_row, 
          left:box.left_col, 
          right:box.right_col, 
          bottom:box.bottom_row}}>
        </div>
      </div>
    </div>
  );
}

export default FaceRecognition;