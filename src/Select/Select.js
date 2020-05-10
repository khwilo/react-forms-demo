import React from 'react';

const Select = ({ country, handleChange }) => {
  return (
    <>
      <label htmlFor='country-select'>Choose your country of origin</label>
      <select
        name='country'
        id='country-select'
        value={country}
        onChange={handleChange}
      >
        <option value=''>--Please select an option</option>
        <option value='kenya'>Kenya</option>
        <option value='nigeria'>Nigeria</option>
        <option value='botswana'>Botswana</option>
        <option value='egypt'>Egypt</option>
      </select>
    </>
  );
};

export default Select;
