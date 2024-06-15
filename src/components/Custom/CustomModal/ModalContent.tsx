import { useSelector } from 'react-redux';
import { selectModalContent } from '@redux/modal/selectors';
import CreateBoard from '@src/components/Boards/CreateBoard/CreateBoard';
import { useAppSelector } from '@src/redux/store';

const ModalContent: React.FC = () => {
  const modalContent = useAppSelector(selectModalContent);
  console.log(modalContent);

  if (!modalContent) return null;

  if (typeof modalContent === 'object' && 'content' in modalContent) {
    switch (modalContent.content) {
      case 'AddBoard':
        return <CreateBoard />;
      case 'назва кейса':
        return 'повертае компонент';
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
  }

  return null;
};

export default ModalContent;
