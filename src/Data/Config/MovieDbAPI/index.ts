import axios, { AxiosResponse, Method } from 'axios';
import axiosRetry from 'axios-retry';

const BASE_HEADERS: any = {
    Accept: 'application/json',
};

const apiClient = axios.create({
    timeout: 1000,
    baseURL: import.meta.env.VITE_DB_MOVIE_API_URI,
    headers: BASE_HEADERS,
});

axiosRetry(apiClient, {
    retries: 2,
    retryDelay: () => 15 * 1000,
    retryCondition: axiosRetry.isIdempotentRequestError,
});

class MovieDbAPI {
    requestInprogress: boolean = false;

    async _request<T>(
        method: Method,
        route: string,
        data?: any
    ): Promise<AxiosResponse<T>> {
        try {
            const url = (route.startsWith('/') ? route : `/${route}`);

            const response = await apiClient.request({
                method: method,
                url: `${url}${url.includes('?') ? '&' : '?'}api_key=${import.meta.env.VITE_DB_MOVIE_API_KEY}`,
                data
            });

            return response;
        } catch (err) {
            throw await this._handleError(err);
        } finally {
            this._reset();
        }
    }

    _handleError(
        error: any
    ) {
        if (!error) {
            return 'Houve um erro desconhecido';
        } else if (error.response) {
            const { response = {} } = error;
            const httpStatus = Number(response.status);
            const data = response.data || null;

            if ([500, 502, 502.3].includes(httpStatus)) {
                console.error(
                    `Ops... ${response.status}`,
                    'Conexão instável, Tente novamente'
                );
            }

            if ([401].includes(httpStatus)) {
                console.log('[ERROR:401]');

            }

            if (data) {
                return data;
            }

            return error;
        } else {
            return error;
        }
    }

    _reset() {
        this.requestInprogress = false;
    }

    async get<T>(route: string): Promise<AxiosResponse<T>> {
        if (this.requestInprogress) {
            return Promise.reject(
                'Aguardando resposta do servidor, tente novamente em instantes'
            );
        }
        return this._request<T>('get', route);
    }

    async post<T>(route: string, data?: any): Promise<AxiosResponse<T>> {
        if (this.requestInprogress) {
            return Promise.reject(
                'Aguardando resposta do servidor, tente novamente em instantes'
            );
        }
        return this._request<T>('post', route, data);
    }

    toString() {
        return '\nrequestInprogress=' + this.requestInprogress;
    }
}

export default MovieDbAPI;

export const newMovieDbAPI = () => new MovieDbAPI();
