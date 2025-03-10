
import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { changeAuthorizationStatus, setUserAuth, logoutUser } from '../action';

export type AuthStatusType = (typeof AuthStatus)[keyof typeof AuthStatus];

export interface AuthState {
   authorizationStatus: AuthStatusType;
   userEmail: string | null;
   token: string | null;
}

const initialState: AuthState = {
  authorizationStatus: AuthStatus.NoAuth,
  userEmail: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeAuthorizationStatus, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setUserAuth, (state, action) => {
        console.log('setUserAuth payload:', action.payload);
        state.authorizationStatus = AuthStatus.Auth;
        state.userEmail = action.payload.email;
        state.token = action.payload.token;
        localStorage.setItem('userEmail', action.payload.email);
      })
      .addCase(logoutUser, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
        state.userEmail = null;
        state.token = null;
        localStorage.removeItem('userEmail');
      });
  },
});

export default authSlice.reducer;
