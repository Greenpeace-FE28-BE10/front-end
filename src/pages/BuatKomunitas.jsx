const BuatKomunitas = () => {
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
            <label htmlFor=''>Kode Pos :</label>
            <input
              type='number'
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
            <label htmlFor=''>Nama Komunitas :</label>
            <input
              type='text'
              placeholder='Masukan nama komunitas'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor=''>Detail Kegiatan :</label>
            <textarea
              placeholder='Detail Kegiatan anda'
              className='border-2 border-gray-400 bg-transparent rounded-md focus:outline-none px-2.5 py-2'
              cols='30'
              rows='10'
            />
          </div>
          <button className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/2 mx-auto'>
            Daftarkan Komunitas
          </button>
        </form>
      </section>
    </>
  );
};

export default BuatKomunitas;
