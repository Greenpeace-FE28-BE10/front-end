import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authHelpers from '../utils/authHelpers';

const Register = () => {
  const [form, setForm] = useState({
    namaUser: '',
    email: '',
    password: '',
    address: '',
  });
  const [errRegister, setErrRegister] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (
      form.email === '' ||
      form.password === '' ||
      form.namaUser === '' ||
      form.address === ''
    ) {
      return setErrRegister('Semua field tidak boleh kosong');
    } else {
      setIsLoading(true);
      const success = await authHelpers.register({
        name: form.namaUser,
        address: form.address,
        email: form.email,
        password: form.password,
      });
      if (success) {
        setIsLoading(false);
        navigate('/signin');
      } else {
        setIsLoading(false);
        setErrRegister('Register Gagal');
      }
    }
  };

  return (
    <section className='min-h-screen min-w-screen bg-[url(https://res.cloudinary.com/dso5ztlee/image/upload/v1685952214/bg-form_bjvvj4.jpg)] bg-cover bg-no-repeat bg-center'>
      <div className='absolute w-full sm:w-2/3 h-3/4 sm:h-screen bottom-0 sm:right-0 bg-white rounded-t-lg sm:rounded-l-lg'>
        <div className='w-full h-full flex flex-col gap-2 sm:gap-4 justify-center items-center py-4 px-5 sm:px-[320px]'>
          <h1 className='text-[#52C41A] font-semibold text-[32px] sm:text-[48px]'>
            Hijauin.
          </h1>
          <p className='font-light text-[20px] sm:text-[24px]'>
            Daftar Sekarang
          </p>
          <form
            onChange={handleChangeForm}
            className='w-full flex flex-col gap-4 sm:gap-6 mt-4'
          >
            <input
              name='namaUser'
              className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
              type='text'
              placeholder='Nama anda'
            />
            <input
              name='address'
              className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
              type='text'
              placeholder='Alamat anda'
            />
            <input
              name='email'
              className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
              type='text'
              placeholder='Email anda'
            />
            <input
              name='password'
              className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
              type='password'
              placeholder='Password'
            />
            <p>{errRegister}</p>
            {isLoading ? (
              <button
                disabled
                to='/'
                className='bg-[#6c757d] text-white mt-4 sm:mt-8 sm:w-1/3 sm:mx-auto font-semibold py-2.5 px-3.5 text-center rounded-md'
              >
                Loading
              </button>
            ) : (
              <Link
                onClick={handleSubmit}
                to='/'
                className='bg-[#52C41A] text-white mt-4 sm:mt-8 sm:w-1/3 sm:mx-auto font-semibold py-2.5 px-3.5 text-center rounded-md'
              >
                Register
              </Link>
            )}
          </form>
          <div className='text-center mt-2 flex flex-col gap-1.5'>
            <p className='text-[18px] text-[#8C8C8C] font-light'>
              Have an acount?
            </p>
            <Link className='text-[#52C41A]' to='/signin'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
