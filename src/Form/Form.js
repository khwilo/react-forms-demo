import React from 'react';

import CheckBox from '../CheckBox/CheckBox';
import RadioButtons from '../RadioButtons/RadioButtons';
import Select from '../Select/Select';

const Form = ({
  username,
  age,
  email,
  password,
  languages,
  industry,
  country,
  handleChange,
}) => {
  const checkBoxes = languages.map((language) => {
    return (
      <CheckBox key={language.id} {...language} handleChange={handleChange} />
    );
  });
  return (
    <form className='form'>
      <div className='form__group'>
        <label htmlFor='username' className='form__label'>
          Username:
        </label>
        <input
          className='form__control'
          type='text'
          id='username'
          value={username}
          name='username'
          onChange={handleChange}
        />
      </div>
      <div className='form__group'>
        <label htmlFor='age' className='form__label'>
          Age:
        </label>
        <input
          className='form__control'
          type='number'
          id='age'
          value={age}
          name='age'
          onChange={handleChange}
        />
      </div>
      <div className='form__group'>
        <label htmlFor='email' className='form__label'>
          Email address:
        </label>
        <input
          className='form__control'
          type='email'
          id='email'
          value={email}
          name='email'
          onChange={handleChange}
        />
      </div>
      <div className='form__group'>
        <label htmlFor='password' className='form__label'>
          Password:
        </label>
        <input
          className='form__control'
          type='password'
          id='password'
          value={password}
          name='password'
          onChange={handleChange}
        />
      </div>
      <div className='form__group'>
        <fieldset>
          <legend>Which programming Language do you enjoy working with?</legend>
          {checkBoxes}
        </fieldset>
      </div>

      <div className='form__group'>
        <fieldset>
          <legend>What type of field would you like to work in?</legend>
          <RadioButtons industry={industry} handleChange={handleChange} />
        </fieldset>
      </div>

      <div className='form__group'>
        <Select country={country} handleChange={handleChange} />
      </div>
    </form>
  );
};

export default Form;
