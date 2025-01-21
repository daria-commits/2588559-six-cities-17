// helper.ts

import { OfferType } from 'src/types';
import { SortItem } from 'src/const';


export const sortBy = (offers: OfferType[], sortType: SortItem): OfferType[] => {
  switch (sortType) {
    case SortItem.PriceLow:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortItem.PriceHigh:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortItem.Rating:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    case SortItem.Popular:
      return offers.slice();
    default:
      return offers;
  }
};
