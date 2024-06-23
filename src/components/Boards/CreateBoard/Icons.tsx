import Icon from '@components/Icon/Icon';
import { icons } from '@utils/constants';

import { RenderIconsProps } from '../types';

const Icons: React.FC<RenderIconsProps> = ({ selectedIcon, handleIconSelect }) => {
  return (
    <>
      <h3 className="text-lg font-semibold">Icons</h3>
      <div className="flex gap-2">
        {icons.map((icon) => (
          <div
            key={icon}
            onClick={() => handleIconSelect(icon)}
            className={`flex items-center w-[18px] h-[18px] cursor-pointer ${
              selectedIcon === icon ? 'border border-blue-500' : ''
            }`}
          >
            <Icon
              id={icon}
              width="w-[18px]"
              height="h-[18px]"
              color="fill-transparent"
              strokeColor="stroke-black"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Icons;
