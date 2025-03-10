import { createSlice } from '@reduxjs/toolkit';
import { fetchOffers} from '../api-action';
import { OfferType } from 'src/types';

interface OffersState {
  offers: OfferType[];
  fetchOffersStatus: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
  currentOffer: OfferType | null;
  token: string | null;
}

const initialState: OffersState = {
  offers: [],
  fetchOffersStatus: 'idle',
  error: null,
  currentOffer: null,
  token: null,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.fetchOffersStatus = 'pending';
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.fetchOffersStatus = 'fulfilled';
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.fetchOffersStatus = 'rejected';
        state.error = action.error.message || 'Erreur lors du chargement des offres';
      });
  },
});

export default offersSlice.reducer;
