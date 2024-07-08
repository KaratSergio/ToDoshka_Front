import { Board } from './types';
import { $instance } from '../auth/actions';

// =======================BOARDS-API-SERVICE=========================

export const getAllBoards = async (token: string): Promise<Board[]> => {
  const { data } = await $instance.get<Board[]>('boards', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const addBoard = async (body: Board): Promise<Board> => {
  const { data } = await $instance.post<Board>('boards', body);
  return data;
};

export const getBoard = async (token: string, id: string): Promise<Board> => {
  const { data } = await $instance.get<Board>(`boards/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const editBoard = async (token: string, id: string, body: Board): Promise<Board> => {
  const { data } = await $instance.put<Board>(`boards/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteBoard = async (token: string, id: string): Promise<boolean> => {
  await $instance.delete(`boards/${id}`, {});
  return true;
};
