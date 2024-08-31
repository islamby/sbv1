import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            isImportant: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTaskImportance(state, action) {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isImportant = !task.isImportant;
      }
    },
    updateTaskText(state, action) {
      const { id, newText } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.text = newText;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTaskImportance, updateTaskText } = tasksSlice.actions;

export default tasksSlice.reducer;
