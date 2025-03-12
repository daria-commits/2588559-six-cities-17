import { RootState } from '..';

export const selectCurrentSort = (state: Pick<RootState, 'sorting'>) => state.sorting.currentSort;
