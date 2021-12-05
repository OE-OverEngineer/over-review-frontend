import { CreateCommentRequest } from '../postSchemas';
import { get, post } from '../RestClient';

export default function commentsController() {
  return {
    postComments: (data: CreateCommentRequest) => post('comments', data),
    getComments: () => get('comments'),
  };
}
