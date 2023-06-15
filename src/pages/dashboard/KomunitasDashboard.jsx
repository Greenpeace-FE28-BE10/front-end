import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { RiEditBoxFill } from 'react-icons/ri';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import LoaderData from '../../components/LoaderData';
import EditCommunity from '../../components/modals/EditCommunity';
import { adminAllCommunity } from '../../store/features/adminCommunitySlice';

const KomunitasDashboard = () => {
  const [modalEdit, setModalEdit] = useState(false);
  const handleOpenModal = () => {
    setModalEdit(!modalEdit);
  };

  const handleCloseModal = () => {
    setModalEdit(false);
  };

  const isLoading = useSelector((state) => state.adminCommunity.loading);
  const dataCommunity = useSelector((state) => state.adminCommunity.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminAllCommunity());
  }, [dispatch]);

  console.log(dataCommunity);

  return (
    <div className='w-full px-14 py-10 space-y-14'>
      <h1 className='text-[32px] font-semibold'>List Komunitas Hijauin</h1>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <input
            className='px-3.5 py-2.5 w-1/2 border-2 border-slate-800 rounded-md '
            placeholder='Cari komunitas ...'
            type='text'
          />
          <button className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md'>
            Buat Komunitas
          </button>
        </div>
        {isLoading ? (
          <LoaderData fill='#52C41A' />
        ) : (
          <table className='w-full bg-white rounded-lg overflow-hidden sm:shadow-lg'>
            <thead className='text-white text-left'>
              <tr className='bg-[#223A26] text-[20px] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'>
                <th className='p-3'>Nama Komunitas</th>
                <th className='p-3'>Lokasi Komunitas</th>
                <th className='p-3'>Leader Komunitas</th>
                <th className='p-3 text-center'>Actions</th>
              </tr>
            </thead>
            <tbody className='w-full text-left'>
              {dataCommunity?.map((community) => (
                <tr
                  key={community.id}
                  className='align-top text-[18px] border-b-2 mb-2 sm:mb-0'
                >
                  <td className='border-slate-400 p-3'>{community.name}</td>
                  <td className='border-slate-400 p-3'>{community.location}</td>
                  <td className='border-slate-400 p-3'>
                    {community.leader_name}
                  </td>
                  <td className='flex items-center justify-center gap-5 p-3'>
                    <IconContext.Provider
                      value={{ size: '2em', color: '#0042ED' }}
                    >
                      <div onClick={handleOpenModal} className='cursor-pointer'>
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
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <EditCommunity isOpen={modalEdit} isClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default KomunitasDashboard;
