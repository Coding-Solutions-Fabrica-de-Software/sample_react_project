
import { combineReducers } from "@reduxjs/toolkit";
import popularMovies from './PopularMovies/reducer';
import { all, takeLatest } from "redux-saga/effects";
import { PopularMoviesActionKeys } from "./PopularMovies/actions";
import { fetchPopularMovies } from "./PopularMovies/sagas";
import movieDetail from './MovieDetail/reducer';
import { MovieDetailActionKeys } from "./MovieDetail/actions";
import { fetchMovieDetail } from "./MovieDetail/sagas";

export const moviesReducer = combineReducers({
    popularMovies, movieDetail
});

export function* moviesSagas() {
    yield all([
        takeLatest(
            PopularMoviesActionKeys.POPULAR_MOVIES_START,
            fetchPopularMovies
        ),
        takeLatest(
            MovieDetailActionKeys.MOVIE_DETAIL_START,
            fetchMovieDetail
        )
    ]);
}