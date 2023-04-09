import { call, put } from 'redux-saga/effects';

import { PopularMoviesActions, fetchPopularMoviesAction } from './actions';
import { MovieDbService } from '@data/Services';

export function* fetchPopularMovies({ payload }: fetchPopularMoviesAction) {
    try {
        const { data } = yield call(MovieDbService.getPopularMovies, payload);

        window.dispatchEvent(new Event('resize'));
        yield put(PopularMoviesActions.fetchPopularMoviesSucceded(data));
    } catch (e) {
        if (e instanceof Error) {
            yield put(PopularMoviesActions.fetchPopularMoviesFailed(e));
        }
    }
}
