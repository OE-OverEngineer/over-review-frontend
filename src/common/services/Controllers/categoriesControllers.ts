import { CreateCategoryRequest } from '../postSchemas';
import { Category } from '../reponseInterface/category.interface';
import { get, post } from '../RestClient';

export default function categoriesController() {
  return {
    postCategories: (data: CreateCategoryRequest) => post('categories', data),
    getCategories: () => get<Category[]>('categories'),
  };
}
