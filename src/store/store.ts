import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../slices/counterSlice';
import taksReducer from './slices/taks';

export const store = configureStore({
  reducer: {
    task: taksReducer,
  },
});

// Tipos para usar en hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;