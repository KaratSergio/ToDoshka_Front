import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

export const useSelectionHandlers = (setValue: UseFormSetValue<any>) => {
  const [selectedIcon, setSelectedIcon] = useState<string | undefined>(undefined);
  const [selectedBackgroundName, setSelectedBackgroundName] = useState<string | undefined>(
    undefined
  );

  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
    setValue('icon', icon);
  };

  const handleBackgroundSelect = (backgroundName: string) => {
    setSelectedBackgroundName(backgroundName);
    setValue('background', backgroundName);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue(name, value.toString());
  };

  return {
    selectedIcon,
    selectedBackgroundName,
    handleIconSelect,
    handleBackgroundSelect,
    handleInputChange,
  };
};
