export const endpoints = {
    users: {
        list: { url: 'user/get', method: 'GET' },
        create: { url: '/users', method: 'POST' },
        update: { url: '/users/:id', method: 'PUT' },
        delete: { url: '/users/:id', method: 'DELETE' },
    },
    // posts: {
    //     list: { url: '/posts', method: 'GET' },
    //     create: { url: '/posts', method: 'POST' },
    //     update: { url: '/posts/:id', method: 'PATCH' },
    //     delete: { url: '/posts/:id', method: 'DELETE' },
    // },
    // Add more endpoints as needed
};