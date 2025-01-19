import { createAction } from '@reduxjs/toolkit';
import { OfferType } from 'src/types';

export const onCityChange = createAction<string>('app/onCityChange');
export const loadOffers = createAction<OfferType[]>('data/loadOffers');

