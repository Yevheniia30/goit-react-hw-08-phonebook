import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, current } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [signup.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.isLoggedIn = true;
    },
    [signup.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },

    [login.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },

    [logout.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [logout.fulfilled]: state => {
      // state = initialState;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    [logout.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },

    [current.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [current.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload;
      // state.token = payload.token;
      state.loading = false;
    },
    [current.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export default authSlice.reducer;
