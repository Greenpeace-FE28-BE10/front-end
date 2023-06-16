import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { RiDeleteBin2Fill, RiEditBoxFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import LoaderData from '../components/LoaderData';
import AddActivities from '../components/modals/AddActivities';
import EditActivities from '../components/modals/EditActivities';
import {
  getCommunityById,
  getMembers,
  joinCommunity,
  removeActivity,
} from '../store/features/communitySlice';
import { findMemberId } from '../utils/memberHelpers';

const DaftarKomunitas = () => {
  const [joinCommunityStatus, setJoinCommunityStatus] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommunityById(id));
    dispatch(getMembers(id));
    if (joinCommunityStatus === 'success') {
      dispatch(getMembers(id));
    }
  }, [joinCommunityStatus, dispatch, id]);

  const isLoading = useSelector((state) => state.community.loading);
  const isLoadingMember = useSelector((state) => state.community.loadingMember);
  const isLoadingDelete = useSelector((state) => state.community.loadingDelete);

  const { detail, aktivitas, leader, members } = useSelector(
    (state) => state.community
  );
  const userAuth = JSON.parse(localStorage.getItem('user'));
  const dataJoin = {
    users_id: userAuth?.id,
    communities_id: id,
  };

  const [modalEdit, setModalEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [modalAdd, setModalAdd] = useState(false);
  const handleOpenModal = (id) => {
    setSelectedId(id);
    setModalEdit(true);
  };

  const handleOpenModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleCloseModal = () => {
    setModalEdit(false);
    handleReload();
  };

  const handleCloseModalAdd = () => {
    setModalAdd(false);
    handleReload();
  };

  const handleJoinCommunity = (idCommunity, data) => {
    dispatch(joinCommunity(idCommunity, data))
      .then(() => setJoinCommunityStatus('success'))
      .catch(() => setJoinCommunityStatus('error'));
  };

  const handleDeleteActivity = (communityId, data) => {
    dispatch(removeActivity({ communityId, data }));
  };

  const isMember = findMemberId(userAuth?.id, members);

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
                  <h2 className='text-[32px] leading-tight sm:text-[56px] font-semibold'>
                    {detail?.name}
                  </h2>
                  <div className='flex items-center gap-2 pb-2'>
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
                    {userAuth === null ? null : (
                      <p className='text-[20px] pl-5'>
                        {members?.length} telah berkontribusi
                      </p>
                    )}
                  </div>
                </div>
                <div className='flex flex-col gap-5 sm:gap-8'>
                  <p className='text-[16px] sm:text-[18px] font-light'>
                    {detail?.description}
                  </p>
                  {userAuth === null ? (
                    <Link
                      className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/3'
                      to='/signin'
                    >
                      Login Untuk Bergabung
                    </Link>
                  ) : isLoadingMember ? (
                    <button
                      disabled
                      className='bg-[#8C8C8C] text-slate-700 font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/3'
                    >
                      Loading
                    </button>
                  ) : isMember ? (
                    <p className='font-semibold text-[24px]'>
                      Anda member komunitas ini
                    </p>
                  ) : (
                    <button
                      onClick={() => {
                        handleJoinCommunity(dataJoin);
                      }}
                      className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/3'
                    >
                      Gabung Sekarang
                    </button>
                  )}
                </div>
              </div>
              <div className='w-full h-full sm:w-1/2'>
                <img
                  className='w-full h-full object-cover rounded-xl'
                  src={`${detail?.image}`}
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
            {userAuth?.id === leader?.id ? (
              <div className='w-full flex items-center justify-center'>
                <button
                  onClick={handleOpenModalAdd}
                  className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/6'
                >
                  Tambah Aktivitas Baru
                </button>
              </div>
            ) : null}
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
                      {userAuth?.id === leader?.id ? (
                        <th className='p-3'>Actions</th>
                      ) : null}
                    </tr>
                  </thead>
                  {isLoadingDelete ? (
                    <div className='sm:py-8'>
                      <LoaderData fill='#52C41A' />
                    </div>
                  ) : (
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
                          {userAuth?.id === leader.id ? (
                            <td className='h-full flex items-center justify-center gap-5 my-auto p-3'>
                              <IconContext.Provider
                                value={{ size: '2em', color: '#0042ED' }}
                              >
                                <div
                                  onClick={() => handleOpenModal(list.id)}
                                  className='cursor-pointer'
                                >
                                  <RiEditBoxFill />
                                </div>
                              </IconContext.Provider>
                              <IconContext.Provider
                                value={{ size: '2em', color: '#FF3034' }}
                              >
                                <div
                                  onClick={() =>
                                    handleDeleteActivity(id, list.id)
                                  }
                                  className='cursor-pointer'
                                >
                                  <RiDeleteBin2Fill />
                                </div>
                              </IconContext.Provider>
                            </td>
                          ) : null}
                          {modalEdit && selectedId === list.id && (
                            <EditActivities
                              idAct={list.id}
                              idCom={id}
                              title={list.title}
                              desc={list.description}
                              date={list.date}
                              status={list.status}
                              isClose={handleCloseModal}
                            />
                          )}
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              )}
              <AddActivities
                idCommunity={id}
                isOpen={modalAdd}
                isClose={handleCloseModalAdd}
              />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DaftarKomunitas;
