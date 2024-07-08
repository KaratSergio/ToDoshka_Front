import { RootState } from '../store';

export interface CustomThunkConfig {
  state: RootState;
  rejectValue: {
    message: string;
  };
}
