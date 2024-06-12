import { useSelector } from 'react-redux';
import { selectModalContent } from '@redux/modal/selectors';

const ModalContent: React.FC = () => {
  const modalContent = useSelector(selectModalContent);

  if (!modalContent) return null;

  if (typeof modalContent === 'object' && 'action' in modalContent) {
    switch (modalContent.action) {
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
      case 'назва кейса':
        return 'повертае компонент';
      default:
        return null;
    }
  }

  return null;
};

export default ModalContent;
