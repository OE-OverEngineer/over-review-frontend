import { CreateMovieRequest, CreateRequest } from '../postSchemas';
import { RequestMovieRespones } from '../reponseInterface/index.interface';
import { Movie, MoviePaginate } from '../reponseInterface/movie.interface';
import { get, post } from '../RestClient';

export default function moviesController() {
  return {
    postMovies: (data: CreateMovieRequest) =>
      post<CreateMovieRequest, Movie>('movies', data),
    getMovies: (perPage: number, pageNum: number, sort?: string) =>
      get<MoviePaginate>(`movies?perPage=${perPage}&pageNum=${pageNum}&sort=${sort}`),
    getMovieSearch: (search: string, perPage: number, pageNum: number, sort?: string) =>
      get(
        `movies/search?search=${search}&perPage=${perPage}&pageNum=${pageNum}&sort=${sort}`,
      ),
    getMoviesId: (id: number | string) => get<Movie>(`movies/${id}`),
    getMoviesIdReviews: (
      id: number | string,
      perPage: number,
      pageNum: number,
      sort?: string,
    ) => get(`movies/${id}/reviews?perPage=${perPage}&pageNum=${pageNum}&sort=${sort}`),
    postMovieRequest: (data: CreateRequest) =>
      post<CreateRequest, any>('movies/request', data),
    getMovieRequest: (perPage: number, pageNum: number, sort?: string) =>
      get<RequestMovieRespones>(
        `movies/request?perPage=${perPage}&pageNum=${pageNum}&sort=${sort}`,
      ),
  };
}
