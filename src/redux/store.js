import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filters/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    userContacts: contactsReducer,
    userFilters: filterReducer,
    auth: authReducer,
  },
});
