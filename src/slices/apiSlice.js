import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constans';


const baseQuery = fetchBaseQuery({base_url: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Match', 'Team', 'League'],
    endpoints: (builder) => ({})  
})