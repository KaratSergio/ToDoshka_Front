import { createSelector } from 'reselect';
import { RootState } from './types';

// Основний селектор для отримання стану аутентифікації
const selectAuthState = (state: RootState) => state.auth;

// Селектор для отримання користувача
export const selectUser = createSelector(selectAuthState, (authState) => authState.user);

// Селектор для отримання токена
export const selectToken = createSelector(selectAuthState, (authState) => authState.token);

// Селектор для отримання стану завантаження
export const selectIsLoading = createSelector(selectAuthState, (authState) => authState.isLoading);

// Селектор для отримання стану входу
export const selectIsLogin = createSelector(selectAuthState, (authState) => authState.isLogin);

// Селектор для отримання помилки
export const selectError = createSelector(selectAuthState, (authState) => authState.error);
