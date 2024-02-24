import { createSlice } from '@reduxjs/toolkit';
import { fetchMatchDetails } from './matchesApiSlice';

const favouritesApiSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addFavourite: (state, action) => {
      state.push(action.payload);
    },
    deleteFavourite: (state, action) => {
      return state.filter(match => match.data.id !== action.payload.data.id);
    },
  },
});

export const { addFavourite, deleteFavourite } = favouritesApiSlice.actions;

export default favouritesApiSlice.reducer;