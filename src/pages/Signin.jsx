import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authHelpers from '../utils/authHelpers';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      return setErrorLogin('Semua field tidak boleh kosong');
    } else {
      setIsLoading(true);
      const success = await authHelpers.login(email, password);
      const userRole = JSON.parse(localStorage.getItem('user'));
      if (success) {
        setIsLoading(false);
        if (userRole.role === 'admin') {
          return navigate('/dashboard');
        }
        navigate('/');
      } else {
        setIsLoading(false);
        setErrorLogin('Authentikasi Gagal');
      }
    }
  };

  return (
    <section className='min-h-screen min-w-screen bg-[url(https://res.cloudinary.com/dso5ztlee/image/upload/v1685952214/bg-form_bjvvj4.jpg)] bg-cover bg-no-repeat bg-center'>
      <div className='absolute w-full sm:w-2/3 h-2/3 sm:h-screen bottom-0 sm:right-0 bg-white rounded-t-lg sm:rounded-l-lg'>
        <div className='w-full h-full flex flex-col gap-2 sm:gap-4 justify-center items-center py-4 px-5 sm:px-[320px]'>
          <h1 className='text-[#52C41A] font-semibold text-[32px] sm:text-[48px]'>
            Hijauin.
          </h1>
          <p className='font-light text-[20px] sm:text-[24px]'>Login Now</p>
          <form className='w-full flex flex-col gap-4 sm:gap-6 mt-4'>
            <input
              className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
              type='text'
              placeholder='Email anda'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
              type='password'
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className='text-[20px] font-semibold text-[#e63946]'>
              {errorLogin}
            </p>
            {isLoading ? (
              <button
                disabled
                to='/'
                className='bg-[#6c757d] text-white mt-4 sm:mt-8 sm:w-1/3 sm:mx-auto font-semibold py-2.5 px-3.5 text-center rounded-md'
              >
                Loading
              </button>
            ) : (
              <button
                onClick={handleLogin}
                to='/'
                className='bg-[#52C41A] text-white mt-4 sm:mt-8 sm:w-1/3 sm:mx-auto font-semibold py-2.5 px-3.5 text-center rounded-md'
              >
                Login
              </button>
            )}
          </form>
          <div className='text-center mt-2 flex flex-col gap-1.5'>
            <p className='text-[18px] text-[#8C8C8C] font-light'>
              Don't have an acount?
            </p>
            <Link className='text-[#52C41A]' to='/register'>
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
