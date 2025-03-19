'use server';
export const get = async (url: string, config = {}) => {
    try {
        const response = await fetch(`${process.env.backendUrl}api${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            ...config,
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

export const post = async (url: string, data: any, config = {}) => {
    try {
        const response = await fetch(`${process.env.backendUrl}api${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            ...config,
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

export const put = async (url: string, data: any, config = {}) => {
    try {
        const response = await fetch(`${process.env.backendUrl}api${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            ...config,
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

export const patch = async (url: string, data: any, config = {}) => {
    try {
        const response = await fetch(`${process.env.backendUrl}api${url}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            ...config,
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

export const del = async (url: string, config = {}) => {
    try {
        const response = await fetch(`${process.env.backendUrl}api${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            ...config,
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};