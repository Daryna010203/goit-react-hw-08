import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'userFilters',
  initialState: { filter: '' },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
