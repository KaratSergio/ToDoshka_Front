import { UpdateUserParams } from '@src/redux/auth/types';

interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export const validateFormData = (data: UpdateUserParams): ValidationResult => {
  // Перевірка формату файлу
  if (data.avatar && data.avatar[0] && !/\.(jpg)$/.test(data.avatar[0].name.toLowerCase())) {
    return {
      isValid: false,
      message: 'Invalid file format. Please use images in jpg or png formats.',
    };
  }

  // Перевірка імені
  if (!/^[a-zA-Z0-9 !@#$%^&*()_+,.:;'"?/-]+$/.test(data.name)) {
    return {
      isValid: false,
      message: 'Please enter your name using Latin characters.',
    };
  }

  // Перевірка пройшла успішно
  return { isValid: true };
};
