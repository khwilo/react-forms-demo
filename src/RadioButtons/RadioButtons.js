import React from 'react';

const RadioButtons = ({ industry, handleChange }) => {
  return (
    <>
      <div className='flex'>
        <input
          type='radio'
          id='health'
          name='industry'
          value='health'
          checked={industry === 'health'}
          onChange={handleChange}
        />
        <label className='form__label' htmlFor='health'>
          Health Care
        </label>
      </div>
      <div className='flex'>
        <input
          type='radio'
          id='logistics'
          name='industry'
          value='logistics'
          checked={industry === 'logistics'}
          onChange={handleChange}
        />
        <label className='form__label' htmlFor='logistics'>
          Logistics
        </label>
      </div>
      <div className='flex'>
        <input
          type='radio'
          id='manufacturing'
          name='industry'
          value='education'
          checked={industry === 'education'}
          onChange={handleChange}
        />
        <label className='form__label' htmlFor='education'>
          Education
        </label>
      </div>
      <div className='flex'>
        <input
          type='radio'
          id='education'
          name='industry'
          value='manufacturing'
          checked={industry === 'manufacturing'}
          onChange={handleChange}
        />
        <label className='form__label' htmlFor='manufacturing'>
          Manufacturing
        </label>
      </div>
    </>
  );
};

export default RadioButtons;
