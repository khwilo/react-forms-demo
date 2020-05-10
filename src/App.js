import React, { useState } from 'react';

import './App.css';
import Form from './Form/Form';
import FormValuesView from './FormValuesView/FormValuesView';
import initialValues from './utils/formInitialValues';

function App() {
  const [formValues, setFormValues] = useState(initialValues || {});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      let languages = formValues.languages;
      languages.map((language) => {
        if (language.value === value) {
          language.isChecked = checked;
        }
        return language;
      });
      setFormValues({ ...formValues, languages });
    }
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className='App'>
      <section className='wrapper'>
        <div className='form-elements container'>
          <Form {...formValues} handleChange={handleChange} />
        </div>
        <FormValuesView {...formValues} />
      </section>
    </div>
  );
}

export default App;
