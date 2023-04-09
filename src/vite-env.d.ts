/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_AUTH_URL: string;
    readonly VITE_AUTH_REALM: string;
    readonly VITE_AUTH_CLIENT_ID: string;
    readonly VITE_DB_MOVIE_IMAGE_URI: string;
    readonly VITE_DB_MOVIE_API_URI: string;
    readonly VITE_DB_MOVIE_API_KEY: string;
}