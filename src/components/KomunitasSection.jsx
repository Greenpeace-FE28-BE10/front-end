import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCommunity } from '../store/features/communitySlice';
import HomeCardCommunity from './HomeCardCommunity';
import LoaderData from './LoaderData';

const KomunitasSection = () => {
  const isLoading = useSelector((state) => state.community.loading);
  const dataCommunity = useSelector((state) => state.community.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCommunity());
  }, [dispatch]);
  return (
    <section className='w-full mt-12 py-8 sm:py-20 px-5 sm:px-[120px]'>
      <h1 className='text-3xl text-white sm:text-[40px] font-semibold mb-10 sm:mb-16'>
        Komunitas Kami
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-16 gap-8'>
        {isLoading ? (
          <LoaderData fill='#ffffff' />
        ) : (
          dataCommunity
            ?.slice(0, 3)
            .map((list) => (
              <HomeCardCommunity
                key={list.id}
                communityImg={list.image}
                leaderName={list.leader_name}
                communityName={list.name}
                communityLocation={list.location}
                idCommunity={list.id}
              />
            ))
        )}
      </div>
    </section>
  );
};

export default KomunitasSection;
