import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from 'src/const';
import { OfferType } from 'src/types';
import { AppDispatch, RootState } from '.';
import { changeAuthorizationStatus} from './action';
import { AuthStatus } from 'src/const';
import { TLoggerUser } from 'src/const';
import { TAuthInfo } from 'src/const';
import { saveToken } from 'src/components/services/token';
import { dropToken } from 'src/components/services/token';

type ThunkArgs = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
export const checkAuthStatus = createAsyncThunk<void, undefined, ThunkArgs>(
  'user/checkAuthStatus',
  async (_, { dispatch, extra: api }) => {
    try {
      console.log('Checking authentication status...');
      const response = await api.get<TLoggerUser>('/login');
      console.log('Auth check response:', response.data);
      dispatch(changeAuthorizationStatus(AuthStatus.Auth));
    } catch (error) {
      console.error('Auth check failed:', error.response?.data || error.message);
      dispatch(changeAuthorizationStatus(AuthStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<TLoggerUser, TAuthInfo, ThunkArgs>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    try {
      console.log('Attempting login with:', { email, password });
      const { data } = await api.post<TLoggerUser>('/login', { email, password });
      console.log('Login successful, received data:', data);

      saveToken(data.token);
      console.log('Token saved:', data.token);

      dispatch(changeAuthorizationStatus(AuthStatus.Auth));

      return data;
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      dispatch(changeAuthorizationStatus(AuthStatus.NoAuth));
      throw new Error('Login failed');
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkArgs>(
  'user/logout',
  async (_, { dispatch, extra: api }) => {
    try {
      console.log('Logging out...');
      await api.delete('/');
      console.log('Logout successful');

      dropToken();
      console.log('Token removed');

      dispatch(changeAuthorizationStatus(AuthStatus.NoAuth));
    } catch (error) {
      console.error('Logout failed:', error.response?.data || error.message);
    }
  }
);

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
    const response = await api.get<OfferType>(`/offers/${offerId}`);
    return response.data;
  }
);

