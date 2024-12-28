export interface OfferType {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
      name: string;
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
      };
    };
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    features: {
      wifi: boolean;
      washingMachine: boolean;
      towels: boolean;
      heating: boolean;
      coffeeMachine: boolean;
      babySeat: boolean;
      kitchen: boolean;
      dishwasher: boolean;
      cableTV: boolean;
      fridge: boolean;
    };
  }
