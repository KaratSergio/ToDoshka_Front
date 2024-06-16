import React from 'react';
import { IButtonProps } from './types';
import Icon from '@src/helpers/icon/Icon';

const Button: React.FC<IButtonProps> = ({ children, className, iconProp, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={`flex items-center ${className}`}>
      {iconProp && <Icon {...iconProp} />}
      {children}
    </button>
  );
};

export default Button;
