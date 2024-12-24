import { OfferType } from 'src/types';

export const OFFERS_MOCK: OfferType[] = [


  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': 'a3d8b4f9-bcdd-46b5-a38f-9bc1a61e7b14',
    'title': 'Modern loft in the center of Amsterdam',
    'type': 'loft',
    'price': 150,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3676,
        'longitude': 4.9041,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.3676,
      'longitude': 4.9041,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.7,
    'previewImage': 'https://url-to-image/amsterdam-loft.png'
  },
  {
    'id': '8a2a73e9-926d-4bba-bd1a-b8e9a5d2d24c',
    'title': 'Charming canal-side apartment',
    'type': 'apartment',
    'price': 180,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.374,
        'longitude': 4.897,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.374,
      'longitude': 4.897,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.5,
    'previewImage': 'https://url-to-image/amsterdam-canal.png'
  },
  {
    'id': '7bf7d811-a12b-44c1-95d7-e1c562a37e11',
    'title': 'Cozy house in a quiet neighborhood',
    'type': 'house',
    'price': 200,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.856614,
        'longitude': 2.3522219,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 48.860611,
      'longitude': 2.337644,
      'zoom': 10
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.8,
    'previewImage': 'https://url-to-image/paris-house.png'
  },
  {
    'id': 'd5f8e5d4-bff3-4288-b387-83a18f5c11d4',
    'title': 'Modern apartment with city view',
    'type': 'apartment',
    'price': 150,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.856614,
        'longitude': 2.3522219,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 48.857654,
      'longitude': 2.330455,
      'zoom': 10
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5,
    'previewImage': 'https://url-to-image/paris-apartment.png'
  },
  {
    'id': '82a1cf7b-8f72-4f36-a742-11d8c4c5c88d',
    'title': 'Luxurious penthouse in the heart of Paris',
    'type': 'penthouse',
    'price': 500,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.856614,
        'longitude': 2.3522219,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 48.853987,
      'longitude': 2.334297,
      'zoom': 10
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 5.0,
    'previewImage': 'https://url-to-image/paris-penthouse.png'
  },
  {
    'id': 'af9c89f7-5d30-4870-9e92-89a49a07b85d',
    'title': 'Charming studio with Eiffel Tower view',
    'type': 'studio',
    'price': 120,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.856614,
        'longitude': 2.3522219,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 48.858844,
      'longitude': 2.294350,
      'zoom': 10
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6,
    'previewImage': 'https://url-to-image/paris-studio.png'
  },
  {
    id: '8cf8e911-d34c-50e2-85e8-f2d673b48f22',
    title: 'Modern apartment in the city center',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.5200066,
        longitude: 13.404954,
        zoom: 9,
      },
    },
    location: {
      latitude: 52.5170365,
      longitude: 13.3888599,
      zoom: 9,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    previewImage: 'https://url-to-image/berlin-apartment.png',
  },
  {
    id: '9df9f011-e45d-61f3-96f9-g3e784c59g33',
    title: 'Charming studio near the beach',
    type: 'studio',
    price: 90,
    city: {
      name: 'Brussels',
      location: {
        latitude: 41.3850639,
        longitude: 2.1734035,
        zoom: 11,
      },
    },
    location: {
      latitude: 41.378395,
      longitude: 2.192014,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.9,
    previewImage: 'https://url-to-image/barcelona-studio.png',
  },
  {
    id: '0ef0a121-f56e-72f4-a7fa-h4f895d60h44',
    title: 'Luxurious villa with private pool',
    type: 'villa',
    price: 350,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 41.9027835,
        longitude: 12.4963655,
        zoom: 7,
      },
    },
    location: {
      latitude: 41.890251,
      longitude: 12.492373,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://url-to-image/rome-villa.png',
  },
  {
    id: '0ef0a121-f56e-72f4-a7fa-h4f895d60h44',
    title: 'Luxurious villa with private pool',
    type: 'villa',
    price: 350,
    city: {
      name: 'Cologne',
      location: {
        latitude: 41.9027835,
        longitude: 12.4963655,
        zoom: 7,
      },
    },
    location: {
      latitude: 41.890251,
      longitude: 12.492373,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://url-to-image/rome-villa.png',
  },
];
