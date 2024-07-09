import { createSelector } from 'reselect';
import { RootState } from './types';

const selectAuthState = (state: RootState) => state.auth;

export const selectUser = createSelector(selectAuthState, (authState) => authState.user);

export const selectToken = createSelector(selectAuthState, (authState) => authState.token);

export const selectIsLoading = createSelector(selectAuthState, (authState) => authState.isLoading);

export const selectIsLogin = createSelector(selectAuthState, (authState) => authState.isLogin);

export const selectError = createSelector(selectAuthState, (authState) => authState.error);
