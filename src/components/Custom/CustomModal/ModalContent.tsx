import { useAppSelector } from '@redux/store';
import { selectModalContent } from '@redux/modal/selectors';

import CreateBoard from '@components/Boards/CreateBoard/CreateBoard';
import EditUser from '@components/EditUser/EditUser';

const ModalContent: React.FC = () => {
  const modalContent = useAppSelector(selectModalContent);

  if (!modalContent) return null;

  switch (modalContent.content) {
    case 'AddNewBoard':
      return <CreateBoard />;
    case 'EditUser':
      return <EditUser />;
    default:
      return null;
  }
};

export default ModalContent;
