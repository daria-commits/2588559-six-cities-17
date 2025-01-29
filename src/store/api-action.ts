import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from 'src/const';
import { OfferType } from 'src/types';

// Action pour récupérer toutes les offres
export const fetchOffers = createAsyncThunk<OfferType[], void, { extra: AxiosInstance }>(
  'offers/fetchOffers',
  async (_, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  }
);
export const fetchOfferById = createAsyncThunk<OfferType, string, { extra: AxiosInstance }>(
  'offers/fetchOfferById',
  async (offerId: string, { extra: api}) => {
    console.log(`Запрашиваем offer по URL: /offers/${offerId}`);
    const response = await api.get<OfferType>(`/offers/${offerId}`);
    return response.data;
  }
);

