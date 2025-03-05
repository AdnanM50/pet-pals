import axios, { AxiosInstance } from "axios";

let axiosInstance: AxiosInstance | null = null;

export const initializeAxiosInstance = (token?: string): AxiosInstance => {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: process.env.backendUrl,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
    });

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
    );
  }
  return axiosInstance;
};

export const getAxiosInstance = (): AxiosInstance => {
  if (!axiosInstance) {
    throw new Error("Axios instance not initialized. Call initializeAxiosInstance first.");
  }
  return axiosInstance;
};
