import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './slices/matchesApiSlice';
import playersReducer from './slices/playersApiSlice';

export default configureStore({
  reducer: {
    matches: matchesReducer,
    players: playersReducer,
  },
});