import axiosInstance from '../configs/axiosInstance';

const adminCommunityAPI = {
  async fetchCommunity() {
    try {
      const res = await axiosInstance.get('/api/v1/communities');
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  async fetchCommunityById(id) {
    try {
      const res = await axiosInstance.get(`/api/v1/communities/${id}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default adminCommunityAPI;
