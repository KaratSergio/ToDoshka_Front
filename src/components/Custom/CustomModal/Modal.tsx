import React from 'react';
import { CustomModalProps } from './types';
import Button from '../CustomButton/Button';

const Modal: React.FC<CustomModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-25">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all relative">
        <div className="p-6">{children}</div>
        <div className="absolute top-0 right-0 m-4">
          <Button
            onClick={onClose}
            type="button"
            className="  w-8 h-8 "
            iconProp={{ id: 'icon-x', color: 'fill-black' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
