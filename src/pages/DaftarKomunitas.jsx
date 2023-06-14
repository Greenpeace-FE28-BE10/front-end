import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { RiDeleteBin2Fill, RiEditBoxFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoaderData from '../components/LoaderData';
import EditActivities from '../components/modals/EditActivities';
import { getCommunityById } from '../store/features/communitySlice';

const DaftarKomunitas = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommunityById(id));
  }, [dispatch]);

  const isLoading = useSelector((state) => state.community.loading);
  const { detail, aktivitas, leader } = useSelector((state) => state.community);
  const userAuth = JSON.parse(localStorage.getItem('user'));
  console.log(userAuth);

  const [modalEdit, setModalEdit] = useState(false);
  const handleOpenModal = () => {
    setModalEdit(!modalEdit);
  };

  const handleCloseModal = () => {
    setModalEdit(false);
  };

  return (
    <>
      {isLoading ? (
        <div className='sm:py-44 sm:px-[120px]'>
          <LoaderData fill='#52C41A' />
        </div>
      ) : (
        <>
          <section className='w-full px-5 sm:px-[120px] pt-24 sm:py-44'>
            <div className='flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-12'>
              <div className='sm:w-1/2 flex flex-col gap-2 sm:gap-2'>
                <div className='space-y-1'>
                  <h2 className='text-[32px] sm:text-[56px] font-semibold'>
                    {detail?.name}
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
                      {detail?.location}
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-5 sm:gap-8'>
                  <p className='text-[16px] sm:text-[18px] font-light'>
                    {detail?.description}
                  </p>
                  <button className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/3'>
                    Gabung Sekarang
                  </button>
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
            {aktivitas?.length <= 0 ? (
              <p className='bg-white text-center py-4 rounded-md sm:hidden'>
                Aktivitas Kosong
              </p>
            ) : (
              aktivitas?.map((list, index) => (
                <div
                  key={index}
                  className='grid grid-cols-1 gap-2 sm:hidden bg-white px-3 py-3 rounded-md'
                >
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className='text-[18px] font-semibold'>
                        {list.title}
                      </h3>
                      <div className='flex gap-4'>
                        <p>{list.date}</p>
                        <p>{list.status}</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                      <p>Edit</p>
                      <p>Delete</p>
                    </div>
                  </div>
                  <p>{list.description}</p>
                </div>
              ))
            )}
            <div className='hidden sm:block w-2/3 h-full mx-auto'>
              {aktivitas?.length <= 0 ? (
                <p className='w-1/2 mx-auto text-[24px] bg-white text-center py-4 rounded-md'>
                  Aktivitas Kosong
                </p>
              ) : (
                <table className='w-full bg-white rounded-lg overflow-hidden sm:shadow-lg'>
                  <thead className='text-white text-center'>
                    <tr className='bg-[#52C41A] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'>
                      <th className='p-3'>Aktivitas</th>
                      <th className='p-3'>Deskripsi</th>
                      <th className='p-3'>Tanggal</th>
                      <th className='p-3'>Status</th>
                      {userAuth.id === leader?.id ? (
                        <th className='p-3'>Actions</th>
                      ) : null}
                    </tr>
                  </thead>
                  <tbody className='text-left'>
                    {aktivitas?.map((list, index) => (
                      <tr
                        key={index}
                        className='flex flex-col flex-nowrap border-b-2 border-slate-200 sm:table-row mb-2 sm:mb-0'
                      >
                        <td className='p-3'>{list.title}</td>
                        <td className='p-3'>{list.description}</td>
                        <td className='p-3'>{list.date}</td>
                        <td className='p-3'>{list.status}</td>
                        {userAuth.id === leader.id ? (
                          <td className='h-full flex items-center justify-center gap-5 my-auto p-3'>
                            <IconContext.Provider
                              value={{ size: '2em', color: '#0042ED' }}
                            >
                              <div
                                onClick={handleOpenModal}
                                className='cursor-pointer'
                              >
                                <RiEditBoxFill />
                              </div>
                            </IconContext.Provider>
                            <IconContext.Provider
                              value={{ size: '2em', color: '#FF3034' }}
                            >
                              <div className='cursor-pointer'>
                                <RiDeleteBin2Fill />
                              </div>
                            </IconContext.Provider>
                          </td>
                        ) : null}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <EditActivities isOpen={modalEdit} isClose={handleCloseModal} />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DaftarKomunitas;
