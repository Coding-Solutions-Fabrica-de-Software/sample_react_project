import { IPopularMoviesState } from './IPopularMoviesState';
import { PopularMoviesActionKeys, PopularMoviesActionUnion } from './actions';

const initalState: IPopularMoviesState = {
    result: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    error: undefined,
    isLoading: false,
};

const reducer = (
    state = initalState,
    action: PopularMoviesActionUnion
): IPopularMoviesState => {
    switch (action.type) {
        case PopularMoviesActionKeys.POPULAR_MOVIES_START:
            return {
                ...state,
                isLoading: true,
            };
        case PopularMoviesActionKeys.POPULAR_MOVIES_SUCCEDED:
            return {
                ...state,
                result: {
                    ...action.payload,
                    results: [
                        ...state.result.results,
                        ...action.payload.results
                    ]
                },
                isLoading: false,
            };
        case PopularMoviesActionKeys.POPULAR_MOVIES_FAILED:
            const error = action.payload;
            return {
                ...state,
                error,
                isLoading: false,
            };
        default:
            return {
                ...state,
            };
    }
};

export default reducer;
