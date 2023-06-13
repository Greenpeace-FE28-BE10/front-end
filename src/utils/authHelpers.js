import axiosInstance from '../configs/axiosInstance';

const register = async (name, email, password, address) => {
  try {
    const res = await axiosInstance.post('/api/register', {
      name,
      email,
      password,
      address,
    });
    console.log(res);
    return res;
    //   if (res.data.token) {
    //     localStorage.setItem('token', res.data.token);
    //     localStorage.setItem('user', JSON.stringify(res.data.message));
    //     return true;
    //   }
    //   return false;
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
    console.log(res);
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
