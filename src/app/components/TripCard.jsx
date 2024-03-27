import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceIcon, HeartIcon } from '@/app/icons';

const TripCard = ({ location, imgSrc, tripId, canLike, cost }) => {
  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('liked');
  };
  return (
    <Link href={`/profile/${tripId}`} className="flex w-full z-10">
      <div className="trip w-full h-80 flex relative z-50">
        <Image src={imgSrc} alt={location} priority fill className="rounded-lg h-full w-full -z-20" />
        <div className="w-full h-full flex overflow-hidden absolute bg-black rounded-lg z-40 opacity-15 "></div>
        <div className="flex w-full h-full z-50 p-3 flex-col">
          {canLike && (
            <div className="w-full relative flex justify-end z-50 ">
              <button className="z-50 flex hover:bg-black" onClick={handleLike}>
                <HeartIcon className="z-50" />
              </button>
            </div>
          )}
          {cost && (
            <div className="flex h-full items-end justify-between">
              <div className="flex gap-x-4">
                <PlaceIcon color="#fff" />
                <h3 className="text-white text-2xl h-fit">{location}</h3>
              </div>
              <div className="flex ">
                <p className="text-white text-2xl h-fit">${cost}</p>
              </div>
            </div>
          )}
          {!cost && (
            <div className="flex h-full items-end gap-x-4">
              <PlaceIcon color="#fff" />
              <h3 className="text-white text-2xl h-fit">{location}</h3>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
