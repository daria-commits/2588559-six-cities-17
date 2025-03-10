import { RootState } from '..';

export const selectCurrentOffer = (state: RootState) => state.offerById.currentOffer;
export const selectOfferFetchStatus = (state: RootState) => state.offerById.fetchOfferStatus;
export const selectOfferError = (state: RootState) => state.offerById.error;
