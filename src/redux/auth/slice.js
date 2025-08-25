import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

// Yardımcı Reducer Fonksiyonları

const handleAuthFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshPending = (state) => {
  state.isRefreshing = true;
};

const handleRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshRejected = (state) => {
  state.isRefreshing = false;
};

// SLICE
const authSlice = createSlice({
  name: `auth`,
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleAuthFulfilled)
      .addCase(logIn.fulfilled, handleAuthFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.rejected, handleRefreshRejected);
  },
});

export const authReducer = authSlice.reducer;
