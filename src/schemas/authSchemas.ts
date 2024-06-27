import * as Yup from 'yup';

export const UserSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Invalid name format')
    .trim()
    .required('Name is required'),
  email: Yup.string()
    .matches(
      /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Invalid email format'
    )
    .trim()
    .required('Email is required'),
  password: Yup.string()
    .matches(/^[A-Za-z0-9!@#№$%&]{8,64}$/, 'Invalid password format')
    .trim()
    .required('Password is required'),
});
