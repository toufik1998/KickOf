// import { MATCHES_URl } from "../constans"; 
// import { apiSlice } from "./apiSlice"; 

// export const matchesApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         getMatches: builder.query({
//             query: () => ({
//                 url: MATCHES_URl,
//             }),
//             keepUnusedDataFor: 5,
//         }),

//         getMatchDetails: builder.query({
//             query: (matchId) => ({
//                 url: `${MATCHES_URl}/${matchId}`,
//             }),
//             keepUnusedDataFor: 5,
//         })
//     }),
// });

// export const { useGetMatchesQuery, useGetMatchDetailsQuery } = matchesApiSlice;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const token = 'vBsKHGtAjXcI6eJHOZ7zc9Oy0d5W5gcA9jobYv4gQtGT68LbSPvde2AjUkns';
// Replace 'YOUR_API_TOKEN' with your actual API token
const API_URL = `https://api.sportmonks.com/v3/football/fixtures?api_token=${token}&include=league;participants`;

// Async thunk for fetching matches
export const fetchMatches = createAsyncThunk('matches/fetchMatches', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Slice for matches
export const matchesSlice = createSlice({
  name: 'matches',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
      });
  },
});

export default matchesSlice.reducer;