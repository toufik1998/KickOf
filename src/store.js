import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './slices/matchesApiSlice';

export default configureStore({
  reducer: {
    matches: matchesReducer,
  },
});