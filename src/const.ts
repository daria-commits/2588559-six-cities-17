

export const URL_MARKER_DEFAULT =
  '/public/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/public/img/pin-active.svg';

export enum SortItem {
    Popular = 'Popular',
    PriceLow = 'Price: low to high',
    PriceHigh = 'Price: high to low',
    Rating = 'Top rated first',
  }


export const APIRoute = {
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers'
};

export const AuthStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Login: 'Login',
} as const;

export interface TLoggerUser {
  id: string;
  email: string;
  token: string;
}

export type TAuthInfo = {
  email: string;
  password: string;
};

