import { IMovieDetailState } from './IMovieDetailState';
import { MovieDetailActionKeys, MovieDetailActionUnion } from './actions';

const initalState: IMovieDetailState = {
    result: {
        adult: false,
        backdrop_path: '',
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        title: '',
        vote_average: 0
    },
    error: undefined,
    isLoading: false,
};

const reducer = (
    state = initalState,
    action: MovieDetailActionUnion
): IMovieDetailState => {
    switch (action.type) {
        case MovieDetailActionKeys.MOVIE_DETAIL_START:
            return {
                ...state,
                isLoading: true,
            };
        case MovieDetailActionKeys.MOVIE_DETAIL_SUCCEDED:
            return {
                ...state,
                result: action.payload,
                isLoading: false,
            };
        case MovieDetailActionKeys.MOVIE_DETAIL_FAILED:
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
