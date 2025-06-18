import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  columns: [
    { id: 'todo', title: 'To Do' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'done', title: 'Done' },
  ],
};

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columns.push({
        id: Date.now().toString(),
        ...action.payload,
      });
    },
    updateColumn: (state, action) => {
      const index = state.columns.findIndex(col => col.id === action.payload.id);
      if (index !== -1) {
        state.columns[index] = { ...state.columns[index], ...action.payload };
      }
    },
    deleteColumn: (state, action) => {
      state.columns = state.columns.filter(col => col.id !== action.payload);
    },
  },
});

export const { addColumn, updateColumn, deleteColumn } = columnsSlice.actions;
export default columnsSlice.reducer; 