import { useAppDispatch, useAppSelector } from '@redux/store';
import { updateUserThunk } from '@redux/auth/thunks';
import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '@components/Custom/CustomInput/Input';
import UploaderAvatar from './UploaderAvatar';
import { yupResolver } from '@hookform/resolvers/yup';

import { UpdateUserParams } from '@redux/auth/types';
import { closeModal } from '@redux/modal/modalSlice';
import { selectUser } from '@redux/auth/selectors';
import { UserSchema } from '@schemas/authSchemas';

import { validateFormData } from './validation';
import { toast } from 'react-toastify';

const EditUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { avatarURL, name, email } = user;

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserParams>({
    defaultValues: {
      name: name,
      email: email,
      password: '',
    },
    resolver: yupResolver(UserSchema),
    mode: 'onChange',
  });
  const selectedFile = watch('avatar');

  const onSubmit: SubmitHandler<UpdateUserParams> = (data) => {
    const validationResult = validateFormData(data);

    if (!validationResult.isValid) {
      toast.error(validationResult.message, { autoClose: 4000 });
      return;
    }
    const userData = new FormData();
    if (data.avatar && data.avatar.length > 0) {
      userData.append('avatar', data.avatar[0]);
    }
    userData.append('name', data.name);
    userData.append('email', data.email);
    userData.append('password', data.password);

    dispatch(updateUserThunk(userData));
    dispatch(closeModal());
  };

  return (
    <div>
      <p className="text-lg font-medium">Edit profile</p>
      <form
        className="flex flex-col justify-center items-center w-full max-w-[352px] gap-4 pt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <UploaderAvatar
          selectedFile={selectedFile}
          avatarURL={avatarURL}
          {...register('avatar')}
          error={errors.avatar?.message}
        />
        <Input
          type="name"
          placeholder="Enter your name"
          {...register('name')}
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
        <div className="flex justify-center py-4 ps-4 rounded-lg bg-lime-200 w-[352px]">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
