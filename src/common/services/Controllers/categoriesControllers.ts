import { CreateCategoryRequest } from '../postSchemas';
import { get, post } from '../RestClient';

export default function categoriesController() {
  return {
    postCategories: (data: CreateCategoryRequest) => post('categories', data),
    getCategories: () => get('categories'),
  };
}
