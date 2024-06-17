import React from 'react';
import { useAppDispatch } from '@src/redux/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerThunk } from '@src/redux/auth/thunks';
import { IFormInput } from '../types';
import Input from '@src/components/Custom/Input/Input';

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

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
        <div className="py-4 ps-4 rounded-lg bg-lime-200 w-[324px]">
          <button type="submit">Register Now</button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
