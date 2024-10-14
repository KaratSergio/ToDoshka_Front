import { CustomModalProps } from './types';
import Icon from '@components/Icon/Icon';

const Modal: React.FC<CustomModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-25">
      <div className="text-[var(--color-font)] bg-[var(--bg-sidebar)] rounded-lg overflow-hidden relative">
        <div className="p-6">{children}</div>
        <div className="absolute top-0 right-0 m-4">
          <button onClick={onClose} type="button">
            <Icon id="icon-close" color="fill-black" strokeColor="stroke-black" width="w-5" height="h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
