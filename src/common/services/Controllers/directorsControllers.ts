import { CreateDirectorRequest } from '../postSchemas';
import { get, post } from '../RestClient';

export default function directorsController() {
  return {
    postDirectors: (data: CreateDirectorRequest) => post('directors', data),
    getDirectors: () => get('directors'),
  };
}
