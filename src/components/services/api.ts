import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { OfferType } from 'src/types';


const BASE_URL = 'https://16.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });


  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return api;
};

export const getOfferById = async (api: AxiosInstance, offerId: string): Promise<OfferType> => {
  const response = await api.get<OfferType>(`/offers/${offerId}`);
  return response.data;
};
