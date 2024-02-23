import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const token = 'vBsKHGtAjXcI6eJHOZ7zc9Oy0d5W5gcA9jobYv4gQtGT68LbSPvde2AjUkns';
// Replace 'YOUR_API_TOKEN' with your actual API token
const API_URL = `https://api.sportmonks.com/v3/football/players?api_token=${token}&include=country;position`;
const MATCH_DETAILS_API_URL = id => `https://api.sportmonks.com/v3/football/fixtures/${id}?api_token=${token}&include=league;participants`;

// Async thunk for fetching players
export const fetchPlayers = createAsyncThunk('players/fetchPlayers', async () => {
    const response = await axios.get(API_URL);
    return response.data;
  });
  
// Slice for players
export const playersSlice = createSlice({
    name: 'players',
    initialState: { entities: [], playerDetails: null, loading: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPlayers.pending, (state) => {
          state.loading = 'loading';
        })
        .addCase(fetchPlayers.fulfilled, (state, action) => {
          state.loading = 'idle';
          state.entities = action.payload;
        });
    },
  });
  
  export default playersSlice.reducer;
