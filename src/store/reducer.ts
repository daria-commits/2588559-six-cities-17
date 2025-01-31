import { createReducer } from '@reduxjs/toolkit';
import { onCityChange, changeSorting } from './action';
import { SortItem } from 'src/const';
import { fetchOffers, fetchOfferById } from './api-action';
import { OfferType } from 'src/types';

interface State {
  activeCity: string;
  offers: OfferType[];
  currentSort: SortItem;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
//'idle'	Не выполняется ни один запрос, состояние "по умолчанию"	После инициализации приложения, до первого запроса
//'pending'	Запрос выполняется (идет загрузка данных)	Когда начинается fetchOffers.pending или fetchOfferById.pending
//'fulfilled'	Запрос успешно выполнен, данные получены	Когда сервер вернул успешный ответ (200 OK), данные загружены
//'rejected'	Запрос завершился ошибкой (например, сервер недоступен)	Когда сервер вернул ошибку (404, 500 и т. д.), или произошел сбой сети
  error: string | null;
  currentOffer: OfferType | null;
}

const initialState: State = {
  activeCity: 'Paris',
  offers: [],
  currentSort: SortItem.Popular,
  status: 'idle',
  error: null,
  currentOffer: null,
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
      state.offers = action.payload; // Charge les nouvelles offres
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
    });
});
