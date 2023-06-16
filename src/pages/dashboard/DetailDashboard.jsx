import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoaderData from '../../components/LoaderData';
import {
  adminCommunityById,
  adminGetMembers,
} from '../../store/features/adminCommunitySlice';

const DetailDashboard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminCommunityById(id));
    dispatch(adminGetMembers(id));
  }, [dispatch]);

  const isLoading = useSelector((state) => state.adminCommunity.loading);
  const { detail, aktivitas, leader, members } = useSelector(
    (state) => state.adminCommunity
  );
  return (
    <>
      {isLoading ? (
        <div className='w-full h-full flex justify-center items-center'>
          <LoaderData fill='#52C41A' />
        </div>
      ) : (
        <>
          <section className='w-full px-8 sm:py-20'>
            <div className='flex flex-col sm:justify-between gap-6 sm:gap-12'>
              <h2 className='text-[32px] text-center leading-tight sm:text-[56px] font-semibold'>
                {detail?.name}
              </h2>
              <div className='flex gap-10'>
                <div className='w-full h-full sm:w-1/2'>
                  <img
                    className='w-full h-full object-cover rounded-xl'
                    src={`${detail?.image}`}
                    alt=''
                  />
                </div>
                <div className='w-3/4 flex flex-col gap-2 sm:gap-2'>
                  <div className='space-y-1'>
                    <div className='flex items-center gap-2 pb-2'>
                      <div className='w-[30px] h-[30px]'>
                        <img
                          className='w-full h-full object-cover'
                          src='https://res.cloudinary.com/dso5ztlee/image/upload/v1685937896/map_vu0r4b.png'
                          alt='loc'
                        />
                      </div>
                      <p className='font-light sm:text-[24px] text-[#8C8C8C]'>
                        {detail?.location} | {members?.length} Berkontribusi
                      </p>
                    </div>
                    <p className='font-semibold sm:text-[20px]'>
                      Leader : {leader?.name}
                    </p>
                  </div>
                  <div className='flex flex-col gap-5 sm:gap-8'>
                    <p className='text-justify text-[16px] sm:text-[18px] font-light'>
                      {detail?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='w-full px-8 pb-20'>
            <h3 className='py-6 text-[20px]'>List Aktivitas Komunitas</h3>
            {aktivitas?.length <= 0 ? (
              <p className='w-1/2 mx-auto text-[24px] bg-white text-center py-4 rounded-md'>
                Aktivitas Kosong
              </p>
            ) : (
              <table className='w-full bg-white rounded-lg overflow-hidden sm:shadow-lg'>
                <thead className='text-white text-left'>
                  <tr className='bg-[#52C41A] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'>
                    <th className='p-3'>Aktivitas</th>
                    <th className='p-3'>Deskripsi</th>
                    <th className='p-3'>Tanggal</th>
                    <th className='p-3'>Status</th>
                  </tr>
                </thead>
                <tbody className='text-left'>
                  {aktivitas?.map((list) => (
                    <tr
                      key={list.id}
                      className='flex flex-col flex-nowrap border-b-2 border-slate-200 sm:table-row mb-2 sm:mb-0'
                    >
                      <td className='p-3'>{list.title}</td>
                      <td className='p-3'>{list.description}</td>
                      <td className='p-3'>{list.date}</td>
                      <td className='p-3'>{list.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default DetailDashboard;
