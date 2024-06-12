import axios, { AxiosResponse } from 'axios';
import { AuthBody, AuthResponse, HelpBody, User } from './types';

// const BASE_URL = import.meta.env.VITE_URL_RENDER;
const BASE_URL = "http://localhost:3000/api/";

const $instance = axios.create({ baseURL: BASE_URL });

export const setAccessToken = (token: string) => {
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAccessToken = () => {
  $instance.defaults.headers.common.Authorization = '';
};

// =======================AUTH-API-SERVICE=========================
export const register = async (body: AuthBody): Promise<AuthResponse> => {
  const { data }: AxiosResponse<AuthResponse> = await $instance.post(
    'users/register',
    body
  );
  setAccessToken(data.accessToken);
  return data;
};

export const login = async (body: AuthBody): Promise<AuthResponse> => {
  const { data }: AxiosResponse<AuthResponse> = await $instance.post(
    'users/login',
    body
  );
  setAccessToken(data.accessToken);
  return data;
};

export const logout = async (): Promise<{ message: string }> => {
  const { data }: AxiosResponse<{ message: string }> =
    await $instance.post('users/logout');
  clearAccessToken();
  return data;
};

export const currentUser = async (token: string): Promise<User> => {
  setAccessToken(token);
  try {
    const { data }: AxiosResponse<User> = await $instance.get('users/current');
    return data;
  } catch (error) {
    clearAccessToken();
    throw error;
  }
};

export const updateUser = async (formData: FormData): Promise<User> => {
  const { data }: AxiosResponse<User> = await $instance.put(
    'users/update',
    formData
  );
  return data;
};

export const sendHelp = async (body: HelpBody) => {
  const { data } = await $instance.post('users/help', body);
  return data;
};
