import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from 'src/const';
import { OfferType } from 'src/types';

export const fetchOffers = createAsyncThunk<OfferType[], void, { extra: AxiosInstance }>(
  'offers/fetchOffers',
  async (_, { extra: api }) => {

    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  }
  //export const fetchOfferById = createAsyncThunk<OfferType, string, { extra: AxiosInstance }>(
  //'offers/fetchOfferById',
  //async (id: string, { extra: api }) => {
  // const { data } = await api.getOfferById(id);  // Appel à la méthode créée dans `createAPI.ts`
  // return data;

);
