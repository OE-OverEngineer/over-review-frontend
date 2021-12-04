import { CreateDirectorRequest } from '../postSchemas';
import { Director } from '../reponseInterface/director.interface';
import { get, post } from '../RestClient';

export default function directorsController() {
  return {
    postDirectors: (data: CreateDirectorRequest) => post('directors', data),
    getDirectors: () => get<Director[]>('directors'),
  };
}
