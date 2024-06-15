import { useAppSelector } from '@src/redux/store';
import { selectModalContent } from '@redux/modal/selectors';
import CreateBoard from '@src/components/Boards/CreateBoard/CreateBoard';

const ModalContent: React.FC = () => {
  const modalContent = useAppSelector(selectModalContent);

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
