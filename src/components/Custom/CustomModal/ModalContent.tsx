import { useAppSelector } from '@src/redux/store';
import { selectModalContent } from '@redux/modal/selectors';
import CreateBoard from '@src/components/Boards/CreateBoard/CreateBoard';
import EditUser from '@src/components/EditUser/EditUser';

const ModalContent: React.FC = () => {
  const modalContent = useAppSelector(selectModalContent);

  if (!modalContent) return null;

  switch (modalContent.content) {
    case 'AddBoard':
      return <CreateBoard />;
    case 'editUser':
      return <EditUser />;
    case 'назва кейса':
      return 'повертае компонент';
    case 'назва кейса':
      return 'повертае компонент';
    case 'назва кейса':
      return 'повертае компонент';
    case 'назва кейса':
      return 'повертае компонент';
    default:
      return null;
  }
};

export default ModalContent;
