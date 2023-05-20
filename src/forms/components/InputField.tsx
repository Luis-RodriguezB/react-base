import { ErrorMessage, useField } from 'formik';

interface Props {
  id: string;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}

export const InputField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input className='text-input' {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component='span'
        className='error-message'
      />
    </>
  );
};
