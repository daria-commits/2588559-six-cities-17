import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from 'src/const';
import { OfferType } from 'src/types';
import { AppDispatch, RootState } from '.';

type ThunkArgs = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
export const fetchOffers = createAsyncThunk<OfferType[], void, ThunkArgs>(
  'offers/fetchOffers',
  async (_, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  }
);
export const fetchOfferById = createAsyncThunk<OfferType, string, ThunkArgs>(
  'offers/fetchOfferById',
  async (offerId: string, { extra: api}) => {
    console.log(`Запрашиваем offer по URL: /offers/${offerId}`);
    const response = await api.get<OfferType>(`/offers/${offerId}`);
    return response.data;
  }
);

