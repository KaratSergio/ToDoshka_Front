export interface IButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  iconColor?: string;
  type?: 'submit' | 'button' | 'reset';
}

export interface IAddButtonProps extends IButtonProps {
  iconStyles?: {
    color?: string;
    width?: string;
    height?: string;
    size?: string;
  };
}
