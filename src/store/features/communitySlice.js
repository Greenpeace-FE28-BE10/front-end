import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import communityAPI from '../../apis/community.api';

const initialState = {
  data: null,
  detail: null,
  aktivitas: null,
  leader: null,
  loading: false,
};

export const getAllCommunity = createAsyncThunk('fetch', async () => {
  try {
    const res = await communityAPI.fetchCommunity();
    return res.data.communityData;
  } catch (err) {
    console.log(err);
  }
});

export const getCommunityById = createAsyncThunk('fetchById', async (id) => {
  try {
    const res = await communityAPI.fetchCommunityById(id);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

const communitySlice = createSlice({
  name: 'community',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllCommunity.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCommunity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCommunityById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCommunityById.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload.communityDetail;
        state.aktivitas = action.payload.communityActivities;
        state.leader = action.payload.communityLeader;
      });
  },
});

export default communitySlice.reducer;
