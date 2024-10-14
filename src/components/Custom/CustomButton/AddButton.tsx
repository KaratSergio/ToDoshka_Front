import { IAddButtonProps } from './types';
import Icon from '@components/Icon/Icon';

const AddButton: React.FC<IAddButtonProps> = ({ children, className, onClick, type, iconStyles }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center bg-black size-[28px] rounded-md ${className}`}
    >
      <Icon
        id="plus"
        width={iconStyles?.width || 'w-4'}
        height={iconStyles?.height || 'h-4'}
        strokeColor={iconStyles?.color || 'stroke-white'}
        size={iconStyles?.size || 'w-4 h-4'}
      />
      {children}
    </button>
  );
};

export default AddButton;
