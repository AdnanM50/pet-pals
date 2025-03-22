
// endpoints.ts
import { get, post, put, patch, del } from './methods';

// Define endpoint functions
export const fetchUserList = (params: Record<string, any> = {}) => get('/user/get', params);
// export const fetchServiceById = (params: Record<string, any>) => get('/service/:id', params);
// export const fetchServicesByStatus = (params: Record<string, any> = {}) => get('/service', params);
// export const createUser = (data: any) => post('/users', {}, data);
// export const updateUser = (params: Record<string, any>, data: any) => put('/users/:id', params, data);
// export const deleteUser = (params: Record<string, any>) => del('/users/:id', params);