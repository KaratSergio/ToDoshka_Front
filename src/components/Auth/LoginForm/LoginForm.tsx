import { loginThunk } from '@src/redux/auth/thunks';
import { useAppDispatch } from '@src/redux/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from '../types';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    dispatch(loginThunk(data));
  };

  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center w-full max-w-[424px] gap-4">
          <input
            className="w-[324px] py-4 px-4 border-2 rounded-lg"
            autoComplete="on"
            placeholder="Enter your email"
            type="email"
            {...register('email', {
              required: 'Required field',
            })}
          />
          <div>
            <input
              className="w-[324px] py-4 px-4 border-2 rounded-lg"
              autoComplete="on"
              placeholder="Create a password"
              {...register('password', {
                required: 'Required field',
              })}
            />
          </div>
          <div className="py-4 ps-4 rounded-lg bg-lime-200 w-[324px]">
            <button type="submit">Login Now</button>
          </div>
        </div>
      </form>
      <Link to="/home" className="inline-flex items-center my-10">
        HomePageHref
        <span className="ml-1">
          &raquo;&raquo;&raquo;&raquo;&raquo;&raquo;&raquo;&raquo;&raquo;&raquo;&raquo;
        </span>
      </Link>
    </div>
  );
};

export default LoginForm;
