import axios from "../axios";
import { handleAsyncThunk } from "../helpers/thunkHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
    return handleAsyncThunk(axios.delete(`/contacts/${contactId}`), thunkAPI);
  }
);
