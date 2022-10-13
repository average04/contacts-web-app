import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import contactReducer from "../slice/contactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

setupListeners(store.dispatch);
