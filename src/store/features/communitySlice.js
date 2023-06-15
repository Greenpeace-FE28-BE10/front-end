import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import communityAPI from '../../apis/community.api';
import userCommunityAPI from '../../apis/userCommunity.api';

const initialState = {
  data: null,
  detail: null,
  members: null,
  aktivitas: null,
  leader: null,
  loading: false,
  loadingMember: false,
  loadingPost: false,
  loadingEdit: false,
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
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const getMembers = createAsyncThunk('getMember', async (id) => {
  try {
    const res = await userCommunityAPI.getAllMembers(id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const joinCommunity = createAsyncThunk('joinMember', async (data) => {
  try {
    const res = await userCommunityAPI.joinMember(data);
    return res;
  } catch (err) {
    console.log(err);
  }
});

export const postActivity = createAsyncThunk('addNewActivity', async (data) => {
  try {
    const res = await userCommunityAPI.addActivities(data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const removeActivity = createAsyncThunk(
  'removeActivity',
  async (data) => {
    try {
      const res = await userCommunityAPI.deleteActivity(data);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);

export const patchActivity = createAsyncThunk(
  'editActivity',
  async ({ idCommunity, idActivity, data }) => {
    try {
      const res = await userCommunityAPI.editActivity(
        idCommunity,
        idActivity,
        data
      );
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const createCommunity = createAsyncThunk(
  'newCommunity',
  async (data) => {
    try {
      const res = await userCommunityAPI.newCommunity(data);
      console.log(res);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

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
      })
      .addCase(getMembers.pending, (state) => {
        state.loadingMember = true;
      })
      .addCase(getMembers.fulfilled, (state, action) => {
        state.loadingMember = false;
        state.members = action.payload.communityMembers;
      })
      .addCase(joinCommunity.pending, (state) => {
        state.loading = true;
        state.loadingMember = true;
      })
      .addCase(joinCommunity.fulfilled, (state) => {
        state.loading = false;
        state.loadingMember = false;
      })
      .addCase(postActivity.pending, (state) => {
        state.loadingPost = true;
      })
      .addCase(postActivity.fulfilled, (state, action) => {
        state.loadingPost = false;
        const newActivity = {
          title: action.payload.title,
          description: action.payload.description,
          date: action.payload.date,
          status: action.payload.status,
        };
        console.log(newActivity);
        state.aktivitas = [...state.aktivitas, newActivity];
      })
      .addCase(removeActivity.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeActivity.fulfilled, (state, action) => {
        state.loading = false;
        const deletedActivity = action.payload;
        state.aktivitas = state.aktivitas.filter(
          (act) => act.id !== deletedActivity
        );
      })
      .addCase(patchActivity.pending, (state) => {
        state.loadingEdit = true;
      })
      .addCase(patchActivity.fulfilled, (state, action) => {
        const updatedAktivitas = action.payload;
        const aktivitasIndex = state.aktivitas.findIndex(
          (aktivitas) => aktivitas.id === updatedAktivitas.id
        );
        if (aktivitasIndex !== -1) {
          state.aktivitas[aktivitasIndex] = updatedAktivitas;
        }
        state.loadingEdit = false;
      })
      .addCase(createCommunity.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCommunity.fulfilled, (state, action) => {
        const createdCommunity = action.payload;
        state.data = [...state.data, createdCommunity];
        state.loading = false;
      });
  },
});

export default communitySlice.reducer;
