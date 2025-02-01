

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum SortItem {
    Popular = 'Popular',
    PriceLow = 'Price: low to high',
    PriceHigh = 'Price: high to low',
    Rating = 'Top rated first',
  }

export enum APIRoute {
  Offers = '/offers',
  OfferId = '/offers/:id',
}
export const AppRoutes = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: 'offers/:id'

} as const;

