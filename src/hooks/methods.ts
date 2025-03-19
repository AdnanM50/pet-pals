'use server';
// methods.ts
// methods.ts
export const get = async (
    url: string, // The base URL (e.g., '/service/:id')
    params: Record<string, any> = {}, // Parameters (can be path or query parameters)
    config = {} // Additional fetch config (e.g., headers)
) => {
    try {
        // Replace path parameters in the URL
        let fullUrl = url;
        for (const [key, value] of Object.entries(params)) {
            if (fullUrl.includes(`:${key}`)) {
                fullUrl = fullUrl.replace(`:${key}`, value);
                delete params[key]; // Remove the path parameter from the query parameters
            }
        }

        // Convert remaining parameters to a URL-encoded string (query parameters)
        const queryString = new URLSearchParams(params).toString();
        if (queryString) {
            fullUrl += `?${queryString}`;
        }

        // Make the API request
        const response = await fetch(`${process.env.backendUrl}api${fullUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            ...config,
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return response.json();
    } catch (error) {
        throw error;
    }
};

// Other methods (post, put, patch, del) can be updated similarly
export const post = async (
    url: string,
    pathParams: Record<string, any> = {},
    queryParams: Record<string, any> = {},
    data: any,
    config = {}
) => {
    try {
        // Replace path parameters in the URL
        let fullUrl = url;
        for (const [key, value] of Object.entries(pathParams)) {
            fullUrl = fullUrl.replace(`:${key}`, value);
        }

        // Convert query parameters to a URL-encoded string
        const queryString = new URLSearchParams(queryParams).toString();
        if (queryString) {
            fullUrl += `?${queryString}`;
        }

        // Make the API request
        const response = await fetch(`${process.env.backendUrl}api${fullUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            ...config,
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return response.json();
    } catch (error) {
        throw error;
    }
};

export const put = async (
    url: string,
    pathParams: Record<string, any> = {},
    queryParams: Record<string, any> = {},
    data: any,
    config = {}
) => {
    try {
        // Replace path parameters in the URL
        let fullUrl = url;
        for (const [key, value] of Object.entries(pathParams)) {
            fullUrl = fullUrl.replace(`:${key}`, value);
        }

        // Convert query parameters to a URL-encoded string
        const queryString = new URLSearchParams(queryParams).toString();
        if (queryString) {
            fullUrl += `?${queryString}`;
        }

        // Make the API request
        const response = await fetch(`${process.env.backendUrl}api${fullUrl}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            ...config,
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return response.json();
    } catch (error) {
        throw error;
    }
};

export const patch = async (
    url: string,
    pathParams: Record<string, any> = {},
    queryParams: Record<string, any> = {},
    data: any,
    config = {}
) => {
    try {
        // Replace path parameters in the URL
        let fullUrl = url;
        for (const [key, value] of Object.entries(pathParams)) {
            fullUrl = fullUrl.replace(`:${key}`, value);
        }

        // Convert query parameters to a URL-encoded string
        const queryString = new URLSearchParams(queryParams).toString();
        if (queryString) {
            fullUrl += `?${queryString}`;
        }

        // Make the API request
        const response = await fetch(`${process.env.backendUrl}api${fullUrl}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            ...config,
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return response.json();
    } catch (error) {
        throw error;
    }
};

export const del = async (
    url: string,
    pathParams: Record<string, any> = {},
    queryParams: Record<string, any> = {},
    config = {}
) => {
    try {
        // Replace path parameters in the URL
        let fullUrl = url;
        for (const [key, value] of Object.entries(pathParams)) {
            fullUrl = fullUrl.replace(`:${key}`, value);
        }

        // Convert query parameters to a URL-encoded string
        const queryString = new URLSearchParams(queryParams).toString();
        if (queryString) {
            fullUrl += `?${queryString}`;
        }

        // Make the API request
        const response = await fetch(`${process.env.backendUrl}api${fullUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            ...config,
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return response.json();
    } catch (error) {
        throw error;
    }
};