import React from 'react';

const CheckBox = ({ id, name, value, isChecked, handleChange }) => {
  return (
    <div className='flex'>
      <input
        className='form__control'
        type='checkbox'
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor='html' className='form__label'>
        {value}
      </label>
    </div>
  );
};

export default CheckBox;
