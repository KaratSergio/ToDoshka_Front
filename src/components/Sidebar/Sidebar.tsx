import { useDispatch } from 'react-redux';
import { openModal } from '@redux/modal/modalSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('AddBoard'));
  };

  return (
    <div className="w-260 bg-slate-300 h-screen">
      <p>Sidebar</p>
      <button onClick={handleOpenModal}>CreateBoard</button>
    </div>
  );
};

export default Sidebar;
