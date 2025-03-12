import axios from 'axios';
import { createAPI, getOfferById } from './api';
import { OfferType } from 'src/types';
import 'jest-localstorage-mock';

jest.mock('axios');

describe('API Service', () => {
  let api: ReturnType<typeof createAPI>;

  beforeEach(() => {

    axios.create = jest.fn().mockReturnValue({
      interceptors: {
        request: {
          use: jest.fn(),
        },
      },
      get: jest.fn(),
    });

    api = createAPI();
  });

  it('doit ajouter un token à l\'en-tête de la requête', async () => {
    const token = 'test-token';
    localStorage.setItem('six-cities-token', token);


    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: {},
    });

    await getOfferById(api, '1');


    expect(axios.get).toHaveBeenCalledWith(
      'https://16.design.htmlacademy.pro/six-cities/offers/1',
      expect.objectContaining({
        headers: { 'X-Token': token }
      })
    );
  });

  it('doit récupérer une offre par ID', async () => {
    const mockOffer: OfferType = {
      id: '1',
      title: 'Test Offer',
      type: 'apartment',
      price: 100,
      city: {
        name: 'Paris',
        location: {
          latitude: 48.8566,
          longitude: 2.3522,
          zoom: 12
        }
      },
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 12
      },
      isFavorite: false,
      isPremium: true,
      rating: 4.5,
      description: 'A beautiful place to stay',
      bedrooms: 2,
      goods: ['Wi-Fi', 'TV', 'Air conditioning'],
      host: {
        name: 'John Doe',
        avatarUrl: 'https://example.com/avatar.jpg',
        isPro: true
      },
      images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
      maxAdults: 4
    };


    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: mockOffer,
    });


    const offer = await getOfferById(api, '1');
    console.log('Returned offer:', offer);


    expect(offer).toEqual(mockOffer);
  });
});
