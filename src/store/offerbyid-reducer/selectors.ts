import { RootState } from '..';

export const selectCurrentOffer = (state: Pick<RootState, 'offerById'>) => state.offerById.currentOffer;
export const selectOfferFetchStatus = (state: Pick<RootState, 'offerById'>) => state.offerById.fetchOfferStatus;
export const selectOfferError = (state:Pick<RootState, 'offerById'>) => state.offerById.error;
