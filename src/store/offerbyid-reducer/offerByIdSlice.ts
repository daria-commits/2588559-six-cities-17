import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferById } from '../api-action'; // Assurez-vous que cette action est bien définie
import { OfferType } from 'src/types';

interface OfferByIdState {
  currentOffer: OfferType | null;
  fetchOfferStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: OfferByIdState = {
  currentOffer: null,
  fetchOfferStatus: 'idle',
  error: null,
};

export const offerByIdSlice = createSlice({
  name: 'offerById',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferById.pending, (state) => {
        state.fetchOfferStatus = 'pending';
        state.error = null;
        state.currentOffer = null;
      })
      .addCase(fetchOfferById.fulfilled, (state, action) => {
        state.fetchOfferStatus = 'fulfilled';
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferById.rejected, (state, action) => {
        state.fetchOfferStatus = 'rejected';
        state.error = action.error.message || 'Erreur lors du chargement de l\'offre';
        state.currentOffer = null;
      });
  },
});

export default offerByIdSlice.reducer;
