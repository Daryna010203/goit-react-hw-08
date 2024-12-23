import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import filtersSlice from './filtersSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    userContacts: contactsSlice,
    userFilters: filtersSlice,
    auth: authReducer,
  },
});
