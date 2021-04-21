import React from 'react';
import './form.css';

const Form = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3 white'>
        {'Introduce a link with an image and it will detect any faces'}
      </p>
      <div className='center'> 
        <div className='form center pa4 shadow-5 br3'>
          <input type="form" className='w-70 f4 pa2 center' onChange={onInputChange}/>
          <button className='w-20 grow f4 link ph3 pv1 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default Form;