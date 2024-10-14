import { useAppSelector } from '@redux/store';
import { selectModalContent } from '@redux/modal/selectors';

import BoardAddModal from '@src/components/Boards/BoardAddModal/BoardAddModal';
import EditUser from '@components/EditUser/EditUser';

const ModalContent: React.FC = () => {
  const modalContent = useAppSelector(selectModalContent);

  if (!modalContent) return null;

  switch (modalContent.content) {
    case 'AddNewBoard':
      return <BoardAddModal />;
    case 'EditUser':
      return <EditUser />;
    default:
      return null;
  }
};

export default ModalContent;
