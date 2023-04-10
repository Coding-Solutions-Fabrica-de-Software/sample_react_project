import { call, put } from 'redux-saga/effects';

import { MovieDetailActions, fetchMovieDetailAction } from './actions';
import { MovieDbService } from '@data/Services';

export function* fetchMovieDetail({ payload }: fetchMovieDetailAction) {
    try {
        const { data } = yield call(MovieDbService.getMovieDetail, payload);

        yield put(MovieDetailActions.fetchMovieDetailSucceded(data));
    } catch (e) {
        if (e instanceof Error) {
            yield put(MovieDetailActions.fetchMovieDetailFailed(e));
        }
    }
}
