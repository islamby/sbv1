import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/Slice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
