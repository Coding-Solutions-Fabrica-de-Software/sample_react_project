import { IBaseMovieDbResponse } from "@data/Base/IBaseMovieDbResponse";
import { IMovieListInfo } from "@data/Services/MovieDB/Interfaces/Response/IMovieDetail";

export interface IPopularMoviesState {
    isLoading: boolean;
    result: IBaseMovieDbResponse<IMovieListInfo>;
    error?: Error;
}