import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../src/const';
import { OfferType } from 'src/types';
import { AppDispatch, RootState } from '.';
import { changeAuthorizationStatus, setUserAuth} from './action';
import { AuthStatus, TLoggerUser, TAuthInfo } from '../../src/const';
import { saveToken } from '../../src/components/services/token';
import { dropToken } from '../../src/components/services/token';


type ThunkArgs = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}
export const checkAuthStatus = createAsyncThunk<void, undefined, ThunkArgs>(
  'user/checkAuthStatus',
  async (_, { dispatch, extra: api }) => {
    try {

      const response = await api.get<TLoggerUser>('/login');
      dispatch(changeAuthorizationStatus(AuthStatus.Auth));
      dispatch(setUserAuth(response.data));
    } catch (error) {

      dispatch(changeAuthorizationStatus(AuthStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<TLoggerUser, TAuthInfo, ThunkArgs>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<TLoggerUser>(
        '/login',
        { email, password }

      );

      saveToken(data.token);


      dispatch(changeAuthorizationStatus(AuthStatus.Auth));
      dispatch(setUserAuth(data));

      return data;
    } catch (error) {

      dispatch(changeAuthorizationStatus(AuthStatus.NoAuth));
      throw new Error('Login failed');
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkArgs>(
  'user/logout',
  async (_, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(changeAuthorizationStatus(AuthStatus.NoAuth));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('Logout failed:', error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error('Logout failed:', error.message);
      } else {
        console.error('Logout failed:', error);
      }
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
    console.log(`Fetching offer from API: /offers/${offerId}`);
    const response = await api.get<OfferType>(`/offers/${offerId}`);
    return response.data;
  }
);

