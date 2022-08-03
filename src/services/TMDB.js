import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const page = 1;
const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get Movies by Type
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&language=en-US&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
} = tmdbApi;
