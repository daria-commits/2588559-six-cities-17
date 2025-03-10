import { SortItem } from 'src/const';
import { RootState } from '..';
import { getAuthStatus, getUserEmail, getAuthToken } from './selectors';

describe('selectors', () => {

  const mockState: RootState = {
    auth: {
      authorizationStatus: 'Auth',
      userEmail: 'user@example.com',
      token: 'mockToken',
    },
    city: {
      activeCity: '',
    },
    offers: {
      offers: [],
      fetchOffersStatus: 'idle',
      error: null,
      currentOffer: null,
      token: null,
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

  it('devrait retourner le statut de l\'authentification', () => {
    const authStatus = getAuthStatus(mockState);
    expect(authStatus).toBe('Auth');
  });

  it('devrait retourner l\'email de l\'utilisateur', () => {
    const userEmail = getUserEmail(mockState);
    expect(userEmail).toBe('user@example.com');
  });

  it('devrait retourner le token d\'authentification', () => {
    const authToken = getAuthToken(mockState);
    expect(authToken).toBe('mockToken');
  });
});
