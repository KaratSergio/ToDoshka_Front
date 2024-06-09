import React from 'react';
import { IconProps } from './types';
import sprite from '../../assets/svg/sprite.svg';

const Icon: React.FC<IconProps> = ({
  id,
  width = 24,
  height = 24,
  color = 'transparent',
  strokeColor = 'text-blue-500',
}) => {
  return (
    <svg
      className={`inline-block align-middle w-${width} h-${height} fill-${color} stroke-${strokeColor}`}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
