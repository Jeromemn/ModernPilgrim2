'use client';
import Image from 'next/image';
import HomeHeader from '@/app/components/HomeHeader';
import TripCard from '@/app/components/TripCard';
// import DropDown from '@/app/components/DropDown';
import { SearchIcon } from '@/app/icons';
// import CombinedDropDown from "@/app/components/CombinedDropDown";
import SingleDropDown from '@/app/components/SingleDropDown';

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

const SortBy = ['Price: Low to High', 'Price: High to Low', 'Most Popular', 'Most Recent'];

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
      <div className="mx-5 md:mx-10 lg:mx-16 2xl:mx-24 flex flex-col w-auto justify-center items-center gap-5 pt-5">
        <div className="border border-green rounded-3xl px-3 py-2 flex items-center w-full md:w-1/2 justify-between">
          <input className="pl-1 w-80" id="search" type="search" placeholder="Find places to explore" />
          <SearchIcon color="#dda15e" />
        </div>
        <div className="flex justify-between w-full">
          <SingleDropDown options={SortBy} filterBy="Sort" reverse />
          <div className="flex gap-6">
            <SingleDropDown options={destinationsData} filterBy="Type" />
            <SingleDropDown options={destinationActivities} filterBy="Activities" />
            <SingleDropDown isInput={true} filterBy="Price" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
          {MockImageGallery.map(({ imgSrc, title, price }, index) => (
            <TripCard key={index} location={title} imgSrc={imgSrc} tripId={index} canLike={true} cost={price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
