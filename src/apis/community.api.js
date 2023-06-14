import axiosInstance from '../configs/axiosInstance';

const communityAPI = {
  async fetchCommunity() {
    try {
      const res = await axiosInstance.get('/api/communities');
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  async fetchCommunityById(id) {
    try {
      const res = await axiosInstance.get(`/api/communities/${id}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default communityAPI;
