import React from 'react';
import mockUserProfile from '@/app/mocks/mockUserProfile';
import Image from 'next/image';
import Link from 'next/link';

const TopPicksBanner = () => {
  const { trips } = mockUserProfile;

  // sort trips by likes in descending order
  const sortedTrips = [...trips].sort((a, b) => b.likes - a.likes);

  console.log(sortedTrips);
  return (
    <div className="flex z-50 -bottom-20 absolute w-full">
      <div className="flex flex-col gap-3 relative start-20 pl-10">
        <h2 className="text-white">Top Picks</h2>
        <div className="flex gap-5">
          {sortedTrips.map(({ id, name, tripImages }) => (
            <Link href={`/profile/${id}`} key={id}>
              <div className="trip w-80 h-56 flex relative">
                <Image src={tripImages[0].tripImage} alt={name} fill className="rounded-lg" />
                <div className="flex w-full h-full z-50 items-end p-4">
                  <h3 className="text-white text-xl h-fit">{name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPicksBanner;
