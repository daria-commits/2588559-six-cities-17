import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://16.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) =>{
      const token = getToken();

      if(token && config.headers){
        config.headers['X-token'] = token;
      }
      return config;
    }
  );
  //api.getOfferById = (offerId: string) => {
  // return api.get(`/offers/${offerId}`);
  //};
  return api;
};
