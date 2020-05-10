const initialValues = {
  username: '',
  age: '',
  email: '',
  password: '',
  languages: [
    {
      id: 'js',
      name: 'js',
      value: 'JavaScript',
      isChecked: false,
    },
    {
      id: 'py',
      name: 'py',
      value: 'Python',
      isChecked: false,
    },
    {
      id: 'rs',
      name: 'rs',
      value: ' Rust',
      isChecked: false,
    },
    {
      id: 'go',
      name: 'go',
      value: 'Go',
      isChecked: false,
    },
  ],
  industry: '',
  country: '',
};

export default initialValues;
