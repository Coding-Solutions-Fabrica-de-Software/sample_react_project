import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const createProjectStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [sagaMiddleware]
    });
    sagaMiddleware.run(rootSaga);

    const getState = store.getState;

    return { store, getState };
};

export type RootState = ReturnType<typeof rootReducer>;

export const { store, getState } = createProjectStore();
