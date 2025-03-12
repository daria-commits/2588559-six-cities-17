import { createSlice } from '@reduxjs/toolkit';
import { SortItem } from '../../const';
import { changeSorting } from '../action';

interface SortingState {
  currentSort: SortItem;
}

const initialState: SortingState = {
  currentSort: SortItem.Popular,
};

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    });
  },
});

export default sortingSlice.reducer;

