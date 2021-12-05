import { CreateRoleRequest } from '../postSchemas';
import { get, post } from '../RestClient';

export default function rolesController() {
  return {
    postRoles: (data: CreateRoleRequest) => post('roles', data),
    getRoles: () => get('roles'),
  };
}
