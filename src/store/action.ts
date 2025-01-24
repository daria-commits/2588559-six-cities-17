import { createAction } from '@reduxjs/toolkit';
import { SortItem } from 'src/const';
import { OfferType } from 'src/types';

export const onCityChange = createAction<string>('app/onCityChange');

export const loadOffers = createAction<OfferType[]>('data/loadOffers');

export const changeSorting = createAction<SortItem>('app/changeSorting');
