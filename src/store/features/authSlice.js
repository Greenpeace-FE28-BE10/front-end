import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from '../../apis/auth.api';

const initialState = {
  username: null,
  token: null,
  loading: false,
};

export const login = createAsyncThunk('login', async (email, password) => {
  try {
    const res = await authAPI.login(email, password);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
