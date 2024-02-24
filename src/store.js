import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './slices/matchesApiSlice';
import playersReducer from './slices/playersApiSlice';
import favouritesReducer from './slices/favouritesApiSlice'

export default configureStore({
  reducer: {
    matches: matchesReducer,
    players: playersReducer,
    favourites: favouritesReducer
  },
});