import { get, post, put, patch, del } from './methods';
// export const endpoints = {
//     users: {
//         list: { url: 'user/get', method: 'GET' },
//         create: { url: '/users', method: 'POST' },
//         update: { url: '/users/:id', method: 'PUT' },
//         delete: { url: '/users/:id', method: 'DELETE' },
//     },
//     // posts: {
//     //     list: { url: '/posts', method: 'GET' },
//     //     create: { url: '/posts', method: 'POST' },
//     //     update: { url: '/posts/:id', method: 'PATCH' },
//     //     delete: { url: '/posts/:id', method: 'DELETE' },
//     // },
//     // Add more endpoints as needed
// };



export const fetchUserList = () => get('/user/get');
export const createUser = (data: any) => post('/users', data);
export const updateUser = (id: string, data: any) => put(`/users/${id}`, data);
export const deleteUser = (id: string) => del(`/users/${id}`);

export const fetchPostList = () => get('/posts');
export const createPost = (data: any) => post('/posts', data);
export const updatePost = (id: string, data: any) => patch(`/posts/${id}`, data);
export const deletePost = (id: string) => del(`/posts/${id}`);