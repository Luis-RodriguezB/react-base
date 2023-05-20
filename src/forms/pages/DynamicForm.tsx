import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField, SelectField } from '../components';

import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This field is required');
    }

    if (rule.type === 'minLength' && (rule as any).value) {
      schema = schema.min(
        (rule as any).value,
        `Must be at least ${(rule as any).value} characters`
      );
    }

    if (rule.type === 'email') {
      schema = schema.email('Must be a valid email');
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleReset }) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (['input', 'text', 'password', 'email'].includes(type)) {
                return (
                  <InputField
                    key={name}
                    id={name}
                    name={name}
                    type={type as any}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }

              if (type === 'select') {
                return (
                  <SelectField key={name} label={label} name={name} id={name}>
                    <option value=''>Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </SelectField>
                );
              }
            })}

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
