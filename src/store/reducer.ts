import { createReducer } from '@reduxjs/toolkit';
import { onCityChange, changeSorting } from './action';
import { SortItem } from 'src/const';
import { fetchOffers } from './api-action'; // Assurez-vous que `fetchOffers` est bien importé.
import { OfferType } from 'src/types';

interface State {
  activeCity: string;
  offers: OfferType[];
  currentSort: SortItem;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: State = {
  activeCity: 'Paris',
  offers: [],
  currentSort: SortItem.Popular,
  status: 'idle',
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    // Met à jour la ville active
    .addCase(onCityChange, (state, action) => {
      state.activeCity = action.payload;
    })

    // Fetch Offers - Pending
    .addCase(fetchOffers.pending, (state) => {
      state.status = 'pending';
      state.error = null; // Réinitialise l'erreur s'il y en avait
    })

    // Fetch Offers - Fulfilled
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.offers = action.payload; // Charge les nouvelles offres
    })

    // Fetch Offers - Rejected
    .addCase(fetchOffers.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message || 'Une erreur est survenue';
    })

    // Change Sorting
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload; // Met à jour le type de tri
    });
  //.addCase(fetchOfferById.rejected, (state, action) => {
  // state.status = 'rejected';
  // state.error = action.error.message || 'eroor';
  //});
});
