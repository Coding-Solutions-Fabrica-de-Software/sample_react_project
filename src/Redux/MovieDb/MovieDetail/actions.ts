import { Action, ActionsUnion, createAction } from '@coding_solutions/redux-utils';
import { IFullMovieDetail } from '@data/Services/MovieDB/Interfaces/Response/IFullMovieDetail';

export enum MovieDetailActionKeys {
    MOVIE_DETAIL_START = '[MOVIE] MOVIE_DETAIL_START',
    MOVIE_DETAIL_SUCCEDED = '[MOVIE] MOVIE_DETAIL_SUCCEDED',
    MOVIE_DETAIL_FAILED = '[MOVIE] MOVIE_DETAIL_FAILED',
}

export const MovieDetailActions = {
    fetchMovieDetail: (page: number): fetchMovieDetailAction =>
        createAction(MovieDetailActionKeys.MOVIE_DETAIL_START, page),
    fetchMovieDetailSucceded: (result: IFullMovieDetail): fetchMovieDetailActionSucceded =>
        createAction(MovieDetailActionKeys.MOVIE_DETAIL_SUCCEDED, result),
    fetchMovieDetailFailed: (err: Error): fetchMovieDetailFailedAction =>
        createAction(MovieDetailActionKeys.MOVIE_DETAIL_FAILED, err),
};

export type MovieDetailActionUnion = ActionsUnion<typeof MovieDetailActions>;

export type fetchMovieDetailAction = Action<
    MovieDetailActionKeys.MOVIE_DETAIL_START,
    number
>;
export type fetchMovieDetailActionSucceded = Action<
    MovieDetailActionKeys.MOVIE_DETAIL_SUCCEDED,
    IFullMovieDetail
>;
export type fetchMovieDetailFailedAction = Action<
    MovieDetailActionKeys.MOVIE_DETAIL_FAILED,
    Error
>;
