import { createReducer } from '@reduxjs/toolkit';
import { onCityChange, loadOffers } from './action';
import { OfferType } from 'src/types';

const initialState = {
  activeCity: 'Paris',
  offers: [] as OfferType[],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(onCityChange, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});


//Reducer — это чистая функция, которая принимает текущее состояние и действие (action), а затем возвращает новое состояние. Это ядро Redux, где происходит обновление состояния.