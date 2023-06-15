import axiosInstance from '../configs/axiosInstance';

const register = async (data) => {
  try {
    const res = await axiosInstance.post('/api/register', data);
    console.log(res);
    return res;
  } catch (error) {
    console.error('Register error:', error);
    return false;
  }
};

const login = async (email, password) => {
  try {
    const res = await axiosInstance.post('/api/login', {
      email,
      password,
    });
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.message));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export default { register, login, logout };
