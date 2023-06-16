import { useState } from 'react';
import { IconContext } from 'react-icons';
import { RiCloseCircleFill } from 'react-icons/ri';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { patchActivity } from '../../store/features/communitySlice';

const EditActivities = ({
  isClose,
  title,
  desc,
  date,
  status,
  idAct,
  idCom,
}) => {
  const [formEdit, setFormEdit] = useState({
    title: title,
    description: desc,
    date: moment(date, 'DD MMMM YYYY').format('YYYY-MM-DD'),
    status: status,
  });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.community.loadingEdit);

  const handleChangeEdit = (e) => {
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(
      patchActivity({ idCommunity: idCom, idActivity: idAct, data: formEdit })
    );
  };

  return (
    <div className='fixed inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-1/4 relative flex gap-8 bg-white px-8 py-6 shadow-lg rounded-md border-2 border-slate-400'>
        <form
          onChange={handleChangeEdit}
          className='w-full flex flex-col gap-8'
        >
          <input
            name='title'
            className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
            type='text'
            defaultValue={formEdit.title}
            placeholder='Masukkan Nama Aktivitas'
          />
          <textarea
            name='description'
            className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
            type='text'
            defaultValue={formEdit.description}
            placeholder='Deskripsi Aktivitas'
          />
          <input
            name='date'
            className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
            type='date'
            defaultValue={formEdit.date}
            placeholder='Tnggal Aktivitas'
          />
          <select
            name='status'
            defaultValue={formEdit.status}
            className='w-full py-2 px-2.5 border-b-[1px] border-slate-400'
          >
            <option value='on progress'>On Progress</option>
            <option value='done'>Done</option>
            <option value='upcoming'>Upcoming</option>
          </select>
          {isLoading ? (
            <p>loading..</p>
          ) : (
            <button
              onClick={handleSubmitEdit}
              className='w-1/2 mx-auto bg-[#0077b6] text-white py-2.5 px-3.5 text-center rounded-md'
            >
              Edit
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

export default EditActivities;
