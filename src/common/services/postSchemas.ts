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
export interface CreateAdminUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatarUrl: string | ArrayBuffer | null;
  dateOfBirth: Date;
  gender: string;
  role?: number;
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
  trailerLinkUrl: string;
}

export interface CreateRequest {
  title?: string;
  startDate?: Date | string;
  description?: string;
}

export interface CreateActorRequest {
  firstName: string;
  lastName: string;
  image: string | ArrayBuffer | null;
}

export interface CreateDirectorRequest {
  firstName: string;
  lastName: string;
}

export interface CreateReviewRequest {
  moiveID: number | string;
  message: string;
  score: number;
}

export interface CreateReviewLikeRequest {
  targetReviewID: number;
  isLike: boolean;
}

export interface CreateCategoryRequest {
  title: string;
}

export interface LoginRequset {
  email: string;
  password: string;
}

export interface CreateReportRequest {
  targetUserID: number;
  message: string;
}

export interface CreateRoleRequest {
  title: string;
}
