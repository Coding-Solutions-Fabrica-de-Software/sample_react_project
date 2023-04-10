import { AxiosResponse } from "axios";
import { IBaseMovieDbResponse } from "../../Base/IBaseMovieDbResponse";
import { movieDbAPI } from "../../Config";
import { IListMovieDetail } from "./Interfaces/Response/IListMovieDetail";

class MovieDbService {
    getPopularMovies(page: number): Promise<AxiosResponse<IBaseMovieDbResponse<IListMovieDetail>>> {
        return movieDbAPI().get(`/movie/top_rated?page=${page}&language=pt-br`);
    }
    getMovieDetail(id: number): Promise<AxiosResponse<IBaseMovieDbResponse<IListMovieDetail>>> {
        return movieDbAPI().get(`/movie/${id}?language=pt-br`);
    }
}

const instance = new MovieDbService();
export default instance;