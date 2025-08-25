import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import {
  handlePending,
  handleFulfilled,
  handleRejected,
} from "../helpers/sliceHelper";

// SLICE
const contactsSlice = createSlice({
  name: "contacts",

  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addMatcher((action) => action.type.endsWith(`/pending`), handlePending)
      .addMatcher(
        (action) => action.type.endsWith(`fulfilled`),
        handleFulfilled
      )
      .addMatcher(
        (action) => action.type.endsWith(`/rejected`),
        handleRejected
      );
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
