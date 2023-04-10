import { IBaseMovieDbResponse } from "@data/Base/IBaseMovieDbResponse";
import { IListMovieDetail } from "@data/Services/MovieDB/Interfaces/Response/IListMovieDetail";

export interface IPopularMoviesState {
    isLoading: boolean;
    result: IBaseMovieDbResponse<IListMovieDetail>;
    error?: Error;
}