import { IFullMovieDetail } from "@data/Services/MovieDB/Interfaces/Response/IFullMovieDetail";

export interface IMovieDetailState {
    isLoading: boolean;
    result: IFullMovieDetail;
    error?: Error;
}