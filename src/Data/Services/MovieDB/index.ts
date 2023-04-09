import { AxiosResponse } from "axios";
import { IBaseMovieDbResponse } from "../../Base/IBaseMovieDbResponse";
import { movieDbAPI } from "../../Config";
import { IMovieListInfo } from "./Interfaces/Response/IMovieDetail";

class MovieDbService {
    getPopularMovies(page: number): Promise<AxiosResponse<IBaseMovieDbResponse<IMovieListInfo>>> {
        return movieDbAPI().get(`/movie/top_rated?page=${page}&language=pt-br`);
    }
}

const instance = new MovieDbService();
export default instance;