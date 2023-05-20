import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

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

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

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
            <label htmlFor='firstName'>First Name</label>
            <Field id='firstName' name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last Name</label>
            <Field id='lastName' name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email</label>
            <Field id='email' name='email' type='text' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>Job Type</label>
            <Field id='jobType' name='jobType' as='select'>
              <option value=''>Choose Job Type</option>
              <option value={JobType.DESIGNER}>Designer</option>
              <option value={JobType.SENIOR_DEV}>Senior Developer</option>
              <option value={JobType.MID_DEV}>Mid Developer</option>
              <option value={JobType.JUNIOR_DEV}>Junior Developer</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label style={{ marginTop: '10px' }}>
              <Field name='terms' type='checkbox' />
              Terms and Conditions
            </label>
            <ErrorMessage name='terms' component='span' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
