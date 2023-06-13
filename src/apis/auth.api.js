import axiosInstance from '../configs/axiosInstance';

const authAPI = {
  async login(email, password) {
    try {
      const res = await axiosInstance.post('/api/login', { email, password });
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default authAPI;
