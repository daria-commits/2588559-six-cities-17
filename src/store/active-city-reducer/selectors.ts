import { RootState } from '..';

export const getActiveCity = (state: Pick<RootState, 'city'>) => state.city.activeCity;
