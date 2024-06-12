import { ReactNode } from 'react';

export interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}
