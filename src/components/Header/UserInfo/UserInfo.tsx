import { selectUser } from '@src/redux/auth/selectors';
import { openModal } from '@src/redux/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/redux/store';

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(openModal('editUser'));
  };
  const user = useAppSelector(selectUser);
  return (
    <div>
      <button onClick={handleClick} className="flex gap-2" type="button" aria-label="user-profile">
        {user.name}
        {user.avatarURL ? (
          <div>
            <img src={user.avatarURL} alt="user-avatar" className="w-8 h-8" />
          </div>
        ) : (
          <img
            src="../../../../src/assets/img/userAvatar/user-dark.png"
            alt="userAvatar"
            className="w-8 h-8"
          />
        )}
      </button>
    </div>
  );
};
export default UserInfo;
