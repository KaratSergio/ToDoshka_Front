import { useAppDispatch } from '@redux/store';
import { loginThunk } from '@redux/auth/thunks';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';

import { IFormInput } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@schemas/authSchemas';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormInput>({
    resolver: yupResolver(LoginSchema) as Resolver<IFormInput>,
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(loginThunk(data));
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center w-full max-w-[424px] gap-4">
        <input
          className="w-[324px] py-4 px-4 border-2 rounded-lg"
          autoComplete="on"
          placeholder="Enter your email"
          type="email"
          {...register('email')}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          className="w-[324px] py-4 px-4 border-2 rounded-lg"
          autoComplete="on"
          placeholder="Create a password"
          type="password"
          {...register('password')}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <div className="py-4 ps-4 rounded-lg bg-lime-200 w-[324px]">
          <button type="submit">Login Now</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
