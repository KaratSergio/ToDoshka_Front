import React from 'react';
import { IconProps } from './types';
import sprite from '@assets/svg/sprite.svg';

const Icon: React.FC<IconProps> = ({
  id,
  size,
  width,
  height,
  color = 'fill-transparent',
  strokeColor = 'stroke-black',
  className = '',
}) => {
  return (
    <svg className={`${size ? size : `${width} ${height}`} ${color} ${strokeColor} ${className}`}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
