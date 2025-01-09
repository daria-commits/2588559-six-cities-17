import { OfferType } from 'src/types';

export const OFFERS_MOCK: OfferType[] = [

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: 'a3d8b4f9-bcdd-46b5-a38f-9bc1a61e7b14',
    title: 'Modern loft in the center of Amsterdam',
    type: 'loft',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: false,
      towels: true,
      heating: true,
      coffeeMachine: false,
      babySeat: false,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: '8a2a73e9-926d-4bba-bd1a-b8e9a5d2d24c',
    title: 'Charming canal-side apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.897,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.374,
      longitude: 4.897,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: false,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: false,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: '7bf7d811-a12b-44c1-95d7-e1c562a37e11',
    title: 'Cozy house in a quiet neighborhood',
    type: 'house',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.368,
        longitude: 4.899,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.368,
      longitude: 4.899,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: false,
      towels: true,
      heating: true,
      coffeeMachine: false,
      babySeat: false,
      kitchen: true,
      dishwasher: true,
      cableTV: false,
      fridge: true,
    },
  },
  {
    id: '2f5cbcc2-bbb0-4231-b245-98750b56b31a',
    title: 'Spacious penthouse with amazing views',
    type: 'penthouse',
    price: 300,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3602,
        longitude: 4.885,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3602,
      longitude: 4.885,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },


  {
    id: '0ef0a121-f56e-72f4-a7fa-h4f895d60h44',
    title: 'Luxurious villa with private pool',
    type: 'villa',
    price: 350,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.3522219,
        zoom: 10,
      },
    },
    location: {
      latitude: 48.890251,
      longitude: 2.492373,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: '82a1cf7b-8f72-4f36-a742-11d8c4c5c88d',
    title: 'Luxurious penthouse in the heart of Paris',
    type: 'penthouse',
    price: 500,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.3522219,
        zoom: 10,
      },
    },
    location: {
      latitude: 48.853987,
      longitude: 2.334297,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: 'af9c89f7-5d30-4870-9e92-89a49a07b85d',
    title: 'Charming studio with Eiffel Tower view',
    type: 'studio',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.3522219,
        zoom: 10,
      },
    },
    location: {
      latitude: 48.858844,
      longitude: 2.29435,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: 'd5f8e5d4-bff3-4288-b387-83a18f5c11d4',
    title: 'Modern apartment with city view',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856614,
        longitude: 2.3522219,
        zoom: 10,
      },
    },
    location: {
      latitude: 48.857654,
      longitude: 2.330455,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: 'a3d8b4f9-bcdd-46b5-a38f-9bc1a61e7b14',
    title: 'Modern loft in the center of Paris',
    type: 'loft',
    price: 150,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.857,
        longitude: 2.35,
        zoom: 10,
      },
    },
    location: {
      latitude: 48.857,
      longitude: 2.35,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
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
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: 'fd7930d9-0512-4b10-83b7-26a7b1c939eb',
    title: 'Charming studio with modern touches',
    type: 'studio',
    price: 120,
    city: {
      name: 'Brussels',
      location: {
        latitude: 41.3987,
        longitude: 2.1968,
        zoom: 11,
      },
    },
    location: {
      latitude: 41.3905,
      longitude: 2.1975,
      zoom: 11,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: '5df0b38f-443f-4c3e-8b50-e6ad2a1d51fc',
    title: 'Modern apartment with city view',
    type: 'apartment',
    price: 140,
    city: {
      name: 'Brussels',
      location: {
        latitude: 41.3987,
        longitude: 2.1968,
        zoom: 11,
      },
    },
    location: {
      latitude: 41.3893,
      longitude: 2.1936,
      zoom: 11,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: 'e34b9e9c-2a23-4b98-8f3e-cfeec3d9acfd',
    title: 'Cozy flat with vintage design',
    type: 'apartment',
    price: 110,
    city: {
      name: 'Brussels',
      location: {
        latitude: 41.3900,
        longitude: 2.1940,
        zoom: 11,
      },
    },
    location: {
      latitude: 41.3888,
      longitude: 2.1912,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: 'c7b2cfaf-55f2-40ed-a982-84ed3e0e9bda',
    title: 'Spacious apartment with balcony view',
    type: 'apartment',
    price: 170,
    city: {
      name: 'Brussels',
      location: {
        latitude: 41.3987,
        longitude: 2.1968,
        zoom: 11,
      },
    },
    location: {
      latitude: 41.3907,
      longitude: 2.1942,
      zoom: 11,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },


  {
    id: '0ef0a121-f56e-72f4-a7fa-h4f895d60h44',
    title: 'Luxurious villa with private pool',
    type: 'villa',
    price: 350,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 7,
      },
    },
    location: {
      latitude: 50.890251,
      longitude: 6.902373,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: '6b3b57db-1d34-4126-a69d-79bb17744d72',
    title: 'Elegant penthouse in central Cologne',
    type: 'penthouse',
    price: 450,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 7,
      },
    },
    location: {
      latitude: 50.9446,
      longitude: 6.9589,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: 'a9e27b6b-c489-4027-8696-c53941f2db0e',
    title: 'Modern apartment with city views',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 7,
      },
    },
    location: {
      latitude: 50.9330,
      longitude: 6.9495,
      zoom: 7,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: 'b7e4bb3c-5a1d-41ab-8291-76e7f5c61674',
    title: 'Spacious townhouse in the heart of Cologne',
    type: 'townhouse',
    price: 220,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 7,
      },
    },
    location: {
      latitude: 50.9300,
      longitude: 6.9400,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: '56c8f643-0cfc-47ea-9c6c-ffdd8a5130ea',
    title: 'Cozy loft in downtown Cologne',
    type: 'loft',
    price: 160,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 7,
      },
    },
    location: {
      latitude: 50.9230,
      longitude: 6.9300,
      zoom: 7,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },

  {
    id: 'b6f824ac-4234-4295-b319-0c548472e207',
    title: 'Luxury penthouse with Rhine river view',
    type: 'penthouse',
    price: 350,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 7,
      },
    },
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: '30d9fb6f-d12b-4e5a-8778-18c3bda0629a',
    title: 'Spacious apartment in the city center',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 7,
      },
    },
    location: {
      latitude: 51.2290,
      longitude: 6.7748,
      zoom: 7,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
      babySeat: true,
    },
  },
  {
    id: 'f27b1075-68f5-4027-b7b0-c5cc1bb5e5f4',
    title: 'Charming studio with modern design',
    type: 'studio',
    price: 140,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 7,
      },
    },
    location: {
      latitude: 51.2321,
      longitude: 6.7589,
      zoom: 7,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
      babySeat: true,
    },
  },
  {
    id: '4d927ef4-e93d-442b-9b1f-6b3b2e430df4',
    title: 'Cozy flat near Königsallee',
    type: 'apartment',
    price: 160,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 7,
      },
    },
    location: {
      latitude: 51.2299,
      longitude: 6.7755,
      zoom: 7,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
      babySeat: true,
    },
  },
  {
    id: '2a94b727-5e5e-4505-aad0-6e7550cb347d',
    title: 'Spacious townhouse with private garden',
    type: 'townhouse',
    price: 250,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.2277,
        longitude: 6.7735,
        zoom: 7,
      },
    },
    location: {
      latitude: 51.2280,
      longitude: 6.7731,
      zoom: 7,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      babySeat: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
    },
  },
  {
    id: '1a927ef4-e93d-442b-9b1f-6b3b2e430df4',
    title: 'Stylish studio in Hamburg',
    type: 'studio',
    price: 120,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 10,
      },
    },
    location: {
      latitude: 53.5547,
      longitude: 9.9893,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/studio-01.jpg',
    features: {
      wifi: true,
      washingMachine: false,
      towels: true,
      heating: true,
      coffeeMachine: true,
      kitchen: true,
      dishwasher: false,
      cableTV: true,
      fridge: true,
      babySeat: false,
    },
  },
  {
    id: '2b927ef4-e93d-442b-9b1f-6b3b2e430df4',
    title: 'Spacious flat in Hamburg',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 10,
      },
    },
    location: {
      latitude: 53.5560,
      longitude: 9.9900,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/studio-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: false,
      kitchen: true,
      dishwasher: true,
      cableTV: false,
      fridge: true,
      babySeat: true,
    },
  },
  {
    id: '3c927ef4-e93d-442b-9b1f-6b3b2e430df4',
    title: 'Modern loft in Hamburg',
    type: 'loft',
    price: 180,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 10,
      },
    },
    location: {
      latitude: 53.5580,
      longitude: 9.9850,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: 'img/studio-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: false,
      heating: true,
      coffeeMachine: true,
      kitchen: true,
      dishwasher: false,
      cableTV: true,
      fridge: true,
      babySeat: false,
    },
  },
  {
    id: '4d927ef4-e94d-442b-9b1f-6b3b2e430df4',
    title: 'Cozy house in Hamburg',
    type: 'house',
    price: 250,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 10,
      },
    },
    location: {
      latitude: 53.5600,
      longitude: 9.9800,
      zoom: 10,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: 'img/studio-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
      babySeat: true,
    },
  },
  {
    id: '5e927ef4-e95d-442b-9b1f-6b3b2e430df4',
    title: 'Charming penthouse in Hamburg',
    type: 'penthouse',
    price: 300,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.9937,
        zoom: 10,
      },
    },
    location: {
      latitude: 53.5620,
      longitude: 9.9780,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: true,
    rating: 5.0,
    previewImage: 'img/studio-01.jpg',
    features: {
      wifi: true,
      washingMachine: true,
      towels: true,
      heating: true,
      coffeeMachine: true,
      kitchen: true,
      dishwasher: true,
      cableTV: true,
      fridge: true,
      babySeat: true,
    },
  },
];
