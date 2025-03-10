import { createSlice } from '@reduxjs/toolkit';
import { onCityChange } from '../action'; // Vérifie bien le chemin

interface CityState {
  activeCity: string;
}

const initialState: CityState = {
  activeCity: 'Paris',
};

export const cityReducer = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onCityChange, (state, action) => {
      state.activeCity = action.payload;
    });
  },
});

export default cityReducer.reducer;

