import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/authSlice';
import { boardReducer } from './boards/boardSlice';
import { columnReducer } from './columns/columnSlice';
import { taskReducer } from './tasks/taskSlice';
import { modalReducer } from './modal/modalSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedBoardReducer = persistReducer(persistConfig, boardReducer);
const persistedColumnReducer = persistReducer(persistConfig, columnReducer);
const persistedTaskReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    boards: persistedBoardReducer,
    columns: persistedColumnReducer,
    tasks: persistedTaskReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
