import axiosInstance from '../configs/axiosInstance';

const userCommunityAPI = {
  async addActivities(data) {
    try {
      const res = await axiosInstance.post('api/v2/communities/activity', data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default userCommunityAPI;
