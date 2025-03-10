import { RootState } from '..';

export const selectCurrentSort = (state: RootState) => state.sorting.currentSort;
