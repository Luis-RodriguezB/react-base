import { ErrorMessage, useField } from 'formik';

interface Props {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const SelectField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <select className='text-input' {...field} {...props} />
      <ErrorMessage
        name={props.name}
        component='span'
        className='error-message'
      />
    </>
  );
};
