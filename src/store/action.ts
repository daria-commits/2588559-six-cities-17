import { createAction } from '@reduxjs/toolkit';
import { SortItem, AuthStatus } from 'src/const';


export type AuthStatusType = (typeof AuthStatus)[keyof typeof AuthStatus];

export const onCityChange = createAction<string>('app/onCityChange');

export const changeSorting = createAction<SortItem>('app/changeSorting');
export const changeAuthorizationStatus = createAction<AuthStatusType>('user/changeAuthorizationStatus');
export const setUserAuth = createAction<{ email: string; token: string }>('setUserAuth');
export const logoutUser = createAction('logoutUser');
