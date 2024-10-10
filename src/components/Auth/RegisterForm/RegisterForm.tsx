import { useAppDispatch } from '@redux/store';
import { registerThunk } from '@redux/auth/thunks';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';

import { IFormInput } from '../types';
import Input from '@components/Custom/CustomInput/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from '@schemas/authSchemas';
import GoogleButton from '../GoogleButton';

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(RegisterSchema) as Resolver<IFormInput>,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    if (data) {
      dispatch(registerThunk(data));
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center items-center w-full max-w-[424px] gap-4">
        <Input
          type="name"
          placeholder="Enter your name"
          {...register('name', { required: 'Required field' })}
          error={errors.name?.message}
        />
        <Input
          type="email"
          placeholder="Enter your email"
          {...register('email', { required: 'Required field' })}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Create a password"
          {...register('password', { required: 'Required field' })}
          error={errors.password?.message}
        />
        <div className="rounded-lg bg-lime-200 w-full">
          <button className="w-full h-[49px]" type="submit">
            Register Now
          </button>
        </div>
      </div>

      <GoogleButton />
    </form>
  );
};

export default RegisterForm;
