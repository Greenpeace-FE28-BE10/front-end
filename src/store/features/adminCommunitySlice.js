import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminCommunityAPI from '../../apis/adminCommunity.api';

const initialState = {
  data: null,
  detail: null,
  aktivitas: null,
  leader: null,
  loading: false,
};

export const adminAllCommunity = createAsyncThunk('fetch', async () => {
  try {
    const res = await adminCommunityAPI.fetchCommunity();
    return res.data.communityData;
  } catch (err) {
    console.log(err);
  }
});

export const adminCommunityById = createAsyncThunk('fetchById', async (id) => {
  try {
    const res = await adminCommunityAPI.fetchCommunityById(id);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

const adminCommunitySlice = createSlice({
  name: 'adminCommunity',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(adminAllCommunity.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminAllCommunity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(adminCommunityById.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminCommunityById.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload.communityDetail;
        state.aktivitas = action.payload.communityActivities;
        state.leader = action.payload.communityLeader;
      });
  },
});

export default adminCommunitySlice.reducer;
