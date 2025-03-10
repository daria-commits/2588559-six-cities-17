import { selectCurrentOffer, selectOfferFetchStatus, selectOfferError } from './selectors';
import { RootState } from '..';
import { SortItem } from 'src/const';

describe('offerById selectors', () => {
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
      token: null,
    },
    sorting: {
      currentSort: SortItem.Popular,
    },
    offerById: {
      currentOffer: {
        id: '1',
        title: 'Superbe appartement',
        type: 'apartment',
        price: 120,
        city: {
          name: 'Paris',
          location: { latitude: 48.8566, longitude: 2.3522, zoom: 12 },
        },
        location: { latitude: 48.8566, longitude: 2.3522, zoom: 12 },
        isFavorite: false,
        isPremium: true,
        rating: 4.5,
        description: 'Un bel appartement au cœur de Paris',
        bedrooms: 2,
        goods: ['Wi-Fi', 'Cuisine équipée'],
        host: { name: 'John Doe', avatarUrl: 'url', isPro: true },
        images: ['image1.jpg', 'image2.jpg'],
        maxAdults: 4,
      },
      fetchOfferStatus: 'fulfilled',
      error: null,
    },
  };

  it('devrait sélectionner l\'offre actuelle', () => {
    const currentOffer = selectCurrentOffer(mockState);
    expect(currentOffer).toEqual(mockState.offerById.currentOffer);
  });

  it('devrait sélectionner le statut de la requête', () => {
    const fetchStatus = selectOfferFetchStatus(mockState);
    expect(fetchStatus).toBe('fulfilled');
  });

  it('devrait sélectionner l\'erreur', () => {
    const error = selectOfferError(mockState);
    expect(error).toBeNull();
  });
});
