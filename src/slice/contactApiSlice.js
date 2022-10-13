import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://localhost:7047";

export const getContacts = createAsyncThunk("get-contact", () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(url + "/contact", requestOptions)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const createContacts = createAsyncThunk("create-contact", (body) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  };
  return fetch(url + "/contact", requestOptions)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});
