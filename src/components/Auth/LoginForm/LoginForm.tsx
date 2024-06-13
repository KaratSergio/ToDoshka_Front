import { loginThunk } from '@src/redux/auth/thunks';
import { useAppDispatch } from '@src/redux/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from '../types';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    dispatch(loginThunk(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        placeholder="Enter your email"
        type="email"
        {...register('email', {
          required: 'Required field',
        })}
      />
      <div>
        <input
          autoComplete="off"
          placeholder="Create a password"
          {...register('password', {
            required: 'Required field',
          })}
        />
      </div>
      <div>
        <button type="submit">Login Now</button>
      </div>
    </form>
  );
};

export default LoginForm;
