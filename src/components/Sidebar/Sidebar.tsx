import { useAppDispatch } from '@redux/store';
import { openModal } from '@redux/modal/modalSlice';

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('AddNewBoard'));
  };

  return (
    <div className="w-260 bg-slate-300 h-screen">
      <p>Sidebar</p>
      <button onClick={handleOpenModal}>CreateBoard</button>
    </div>
  );
};

export default Sidebar;
