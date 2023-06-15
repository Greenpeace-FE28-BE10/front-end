import axiosInstance from '../configs/axiosInstance';

const userCommunityAPI = {
  async getAllMembers(id) {
    try {
      const res = await axiosInstance.get(
        `/api/v2/communities/${id}/community-members`
      );
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  async joinMember(data) {
    const id = data.communities_id;
    try {
      const res = await axiosInstance.post(
        `/api/v2/communities/${id}/community-members`,
        data
      );
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  async addActivities(data) {
    try {
      const res = await axiosInstance.post('api/v2/communities/activity', data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  //   async deleteActivity(id)
};

export default userCommunityAPI;
