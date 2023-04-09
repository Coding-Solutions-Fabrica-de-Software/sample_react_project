
import { combineReducers } from "@reduxjs/toolkit";
import popularMovies from './PopularMovies/reducer';
import { all, takeLatest } from "redux-saga/effects";
import { PopularMoviesActionKeys } from "./PopularMovies/actions";
import { fetchPopularMovies } from "./PopularMovies/sagas";

export const moviesReducer = combineReducers({
    popularMovies
});

export function* moviesSagas() {
    yield all([
        takeLatest(
            PopularMoviesActionKeys.POPULAR_MOVIES_START,
            fetchPopularMovies
        )
    ]);
}