import React from 'react';
import { IconProps } from './types';

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
      <use xlinkHref={`../../assets/svg/sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
