import { IconContext } from 'react-icons';
import { RiEditBoxFill } from 'react-icons/ri';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const KomunitasDashboard = () => {
  return (
    <div className='w-full px-14 py-10 space-y-14'>
      <h1 className='text-[32px] font-semibold'>List Komunitas Hijauin</h1>
      <div className='flex flex-col items-end gap-6'>
        <button className='bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md sm:w-1/6'>
          Buat Komunitas
        </button>
        <table className='w-full bg-white rounded-lg overflow-hidden sm:shadow-lg'>
          <thead className='text-white text-left'>
            <tr className='bg-[#223A26] text-[20px] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'>
              <th className='p-3'>Nama Komunitas</th>
              <th className='p-3'>Lokasi Komunitas</th>
              <th className='p-3'>Deskripsi Komunitas</th>
              <th className='p-3 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody className='w-full text-left'>
            <tr className='align-top text-[18px] border-b-2 mb-2 sm:mb-0'>
              <td className='border-slate-400 p-3'>Hijauin Medan</td>
              <td className='border-slate-400 p-3'>Medan</td>
              <td className='w-[660px] border-slate-400 p-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo a
                id odio fugit quaerat non esse distinctio deserunt minus,
                voluptatum, earum obcaecati necessitatibus alias magnam nulla!
                Placeat ullam dolore commodi obcaecati quasi, maxime ipsa
                repudiandae nam labore sit consectetur nobis recusandae omnis!
                Ab error recusandae soluta molestiae temporibus laborum aut modi
                similique aliquam, aspernatur quo. Assumenda aliquid
                necessitatibus ab debitis repellendus, eaque alias quas.
              </td>
              <td className='flex items-center justify-center gap-5 p-3'>
                <IconContext.Provider value={{ size: '2em', color: '#0042ED' }}>
                  <div className='cursor-pointer'>
                    <RiEditBoxFill />
                  </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '2em', color: '#FF3034' }}>
                  <div className='cursor-pointer'>
                    <RiDeleteBin2Fill />
                  </div>
                </IconContext.Provider>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KomunitasDashboard;
