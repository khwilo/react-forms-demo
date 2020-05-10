import React from 'react';

import './FormValues.css';

const FormValuesView = ({
  username,
  age,
  email,
  password,
  languages,
  industry,
  country,
}) => {
  return (
    <div className='form_values'>
      <div className='container'>
        <p>
          Username:{' '}
          <span
            className='value'
            style={{ padding: username ? '0.2rem 0.5rem' : '' }}
          >
            {username}
          </span>
        </p>
        <p>
          Age:{' '}
          <span
            className='value'
            style={{ padding: age ? '0.2rem 0.5rem' : '' }}
          >
            {age}
          </span>
        </p>
        <p>
          Email:{' '}
          <span
            className='value'
            style={{ padding: email ? '0.2rem 0.5rem' : '' }}
          >
            {email}
          </span>
        </p>
        <p>
          Password:{' '}
          <span
            className='value'
            style={{ padding: password ? '0.2rem 0.5rem' : '' }}
          >
            {password}
          </span>
        </p>

        <div>
          <p>Programming languages you enjoy working with:</p>
          <ul>
            {languages.map(({ id, value, isChecked }) => (
              <li key={id}>
                {value}{' '}
                {isChecked ? (
                  <span>
                    <i className='fa fa-check' aria-hidden='true'></i>
                  </span>
                ) : (
                  <span>
                    <i className='fa fa-times' aria-hidden='true'></i>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p>
          Industry:{' '}
          <span
            className='value'
            style={{ padding: industry ? '0.2rem 0.5rem' : '' }}
          >
            {industry}
          </span>
        </p>
        <p>
          Country:{' '}
          <span
            className='value country'
            style={{ padding: country ? '0.2rem 0.5rem' : '' }}
          >
            {country}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FormValuesView;
