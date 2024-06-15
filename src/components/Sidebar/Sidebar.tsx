import { useDispatch } from 'react-redux';
import { openModal } from '@redux/modal/modalSlice';

const SideBar = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('AddBoard'));
  };

  return (
    <div className="w-260 bg-slate-300 h-screen">
      <p>Side Bar</p>
      <button onClick={handleOpenModal}>CreateBoard</button>
    </div>
  );
};

export default SideBar;
