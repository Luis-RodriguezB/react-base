import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { InputField } from '../components';

import '../styles/styles.css';

interface Person {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterFormikPage = () => {
  const handleSubmit = (formData: Person) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(15, 'Must be maximun 15 characters')
            .required('Name is required'),
          email: Yup.string()
            .email('Must be a valid email')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Passowrd is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Password must match')
            .required('Please confirm password'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <InputField
              type='text'
              id='fullName'
              label='Name'
              name='fullName'
              placeholder='Luis Rodriguez'
            />

            <InputField
              type='email'
              id='email'
              label='Email'
              name='email'
              placeholder='luis01@gmail.com'
            />

            <InputField
              type='password'
              id='password'
              label='Password'
              name='password'
              placeholder='********'
            />

            <InputField
              type='password'
              id='confirmPassword'
              label='Confirm Password'
              name='confirmPassword'
              placeholder='********'
            />

            <button type='submit'>Send</button>

            <button type='button' onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
