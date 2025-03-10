import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../src/store/auth-reducer/authSlice';
import cityReducer from '../src/store/active-city-reducer/cityReducer';
import offersReducer from './store/offer-reducer/offersSlice';
import sortingReducer from './store/sorting-reducer/sortingSlice';
import offerByIdReducer from './store/offerbyid-reducer/offerByIdSlice';
export const rootReducer = combineReducers({
  auth: authReducer,
  city: cityReducer,
  offers: offersReducer,
  sorting: sortingReducer,
  offerById: offerByIdReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
