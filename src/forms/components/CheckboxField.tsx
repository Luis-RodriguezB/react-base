import { ErrorMessage, useField } from 'formik';

interface Props {
  id: string;
  label: string;
  name: string;
  [x: string]: any;
}

export const CheckboxField = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type='checkbox' className='text-input' {...field} {...props} />
        {label}
      </label>
      <ErrorMessage
        name={props.name}
        component='span'
        className='error-message'
      />
    </>
  );
};
