import { useState } from 'react';
import { IconContext } from 'react-icons';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity } from '../../store/features/communitySlice';

const AddActivities = ({ isOpen, isClose, idCommunity }) => {
  const [formAdd, setFormAdd] = useState({
    communities_id: Number(idCommunity),
    title: '',
    description: '',
    date: '',
    status: '',
  });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.community.loadingPost);

  const handleChangeForm = (e) => {
    setFormAdd({ ...formAdd, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formAdd);
    dispatch(postActivity(formAdd));
  };

  if (!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-1/4 relative flex gap-8 bg-white px-8 py-6 shadow-lg rounded-md border-2 border-slate-400'>
        <form
          onChange={handleChangeForm}
          className='w-full flex flex-col gap-8'
        >
          <input
            name='title'
            className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
            type='text'
            placeholder='Nama Aktivitas'
          />
          <textarea
            name='description'
            className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
            type='text'
            placeholder='Deskripsi Aktivitas'
          />
          <input
            name='date'
            className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
            type='date'
            placeholder='Tanggal Aktivitas'
          />
          <select
            name='status'
            className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
          >
            <option value='on going'>Ongoing</option>
            <option value='done'>Done</option>
            <option value='upcoming'>Upcoming</option>
          </select>
          {isLoading ? (
            <p>loading ...</p>
          ) : (
            <button
              onClick={handleSubmit}
              className='w-1/2 mx-auto bg-[#0077b6] text-white py-2.5 px-3.5 text-center rounded-md'
            >
              Tambah Aktivitas
            </button>
          )}
        </form>
        <IconContext.Provider value={{ size: '2.5em', color: '#e63946' }}>
          <div
            onClick={isClose}
            className='absolute -right-5 -top-5 cursor-pointer'
          >
            <RiCloseCircleFill />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default AddActivities;
