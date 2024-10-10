import { useAppDispatch } from '@redux/store';
import { loginThunk } from '@redux/auth/thunks';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';

import { IFormInput } from '../types';
import Input from '@components/Custom/CustomInput/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@schemas/authSchemas';
import GoogleButton from '../GoogleButton';

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
        <Input placeholder="Enter your email" type="email" {...register('email')} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input placeholder="Create a password" type="password" {...register('password')} />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <div className="rounded-lg bg-lime-200 w-full">
          <button className="w-full h-[49px]" type="submit">
            Login Now
          </button>
        </div>
      </div>

      <GoogleButton />
    </form>
  );
};

export default LoginForm;
