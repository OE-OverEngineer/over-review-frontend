import { CreateMovieRequest } from '../postSchemas';
import { Movie } from '../reponseInterface/movie.interface';
import { get, post } from '../RestClient';

export default function moviesController() {
  return {
    postMovies: (data: CreateMovieRequest) =>
      post<CreateMovieRequest, Movie>('movies', data),
    getMovies: (perPage: number, pageNum: number, sort?: string) =>
      get<Movie[]>(`movies?perPage=${perPage}&pageNum=${pageNum}&sort=${sort}`),
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
  };
}
