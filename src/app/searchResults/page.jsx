'use client';
import Image from 'next/image';
import Link from 'next/link';
import HomeHeader from '@/app/components/HomeHeader';
import TripCard from '@/app/components/TripCard';
import DropDown from '@/app/components/DropDown';
import { SearchIcon } from '@/app/icons';

const MockImageGallery = [
  { imgSrc: '/beachTrip.jpg', title: 'place 1', price: 100 },
  { imgSrc: '/beachTrip.jpg', title: 'place 2', price: 200 },
  { imgSrc: '/beachTrip.jpg', title: 'place 3', price: 300 },
  { imgSrc: '/beachTrip.jpg', title: 'place 4', price: 400 },
  { imgSrc: '/beachTrip.jpg', title: 'place 5', price: 500 },
  { imgSrc: '/beachTrip.jpg', title: 'place 6', price: 600 },
  { imgSrc: '/beachTrip.jpg', title: 'place 7', price: 700 },
  { imgSrc: '/beachTrip.jpg', title: 'place 8', price: 800 },
  { imgSrc: '/beachTrip.jpg', title: 'place 9', price: 900 },
];

const destinationsData = [
  'Mountains',
  'Beaches',
  'Iconic Cities',
  'Deserts',
  'House Boats',
  'CountrySide',
  'Camping',
  'Castles',
  'Tropical',
  'Historical',
];

const destinationActivities = [
  'Hiking',
  'Scuba Diving',
  'Golfing',
  'Surfing',
  'Water Sports',
  'Wine Tasting',
  'Sightseeing',
  'Nature Watching',
  'Concerts',
  'Biking',
  'Snow Sports',
  'Sporting Events',
  'Historical Tours',
  'Off Roading',
];

// console.log(destinationsData.destination[].name);
const ResultsPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="w-full h-1/3 relative">
        <Image src="/beachTrip.jpg" alt="Modern Pilgrims" fill priority className="object-cover bg-center" />
        <div className="w-full h-full bg-dark-black absolute opacity-25"></div>
        <HomeHeader />
        <div className="w-full h-full lg:h-5/6 flex flex-col justify-end items-center lg:items-center absolute gap-3 px-4 pb-2">
          <h2 className="text-white text-4xl font-bold text-center">Search Results</h2>
          <p className="text-white text-2xl text-center"> Find stories, tips and ideas for your next trip to </p>
        </div>
      </div>
      <div className="mx-auto flex flex-col w-full justify-center items-center gap-4 pt-5">
        {/*<div className="w-full bg-tan flex justify-center flex-col gap-3">*/}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="border border-green rounded-2xl px-2 py-1 w-fit flex items-center">
              <SearchIcon />
              <input className="w-fit" id="search" type="search" placeholder="Find places to explore" />
            </div>
            <div className="border border-green w-fit rounded-2xl px-2 py-1">
              <input className="w-10" id="budget" placeholder="$" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2">
            <DropDown options={destinationsData} filterBy="trip type" />
            <DropDown options={destinationActivities} filterBy="activities" />
          </div>
        </div>
        {/*</div>*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {MockImageGallery.map(({ imgSrc, title, price }, index) => (
            <TripCard key={index} location={title} imgSrc={imgSrc} tripId={index} canLike={true} cost={price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
