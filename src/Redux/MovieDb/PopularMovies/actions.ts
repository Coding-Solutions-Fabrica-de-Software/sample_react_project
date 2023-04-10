import { Action, ActionsUnion, createAction } from '@coding_solutions/redux-utils';
import { IBaseMovieDbResponse } from '@data/Base/IBaseMovieDbResponse';
import { IListMovieDetail } from '@data/Services/MovieDB/Interfaces/Response/IListMovieDetail';

export enum PopularMoviesActionKeys {
    POPULAR_MOVIES_START = '[MOVIE] POPULAR_MOVIES_START',
    POPULAR_MOVIES_SUCCEDED = '[MOVIE] POPULAR_MOVIES_SUCCEDED',
    POPULAR_MOVIES_FAILED = '[MOVIE] POPULAR_MOVIES_FAILED',
}

export const PopularMoviesActions = {
    fetchPopularMovies: (page: number): fetchPopularMoviesAction =>
        createAction(PopularMoviesActionKeys.POPULAR_MOVIES_START, page),
    fetchPopularMoviesSucceded: (result: IBaseMovieDbResponse<IListMovieDetail>): fetchPopularMoviesActionSucceded =>
        createAction(PopularMoviesActionKeys.POPULAR_MOVIES_SUCCEDED, result),
    fetchPopularMoviesFailed: (err: Error): fetchPopularMoviesFailedAction =>
        createAction(PopularMoviesActionKeys.POPULAR_MOVIES_FAILED, err),
};

export type PopularMoviesActionUnion = ActionsUnion<typeof PopularMoviesActions>;

export type fetchPopularMoviesAction = Action<
    PopularMoviesActionKeys.POPULAR_MOVIES_START,
    number
>;
export type fetchPopularMoviesActionSucceded = Action<
    PopularMoviesActionKeys.POPULAR_MOVIES_SUCCEDED,
    IBaseMovieDbResponse<IListMovieDetail>
>;
export type fetchPopularMoviesFailedAction = Action<
    PopularMoviesActionKeys.POPULAR_MOVIES_FAILED,
    Error
>;
