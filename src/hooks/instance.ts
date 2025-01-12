import axios, { AxiosInstance } from "axios";

let axiosInstance: AxiosInstance | null = null;

export const initializeAxiosInstance = (token?: string): AxiosInstance => {
  // console.log("🚀 ~ initializeAxiosInstance ~ token:", token)
  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: process.env.backendUrl,
    });

    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
  }

  return axiosInstance;
};

export const getAxiosInstance = (): AxiosInstance => {
  if (!axiosInstance) {
    throw new Error(
      "Axios instance has not been initialized. Call initializeAxiosInstance first."
    );
  }
  return axiosInstance;
};
