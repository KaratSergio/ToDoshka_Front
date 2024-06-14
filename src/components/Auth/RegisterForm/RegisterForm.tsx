import { registerThunk } from '@src/redux/auth/thunks';
import { useAppDispatch } from '@src/redux/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from '../types';

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    if (data) {
      dispatch(registerThunk(data));
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center w-full max-w-[424px] gap-4">
        <input
          className="w-[324px] py-4 px-4 border-2 rounded-lg"
          autoComplete="off"
          placeholder="Enter your name"
          {...register('name', {
            required: 'Required field',
          })}
        />
        <input
          className="w-[324px] py-4 px-4 border-2 rounded-lg"
          autoComplete="off"
          placeholder="Enter your email"
          type="email"
          {...register('email', {
            required: 'Required field',
          })}
        />
        <div>
          <input
            className="w-[324px] py-4 px-4 border-2 rounded-lg"
            autoComplete="off"
            placeholder="Create a password"
            {...register('password', {
              required: 'Required field',
            })}
          />
        </div>
        <div className="py-4 ps-4 rounded-lg bg-lime-200 w-[324px]">
          <button type="submit">Register Now</button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
