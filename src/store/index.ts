import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer'; // Предполагается, что вы уже правильно настроили редьюсер
import { createAPI } from '../components/services/api'; // Убедитесь, что путь правильный

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkExtraArgument = typeof api;


