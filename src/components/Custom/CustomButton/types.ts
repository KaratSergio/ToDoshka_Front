import { IconProps } from '@src/components/Icon/types';

export interface IButtonProps {
  children?: React.ReactNode;
  className?: string;
  iconProp?: IconProps;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
}
