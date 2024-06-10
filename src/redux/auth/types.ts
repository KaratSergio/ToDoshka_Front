export interface User {
  name: string;
  email: string;
  avatarURL: string;
  _id: string;
  theme: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken?: string;
}

export interface AuthBody {
  name?: string;
  email: string;
  password: string;
}

export interface HelpBody {
  email: string;
  text: string;
}

export interface UpdateUserParams {
  formData: FormData;
}
