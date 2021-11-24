export interface CreateUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar: string;
  dateOfBirth: Date;
  gender: string;
}

export interface CreateCommentRequest {
  message: string;
  reviewID: number;
}

export interface CreateMovieRequest {
  title: string;
  description: string;
  directorID: number;
  actorsID: number[];
  categoriesID: number[];
  startDate: Date;
  bannerImage: string;
  trailerLink: string;
}

export interface CreateActorRequest {
  firstName: string;
  lastName: string;
}

export interface CreateDirectorRequest {
  firstName: string;
  lastName: string;
}

export interface CreateReviewRequest {
  moiveID: number;
  message: string;
  score: number;
}

export interface CreateCategoryRequest {
  title: string;
}

export interface LoginRequset {
  email: string;
  password: string;
}
