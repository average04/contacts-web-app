import { createSlice } from "@reduxjs/toolkit";

import { getContacts, createContacts } from "./contactApiSlice";

const initialState = {
  //{id, name, numbers istarred}
  contacts: [],
  isLoading: true,
  isCreating: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContact: (state, action) => {
      state.contacts = action.payload;
    },
  },
  extraReducers: {
    [getContacts.pending]: (state) => {
      state.isLoading = true;
    },
    [getContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [getContacts.rejected]: (state) => {
      state.isLoading = false;
    },

    [createContacts.pending]: (state) => {
      state.isCreating = true;
    },
    [createContacts.fulfilled]: (state, action) => {
      state.isCreating = false;
    },
    [createContacts.rejected]: (state) => {
      state.isCreating = false;
    },
  },
});

export const { setContact } = contactSlice.actions;

export default contactSlice.reducer;
