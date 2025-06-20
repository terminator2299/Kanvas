import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import columnsReducer from './columnsSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    columns: columnsReducer,
    auth: authReducer,
  },
}); 