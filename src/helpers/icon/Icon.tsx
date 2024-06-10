import React from 'react';
import { IconProps } from './types';
import sprite from '../../assets/svg/sprite.svg';

const Icon: React.FC<IconProps> = ({
  id,
  width = 24,
  height = 24,
  color = 'fill-transparent',
  strokeColor = 'stroke-black',
}) => {
  return (
    <svg
      className={`inline-block align-middle w-${width} h-${height} ${color} ${strokeColor}`}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
