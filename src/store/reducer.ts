import { createReducer } from '@reduxjs/toolkit';
import { onCityChange, changeSorting, changeAuthorizationStatus, setUserAuth, logoutUser } from './action';
import { SortItem } from 'src/const';
import { fetchOffers, fetchOfferById } from './api-action';
import { OfferType } from 'src/types';
import { AuthStatus } from 'src/const';

export type AuthStatusType = (typeof AuthStatus)[keyof typeof AuthStatus];

interface State {
  activeCity: string;
  offers: OfferType[];
  currentSort: SortItem;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
  currentOffer: OfferType | null;
  authorizationStatus: AuthStatusType;
  userEmail: string | null;
  token: string | null;
}

const initialState: State = {
  activeCity: 'Paris',
  offers: [],
  currentSort: SortItem.Popular,
  status: 'idle',
  error: null,
  currentOffer: null,
  authorizationStatus: AuthStatus.NoAuth,
  userEmail: null,
  token: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(onCityChange, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message || 'Une erreur est survenue';
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(fetchOfferById.pending, (state) => {
      state.status = 'pending';
      state.error = null;
      state.currentOffer = null;
    })
    .addCase(fetchOfferById.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.currentOffer = action.payload;
    })
    .addCase(fetchOfferById.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message || 'Une erreur est survenue lors de la récupération de l\'offre';
      state.currentOffer = null;
    })
    .addCase(changeAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserAuth, (state, action) => {
      console.log('setUserAuth payload:', action.payload);
      state.authorizationStatus = AuthStatus.Auth;
      state.userEmail = action.payload.email;
      state.token = action.payload.token;
      localStorage.setItem('userEmail', action.payload.email);
    })
    .addCase(logoutUser, (state) => {
      state.authorizationStatus = AuthStatus.NoAuth;
      state.userEmail = null;
      state.token = null;
      localStorage.removeItem('userEmail');
    });
});
