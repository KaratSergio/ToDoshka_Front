import axios, { AxiosInstance } from 'axios';
import { Board } from './types';

const BASE_URL = import.meta.env.VITE_URL_RENDER;

const $instance: AxiosInstance = axios.create({ baseURL: BASE_URL });

// =======================BOARDS-API-SERVICE=========================

export const getAllBoards = async (): Promise<Board[]> => {
  const { data } = await $instance.get<Board[]>('boards');
  return data;
};

export const addBoard = async (body: Board): Promise<Board> => {
  const { data } = await $instance.post<Board>('boards', body);
  return data;
};

export const getBoard = async (id: string): Promise<Board> => {
  const { data } = await $instance.get<Board>(`boards/${id}`);
  return data;
};

export const editBoard = async (id: string, body: Board): Promise<Board> => {
  const { data } = await $instance.put<Board>(`boards/${id}`, body);
  return data;
};

export const deleteBoard = async (id: string): Promise<boolean> => {
  await $instance.delete(`boards/${id}`);
  return true;
};
