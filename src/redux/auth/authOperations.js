import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, token } from 'services/api';

export const signup = createAsyncThunk('contacts/signup', async user => {
  const { data } = await instance.post('/users/signup', user);
  token.set(data.token);
  return data;
});

export const login = createAsyncThunk('contacts/login', async user => {
  const { data } = await instance.post('/users/login', user);
  token.set(data.token);
  return data;
});

export const logout = createAsyncThunk('contacts/logout', async () => {
  const { data } = await instance.post('/users/logout');
  token.unset();
  return data;
});

export const current = createAsyncThunk(
  'contacts/current',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const currentToken = state.auth.token;
    console.log('currentToken', currentToken);
    if (!currentToken) {
      return thunkApi.rejectWithValue();
    }
    token.set(currentToken);
    try {
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      // return error;
    }
  }
);
