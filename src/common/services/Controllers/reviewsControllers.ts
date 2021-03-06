import { CreateReviewLikeRequest, CreateReviewRequest } from '../postSchemas';
import { Review } from '../reponseInterface/review.interface';
import { get, post } from '../RestClient';

export default function reviewsController() {
  return {
    postReviews: (data: CreateReviewRequest) =>
      post<CreateReviewRequest, Review>('reviews', data),
    getReviews: () => get('reviews'),
    getReviewsId: (id: number) => get(`reviews/${id}`),
    postReviewLike: (data: CreateReviewLikeRequest) => post('reviews/like', data),
  };
}
