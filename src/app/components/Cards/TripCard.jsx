import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceIcon, HeartIcon, LeftChevron, RightChevron } from '@/app/icons';

const destinationsData = [
  {
    id: 1,
    name: 'Mountains',
    icon: '/Mountains.jpg',
  },
  {
    id: 2,
    name: 'Beaches',
    icon: '/Beaches.jpg',
  },
  {
    id: 3,
    name: 'Iconic Cities',
    icon: '/IconicCities.jpg',
  },
  {
    id: 4,
    name: 'Deserts',
    icon: '/Deserts.jpg',
  },
  {
    id: 5,
    name: 'House Boats',
    icon: '/HouseBoat.jpg',
  },
  {
    id: 6,
    name: 'CountrySide',
    icon: '/CountrySide.jpg',
  },
  {
    id: 7,
    name: 'Camping',
    icon: '/Camping.jpg',
  },
  {
    id: 8,
    name: 'Castles',
    icon: '/Castles.jpg',
  },
  {
    id: 9,
    name: 'Tropical',
    icon: '/Tropical.jpg',
  },
  // {
  //   id: 10,
  //   name: 'Historical',
  //   icon: Castles,
  // },
];

const TripCard = ({ location, imgSrc, tripId, cost, likes, tripType }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('liked');
  };
  const nextImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImage((prevIndex) => (prevIndex + 1) % imgSrc.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImage((prevIndex) => (prevIndex - 1 + imgSrc.length) % imgSrc.length);
  };

  const tripTypeData = destinationsData.find((destination) => destination.name === tripType);

  return (
    <Link href={`/profile/${tripId}`} className="flex w-full">
      <div
        className="h-96 w-full flex flex-col gap-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="trip w-full h-72 flex relative">
          <Image src={imgSrc[currentImage]} alt={location} priority fill className="rounded-lg h-full w-full -z-20" />
          <div className="w-full h-full flex overflow-hidden absolute bg-black rounded-lg opacity-15"></div>
          <div className="flex h-full w-full flex-col p-2">
            <button className="flex absolute hover:bg-black self-end top-2 right-2" onClick={handleLike}>
              <HeartIcon size={35} outlineColor="#fff" />
            </button>
            {isHovered && (
              <div className="flex w-full h-full justify-between items-center ">
                <button
                  className="bg-white/40 hover:bg-white/80 rounded-3xl relative h-fit w-fit p-2"
                  onClick={prevImage}
                >
                  <LeftChevron size={35} color="black" />
                </button>
                <button
                  className="bg-white/40 hover:bg-white/80 rounded-3xl relative h-fit w-fit p-2"
                  onClick={nextImage}
                >
                  <RightChevron size={35} color="black" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full justify-between gap-1">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-4">
              <h3 className="text-black text-xl h-fit font-bold">{location}</h3>
              {tripTypeData ? (
                <Image
                  src={tripTypeData.icon}
                  alt={tripTypeData.name}
                  width={25}
                  height={25}
                  className="brightness-90 backdrop-opacity-100 contrast-200"
                />
              ) : (
                <PlaceIcon color="black" />
              )}
            </div>
            <div className="flex justify-center items-center gap-1 ">
              <HeartIcon size={25} outlineColor="black" />
              <p>{likes}</p>
              <p className="text-black text-xl h-fit">100</p>
            </div>
          </div>
          <div>
            <p> June 1st - June 12th</p>
          </div>
          <div className="flex ">
            <p className="text-black text-xl h-fit font-bold">${cost}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TripCard;
