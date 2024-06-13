'use client';
import useUserTrips from '@/app/hooks/useUserTrips';
import Image from 'next/image';
import TripCard from '@/app/components/Cards/TripCard';
import HomeHeader from '@/app/components/HomeHeader';
import ProfileBanner from '@/app/components/ProfileBanner';
import Message from '@/app/components/PageMessages/Message';

const ProfilePage = ({ params: { userId } }) => {
  const { trips, isLoading, isError } = useUserTrips(userId);
  console.log(trips, isLoading, isError);

  return (
    <div className="h-screen w-full flex flex-col justify-start relative bg-soft-white">
      <div className="fixed top-0 w-full lg:h-72 h-64 md:h-60 bg-soft-white z-10">
        <div className="relative h-32 lg:h-44 -z-10">
          <Image
            src="/HeroPlaceHolder.jpg"
            alt="boat on water"
            fill
            // height='300px'
            priority
            className="object-cover object-center brightness-80 z-0 "
          />
          <div className="w-full h-full flex overflow-hidden bg-black rounded-lg opacity-40 "></div>
        </div>
        <HomeHeader />
        <ProfileBanner userId={userId} />
      </div>
      <div className="flex w-full lg:h-full justify-center items-center lg:items-center pb-10 lg:mt-72 mt-64 z-0">
        {trips?.length === 0 && <Message message="Looks like you havent shared any trips" />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 scroll-py-5 h-full pb-4 -z-50">
          {trips?.map(
            ({ hasTripImage, _id, tripBudget, title, displayDate, location, tripImages, tripType, month, likes }) => (
              <TripCard
                key={_id}
                hasTripImage={hasTripImage}
                tripId={_id}
                tripBudget={tripBudget}
                name={title}
                displayDate={displayDate}
                location={location}
                imgSrc={tripImages}
                cost={tripBudget}
                tripType={tripType}
                likes={likes}
                month={month}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
