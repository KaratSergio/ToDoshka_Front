import React from 'react';
import { CustomModalProps } from './types';
import Button from '../CustomButton/Button';

const Modal: React.FC<CustomModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const className =
    'inline-flex justify-center w-full sm:w-auto px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:text-sm';
  const propIcon = {
    id: 'plus',
    width: 'w-6',
    height: 'h-6',
    color: 'text-white',
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-25">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full relative">
        <div className="p-4">{children}</div>
        <div className="absolute top-0 right-0 m-4">
          <button
            onClick={onClose}
            type="button"
            className="inline-flex  items-center justify-center w-8 h-8 rounded-full font-black text-black"
          >
            &#x2715;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
