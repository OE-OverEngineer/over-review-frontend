import { CreateRepliesRequest } from '../postSchemas';
import { get, post } from '../RestClient';

export default function repliesControllers() {
  return {
    postReplies: (data: CreateRepliesRequest) => post('replies', data),
    getReplies: () => get('replies'),
  };
}
