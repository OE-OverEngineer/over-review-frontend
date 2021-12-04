export interface UsersProfileResponse {
  avatar: string;
  banned: boolean;
  createdAt: Date;
  dateOfBirth: Date;
  displayName: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  lastName: string;
  role: string | null;
  updatedAt: Date;
}
