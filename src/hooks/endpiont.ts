// endpoints.ts
import { get, post, put, patch, del } from './methods';

// Define endpoint functions
export const fetchUserList = () => get('/user/get');
export const createUser = (data: any) => post('/users', data);
export const updateUser = (id: string, data: any) => put(`/users/${id}`, data);
export const deleteUser = (id: string) => del(`/users/${id}`);