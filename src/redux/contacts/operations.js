import axios from "axios";
import { handleAsyncThunk } from "../helpers/operationsHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  (_, thunkAPI) => {
    return handleAsyncThunk(axios.get("/contacts"), thunkAPI);
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  (newContact, thunkAPI) => {
    return handleAsyncThunk(axios.post("/contacts", newContact), thunkAPI);
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  (contactsId, thunkAPI) => {
    return handleAsyncThunk(axios.delete(`/contacts/${contactsId}`), thunkAPI);
  }
);
