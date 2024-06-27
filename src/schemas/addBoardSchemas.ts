import * as Yup from 'yup';

export const addBoardSchema = Yup.object({
  title: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!').required('Title is required'),
  icon: Yup.string(),
  background: Yup.string(),
}).required();
