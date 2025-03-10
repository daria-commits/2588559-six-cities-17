import { RootState } from '..';


export const selectOffers = (state: RootState) => state.offers.offers;

export const selectOffersStatus = (state: RootState) => state.offers.fetchOffersStatus;


export const selectOffersError = (state: RootState) => state.offers.error;

export const selectCurrentOffer = (state: RootState) => state.offers.currentOffer;
