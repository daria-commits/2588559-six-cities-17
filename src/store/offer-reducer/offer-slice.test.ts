import offersReducer from './offersSlice';
import { fetchOffers } from '../api-action';
import { OfferType } from '../../types';

describe('offersSlice reducer', () => {
  const initialState = {
    offers: [],
    fetchOffersStatus: 'idle' as 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: null,
    currentOffer: null,
    token: null,
  };

  it('should return the initial state when an unknown action is provided', () => {
    expect(offersReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchOffers.pending', () => {
    const action = { type: fetchOffers.pending.type };
    const state = offersReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      fetchOffersStatus: 'pending',
      error: null,
    });
  });

  it('should handle fetchOffers.fulfilled', () => {
    const mockOffers: OfferType[] = [
      {
        id: '1',
        title: 'Offer 1',
        type: 'apartment',
        price: 100,
        city: {
          name: 'Paris',
          location: { latitude: 48.8566, longitude: 2.3522, zoom: 10 },
        },
        location: { latitude: 48.8566, longitude: 2.3522, zoom: 10 },
        isFavorite: false,
        isPremium: true,
        rating: 4.5,
        description: 'A beautiful apartment in Paris',
        bedrooms: 2,
        goods: ['Wi-Fi', 'Kitchen'],
        host: {
          name: 'John Doe',
          avatarUrl: 'https://example.com/avatar.jpg',
          isPro: true,
        },
        images: ['https://example.com/image1.jpg'],
        maxAdults: 2,
      },
      {
        id: '2',
        title: 'Offer 2',
        type: 'house',
        price: 200,
        city: {
          name: 'Berlin',
          location: { latitude: 52.52, longitude: 13.405, zoom: 10 },
        },
        location: { latitude: 52.52, longitude: 13.405, zoom: 10 },
        isFavorite: true,
        isPremium: false,
        rating: 4.8,
        description: 'A cozy house in Berlin',
        bedrooms: 3,
        goods: ['Parking', 'Washer'],
        host: {
          name: 'Alice Smith',
          avatarUrl: 'https://example.com/avatar2.jpg',
          isPro: false,
        },
        images: ['https://example.com/image2.jpg'],
        maxAdults: 4,
      },
    ];

    const action = { type: fetchOffers.fulfilled.type, payload: mockOffers };
    const state = offersReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      fetchOffersStatus: 'fulfilled',
      offers: mockOffers,
    });
  });

  it('should handle fetchOffers.rejected', () => {
    const errorMessage = 'Erreur lors du chargement des offres';
    const action = { type: fetchOffers.rejected.type, error: { message: errorMessage } };
    const state = offersReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      fetchOffersStatus: 'rejected',
      error: errorMessage,
    });
  });
});
