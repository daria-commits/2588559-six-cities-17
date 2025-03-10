import { RootState } from '..';
import { selectCurrentSort } from './selectors';
import { SortItem } from 'src/const';

describe('sorting selectors', () => {
  const mockState: RootState = {
    sorting: {
      currentSort: SortItem.Popular,
    },

    auth: {
      authorizationStatus: 'NoAuth',
      userEmail: null,
      token: null,
    },
    city: {
      activeCity: 'Paris',
    },
    offers: {
      offers: [],
      fetchOffersStatus: 'idle',
      error: null,
      currentOffer: null,
      token: null,
    },
    offerById: {
      currentOffer: null,
      fetchOfferStatus: 'idle',
      error: null,
    },
  };

  it('devrait retourner la valeur actuelle du tri', () => {
    const currentSort = selectCurrentSort(mockState);
    expect(currentSort).toBe(SortItem.Popular);
  });
});
