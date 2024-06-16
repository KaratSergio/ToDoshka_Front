import { IconProps } from '@src/helpers/icon/types';

export interface IButtonProps {
  children?: React.ReactNode;
  className?: string; // Tailwind CSS classes
  iconProp?: IconProps;
  onClick: () => void;
  type?: 'submit' | 'button' | 'reset';
}
