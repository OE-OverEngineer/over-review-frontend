import { CreateActorRequest } from '../postSchemas';
import { Actor } from '../reponseInterface/actor.interface';
import { get, post } from '../RestClient';

export default function actorsController() {
  return {
    postActors: (data: CreateActorRequest) =>
      post<CreateActorRequest, Actor>('actors', data),
    getActors: () => get('actors'),
  };
}
