import { createSlice } from "@reduxjs/toolkit";

//initially state is empty
const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  // create reducer, "movie" state
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;
export default movieSlice.reducer;
