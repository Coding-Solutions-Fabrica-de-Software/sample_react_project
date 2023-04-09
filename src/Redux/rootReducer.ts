import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from './MovieDb';

export const rootReducer = combineReducers({
    movies: moviesReducer
});
