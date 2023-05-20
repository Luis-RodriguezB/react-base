import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { CheckboxField, InputField, SelectField } from '../components';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

enum JobType {
  DESIGNER = 'designer',
  SENIOR_DEV = 'senior-dev',
  MID_DEV = 'mid-dev',
  JUNIOR_DEV = 'jr-dev',
}

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Yup</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          jobType: '',
          terms: false,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(50, 'Should be 50 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(75, 'Should be 75 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Should be a valid email')
            .required('Required'),
          jobType: Yup.string()
            .oneOf(
              [
                JobType.DESIGNER,
                JobType.SENIOR_DEV,
                JobType.MID_DEV,
                JobType.JUNIOR_DEV,
              ],
              'Must select a job type'
            )
            .required('Required'),
          terms: Yup.boolean().oneOf(
            [true],
            'Must accept terms and conditions'
          ),
        })}
      >
        {(formik) => (
          <Form>
            <InputField
              id='firstName'
              name='firstName'
              type='text'
              label='First Name'
            />

            <InputField
              id='lastName'
              name='lastName'
              type='text'
              label='Last Name'
            />

            <InputField
              id='email'
              name='email'
              type='email'
              label='Email'
            />

            <SelectField id='jobType' name='jobType' label='Job Type'>
              <option value=''>Choose Job Type</option>
              <option value={JobType.DESIGNER}>Designer</option>
              <option value={JobType.SENIOR_DEV}>Senior Developer</option>
              <option value={JobType.MID_DEV}>Mid Developer</option>
              <option value={JobType.JUNIOR_DEV}>Junior Developer</option>
            </SelectField>

            <CheckboxField
              id='terms'
              label='Terms and conditions'
              name='terms'
            />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
