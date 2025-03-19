// endpoints.ts
// import { get, post, put, patch, del } from './methods';

// // Define endpoint functions
// export const fetchUserList = () => get('/user/get');
// export const createUser = (data: any) => post('/users', data);
// export const updateUser = (id: string, data: any) => put(`/users/${id}`, data);
// export const deleteUser = (id: string) => del(`/users/${id}`);


// endpoints.ts
// import { get, post, put, patch, del } from './methods';

// // Define endpoint functions
// export const fetchUserList = (queryParams: Record<string, any> = {}) => get('/user/get', {}, queryParams);
// export const fetchServiceById = (id: string) => get('/service/:id', { id });
// export const fetchServiceByIdQuery = (id: string) => get('/service', {}, { _id: id });
// export const fetchServicesByStatus = (status: string) => get('/service', {}, { status });
// export const createUser = (data: any) => post('/users', {}, {}, data);
// export const updateUser = (id: string, data: any) => put(`/users/:id`, { id }, {}, data);
// export const deleteUser = (id: string) => del(`/users/:id`, { id });
// endpoints.ts
import { get, post, put, patch, del } from './methods';

// Define endpoint functions
export const fetchUserList = (params: Record<string, any> = {}) => get('/user/get', params);
export const fetchServiceById = (params: Record<string, any>) => get('/service/:id', params);
export const fetchServicesByStatus = (params: Record<string, any> = {}) => get('/service', params);
// export const createUser = (data: any) => post('/users', {}, data);
// export const updateUser = (params: Record<string, any>, data: any) => put('/users/:id', params, data);
export const deleteUser = (params: Record<string, any>) => del('/users/:id', params);