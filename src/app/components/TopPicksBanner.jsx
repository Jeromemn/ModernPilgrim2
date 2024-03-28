'use client';
import React from 'react';
import mockUserProfile from '@/app/mocks/mockUserProfile';
import TripCard from '@/app/components/TripCard';

const TopPicksBanner = () => {
  const { trips } = mockUserProfile;

  // sort trips by likes in descending order
  const sortedTrips = [...trips].sort((a, b) => b.likes - a.likes);

  return (
    <div className="flex z-90 -bottom-20 absolute w-full overflow-hidden">
      <div className="flex flex-col gap-3 relative start-20 pl-10">
        <h2 className="text-white">Top Picks</h2>
        <div className="flex gap-5">
          {sortedTrips.map(({ id, name, tripImages }, i) => (
            <TripCard imgSrc={tripImages[0].tripImage} key={i} tripId={id} location={name} canLike />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPicksBanner;
