const DaftarKomunitas = () => {
  const dataKegiatan = [
    { id: 1, kegiatan: 'Kegiatan 1' },
    { id: 2, kegiatan: 'Kegiatan 2' },
    { id: 3, kegiatan: 'Kegiatan 3' },
    { id: 4, kegiatan: 'Kegiatan 4' },
    { id: 5, kegiatan: 'Kegiatan 5' },
  ];

  return (
    <>
      <section className='w-full px-5 sm:px-[120px] pt-24 sm:py-44'>
        <div className='flex flex-col sm:flex-row sm:justify-between gap-6'>
          <div className='flex flex-col gap-6 sm:gap-16'>
            <div className='space-y-1'>
              <h2 className='text-[32px] sm:text-[56px] font-semibold'>
                Hijauin Medan
              </h2>
              <div className='flex gap-2'>
                <div className='w-[28px] h-[28px]'>
                  <img
                    className='w-full h-full object-cover'
                    src='https://res.cloudinary.com/dso5ztlee/image/upload/v1685937896/map_vu0r4b.png'
                    alt='loc'
                  />
                </div>
                <p className='font-light sm:text-[20px] text-[#8C8C8C]'>
                  Medan dan sekitarnya
                </p>
              </div>
            </div>
            <div className='space-y-2'>
              <h3 className='text-[24px] sm:text-[38px] font-semibold'>
                Detail Kegiatan
              </h3>
              <ul>
                {dataKegiatan.map((item, index) => (
                  <li key={index} className='list-decimal ml-6 sm:text-[20px]'>
                    {item.kegiatan}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='w-full h-full sm:w-1/2'>
            <img
              className='w-full h-full object-cover rounded-xl'
              src='https://res.cloudinary.com/dso5ztlee/image/upload/v1685951237/banner-detail-komunitas_zks7vt.jpg'
              alt=''
            />
          </div>
        </div>
      </section>
      <section className='w-full h-full space-y-4 sm:space-y-16 px-5 py-8 sm:py-28 mt-8 sm:mt-0 bg-cover bg-no-repeat bg-center bg-[url(https://res.cloudinary.com/dso5ztlee/image/upload/v1685952214/bg-form_bjvvj4.jpg)]'>
        <h3 className='text-center text-white text-[20px] sm:text-[32px] sm:w-1/2 mx-auto'>
          Bergabunglah dengan komunitas Hijauin dan ambil aksi nyata untuk
          memerangi permasalahan iklim!
        </h3>
        <form className='w-full sm:w-1/3 mx-auto flex flex-col gap-6 bg-white rounded-md px-3 sm:px-10 py-2 sm:py-8'>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Nama Lengkap Anda :</label>
            <input
              type='text'
              placeholder='Masukkan nama anda'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Nomor Handphone :</label>
            <input
              type='text'
              placeholder='Masukan nomor handphone anda'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Alamat :</label>
            <input
              type='text'
              placeholder='Masukan alamat lengkap nama anda'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Jenis Kelamin :</label>
            <select className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-1.5'>
              <option value=''>Pria</option>
              <option value=''>Wanita</option>
            </select>
          </div>
          <button className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/2 mx-auto'>
            Gabung Sekarang
          </button>
        </form>
      </section>
    </>
  );
};

export default DaftarKomunitas;
