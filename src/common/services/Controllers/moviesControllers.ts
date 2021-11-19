import {
  CreateActorRequest,
  CreateCategoryRequest,
  CreateCommentRequest,
  CreateDirectorRequest,
  CreateMovieRequest,
  CreateReviewRequest,
} from '../postSchemas';
import { Actor } from '../reponseInterface/actor.interface';
import { Movie } from '../reponseInterface/movie.interface';
import { get, post } from '../RestClient';

export default function moviesController() {
  return {
    postComments: (data: CreateCommentRequest) => post('comments', data),
    getComments: () => get('comments'),
    postMovies: (data: CreateMovieRequest) =>
      post<CreateMovieRequest, Movie>('movies', data),
    getMovies: (perPage: number, pageNum: number, sort?: string) =>
      get<Movie[]>(`movies?perPage=${perPage}&pageNum=${pageNum}&sort=${sort}`),
    getCategory: (id: number, perPage: number, pageNum: number, sort?: string) =>
      get(`movies/category/${id}?perPage=${perPage}&pageNum=${pageNum}&sort=${sort}`),
    getMovieSearch: (search: string, perPage: number, pageNum: number, sort?: string) =>
      get(
        `movies/search?search=${search}&perPage=${perPage}&pageNum=${pageNum}&sort=${sort}`,
      ),
    getMoviesId: (id: number) => get(`movies/${id}`),
    postActors: (data: CreateActorRequest) =>
      post<CreateActorRequest, Actor>('actors', data),
    getActors: () => get('actors'),
    postDirectors: (data: CreateDirectorRequest) => post('directors', data),
    getDirectors: () => get('directors'),
    postReviews: (data: CreateReviewRequest) => post('reviews', data),
    getReviews: () => get('reviews'),
    getReviewsId: (id: number) => get(`reviews/${id}`),
    postCategories: (data: CreateCategoryRequest) => post('categories', data),
    getCategories: () => get('categories'),
  };
}
