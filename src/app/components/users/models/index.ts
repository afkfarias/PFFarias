export type UserRole = 'ADMIN' | 'USER';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: Date;
}

export interface CreateUserPayload {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  role: string | null;
  createdAt: Date | null;
}
