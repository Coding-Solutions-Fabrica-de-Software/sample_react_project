import { all, fork } from 'redux-saga/effects';
import { moviesSagas } from './MovieDb';

export function* rootSaga() {
    yield all([
        fork(moviesSagas)
    ]);
}
