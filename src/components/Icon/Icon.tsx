import React from 'react';
import { IconProps } from './types';
import sprite from '@assets/svg/sprite.svg';

const Icon: React.FC<IconProps> = ({
  id,
  width,
  height,
  color = 'fill-transparent',
  strokeColor = 'stroke-black',
  className = '',
}) => {
  return (
    <svg className={`${width} ${height} ${color} ${strokeColor} ${className}`}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
