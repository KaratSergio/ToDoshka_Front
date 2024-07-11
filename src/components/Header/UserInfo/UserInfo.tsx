import { selectUser } from '@redux/auth/selectors';
import { openModal } from '@redux/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import defaultAvatar from '@assets/img/userAvatar/user-dark.png';

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(openModal('EditUser'));
  };
  const user = useAppSelector(selectUser);
  return (
    <div>
      <button
        onClick={handleClick}
        className="flex items-center gap-2"
        type="button"
        aria-label="user-profile"
      >
        {user.name}
        {user.avatarURL ? (
          <div>
            <img src={user.avatarURL} alt="user-avatar" className="w-8 h-8" />
          </div>
        ) : (
          <img src={defaultAvatar} alt="userAvatar" className="w-8 h-8" />
        )}
      </button>
    </div>
  );
};
export default UserInfo;
