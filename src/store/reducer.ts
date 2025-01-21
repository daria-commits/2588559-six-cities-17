import { createReducer } from '@reduxjs/toolkit';
import { onCityChange, loadOffers } from './action';
import { OfferType } from 'src/types';
import { changeSorting } from './action';
import { SortItem } from 'src/const';
interface State {
  activeCity: string;
  offers: OfferType[];
  currentSort: SortItem;
}

const initialState: State = {
  activeCity: 'Paris',
  offers: [] as OfferType[],
  currentSort: SortItem.Popular
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(onCityChange, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    });
});


//Reducer — это чистая функция, которая принимает текущее состояние и действие (action), а затем возвращает новое состояние. Это ядро Redux, где происходит обновление состояния.