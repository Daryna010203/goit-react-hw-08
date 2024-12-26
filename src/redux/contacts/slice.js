import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logout } from '../auth/operations';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from '../contacts/operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'userContacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        state => {
          state.loading = false;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
