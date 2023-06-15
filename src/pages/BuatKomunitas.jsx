import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCommunity } from '../store/features/communitySlice';

const BuatKomunitas = () => {
  const userAuth = JSON.parse(localStorage.getItem('user'));
  const formNewCommunity = useRef(null);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.community.loading);
  const [newCommunity, setNewCommunity] = useState({
    leader_id: userAuth.id,
    name: '',
    postal_code: '',
    location: '',
    image: '',
    description: '',
  });

  const handleChangeForm = (e) => {
    setNewCommunity({ ...newCommunity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newCommunity);
    dispatch(createCommunity(newCommunity));
    formNewCommunity.current.reset();
  };

  return (
    <>
      <section className='w-full px-5 sm:px-[120px] pt-24 sm:pb-32 sm:pt-48'>
        <div className='space-y-8 sm:text-center'>
          <h1 className='text-[40px] sm:text-[60px] font-semibold leading-tight'>
            Komunitas <span className='text-[#52C41A]'>Hijauin</span>
          </h1>
          <p className='text-[18px] sm:w-2/3 mx-auto'>
            Sebagai wadah untuk komunitas peduli lingkungan di Indonesia,
            terdapat banyak komunitas yang sudah bergabung dalam Hijauin dari
            seluruh kota di Indonesia. Kegiatan yang dilakukan komunitas ini
            berbasis lingkungan dan memanfaatkan dana yang dikelola oleh
            pengurus pusat Hijauin.
          </p>
        </div>
      </section>
      <section className='w-full h-full space-y-4 sm:space-y-16 px-5 py-8 sm:py-28 mt-8 sm:mt-0 bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dso5ztlee/image/upload/v1685952214/bg-form_bjvvj4.jpg)]'>
        <h3 className='text-center text-white text-[20px] sm:text-[32px]'>
          Daftarkan Komunitas Hijauin didaerah kamu sekarang!
        </h3>
        <form
          ref={formNewCommunity}
          onChange={handleChangeForm}
          className='w-full sm:w-1/3 mx-auto flex flex-col gap-6 bg-white rounded-md px-3 sm:px-10 py-2 sm:py-8'
        >
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Nama Komunitas :</label>
            <input
              name='name'
              type='text'
              placeholder='Masukkan nama komunitas'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Kode Pos :</label>
            <input
              name='postal_code'
              type='number'
              placeholder='Masukan nomor handphone anda'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Alamat :</label>
            <input
              name='location'
              type='text'
              placeholder='Masukan alamat lengkap anda'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Link Gambar Komunitas :</label>
            <input
              name='image'
              type='text'
              placeholder='Masukan link'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Deskripsi Kegiatan :</label>
            <textarea
              name='description'
              placeholder='Deskripsi Kegiatan anda'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
              cols='30'
              rows='10'
            />
          </div>
          {isLoading ? (
            <button
              disabled
              onClick={handleSubmit}
              className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/2 mx-auto'
            >
              Loading
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/2 mx-auto'
            >
              Daftarkan Komunitas
            </button>
          )}
        </form>
      </section>
    </>
  );
};

export default BuatKomunitas;
