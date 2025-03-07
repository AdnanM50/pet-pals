import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.backendUrl + 'api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to add the bearer token to private requests
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && config.url && config.url.startsWith('/private')) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const get = async (url:any, config = {}) => {
    try {
        const response = await apiClient.get(url, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const post = async (url:any, data:any, config = {}) => {
    try {
        const response = await apiClient.post(url, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const put = async (url:any, data:any, config = {}) => {
    try {
        const response = await apiClient.put(url, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const patch = async (url:any, data:any, config = {}) => {
    try {
        const response = await apiClient.patch(url, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const del = async (url:any, config = {}) => {
    try {
        const response = await apiClient.delete(url, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};