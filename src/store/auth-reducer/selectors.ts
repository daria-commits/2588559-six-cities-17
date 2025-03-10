import { RootState } from '..';
import './authSlice';

export const getAuthStatus = (state: RootState) => state.auth.authorizationStatus;
export const getUserEmail = (state: RootState) => state.auth.userEmail;
export const getAuthToken = (state: RootState) => state.auth.token;

