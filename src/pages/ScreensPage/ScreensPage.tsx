import { useDispatch } from 'react-redux';
import { openModal } from '@redux/modal/modalSlice';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <div>
      <h3>Boards</h3>
      <button onClick={handleOpenModal}>ModalTest</button>
    </div>
  );
};

export default ScreensPage;
