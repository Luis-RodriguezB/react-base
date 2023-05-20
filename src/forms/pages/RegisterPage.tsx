import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const { formData, onChange, resetForm } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const { name, email, password1, password2 } = formData;
  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        />

        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        />

        <input
          type='password'
          placeholder='Password'
          autoComplete='off'
          name='password1'
          value={password1}
          onChange={onChange}
        />

        <input
          type='password'
          placeholder='Confirm Password'
          autoComplete='off'
          name='password2'
          value={password2}
          onChange={onChange}
        />

        <button type='submit'>Send</button>

        <button type='button' onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
