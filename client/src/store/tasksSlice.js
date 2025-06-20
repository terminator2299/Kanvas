import { createSlice } from '@reduxjs/toolkit';

const today = () => new Date().toISOString().split('T')[0];

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Complete Project Setup',
      description: 'Set up the development environment and install dependencies',
      priority: 'high',
      columnId: 'todo',
      labels: [],
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Design Database Schema',
      description: 'Create the database schema for the application',
      priority: 'medium',
      columnId: 'in-progress',
      labels: [],
      createdAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Write Documentation',
      description: 'Document the API endpoints and usage',
      priority: 'low',
      columnId: 'done',
      labels: [],
      createdAt: new Date().toISOString(),
    },
  ],
  loading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now().toString(),
        labels: action.payload.labels || [],
        ...action.payload,
        createdAt: new Date().toISOString(),
      });
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer; 