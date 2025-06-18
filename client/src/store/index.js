import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import columnsReducer from './columnsSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    columns: columnsReducer,
  },
}); 