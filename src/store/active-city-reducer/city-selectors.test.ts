import { getActiveCity } from './selectors';
import { RootState } from '..';
import { SortItem } from 'src/const';
describe('getActiveCity selector', () => {
  it('should return the active city from the state', () => {
    const mockState: RootState = {
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
        token: null
      },
      sorting: {
        currentSort: SortItem.Popular,
      },
      offerById: {
        currentOffer: null,
        fetchOfferStatus: 'idle',
        error: null,
      },
    };

    const result = getActiveCity(mockState);

    expect(result).toBe('Paris');
  });
});

