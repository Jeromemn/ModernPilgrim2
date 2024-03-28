'use client';
import { useState } from 'react';
import Image from 'next/image';
import HomeHeader from '@/app/components/HomeHeader';
import TripCard from '@/app/components/TripCard';
import { SearchIcon, CloseIcon } from '@/app/icons';
import SingleDropDown from '@/app/components/SingleDropDown';
import Modal from '@/app/components/Modal';

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
  'Wildlife',
  'Concerts',
  'Biking',
  'Snow Sports',
  'Sporting Events',
  'Historical Tours',
  'Off Roading',
];

const SortBy = ['Price: Low to High', 'Price: High to Low', 'Most Popular', 'Most Recent'];

const ResultsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
      <div className="mx-5 md:mx-10 lg:mx-12 2xl:mx-24 flex flex-col w-auto justify-center items-center gap-5 pt-5">
        <div className="border border-green rounded-3xl px-3 py-2 flex items-center w-full md:w-1/2 justify-between">
          <input
            className="pl-1 w-80 focus:outline-none"
            id="search"
            type="search"
            placeholder="Find places to explore"
          />
          <SearchIcon color="#dda15e" />
        </div>
        <div className="flex justify-between w-full">
          <SingleDropDown options={SortBy} filterBy="Sort" reverse dark />
          <div className="gap-6 hidden lg:flex">
            <SingleDropDown options={destinationsData} filterBy="Type" color="#212529" />
            <SingleDropDown options={destinationActivities} filterBy="Activities" />
            <SingleDropDown isInput={true} filterBy="Price" />
          </div>
          <div className="flex lg:hidden">
            <button className="text-black font-bold rounded-md px-4 py-2 text-xl" onClick={toggleMenu}>
              Search
            </button>
            <Modal isOpen={isOpen} onClose={toggleMenu}>
              <div className="flex w-full justify-between items-center z-10 relative">
                <h1 className="text-white font-bold text-3xl">Modern Pilgrim</h1>
                <button onClick={toggleMenu}>
                  <CloseIcon color="#fff" />
                </button>
              </div>
              <div className="flex flex-col h-full items-center relative pt-10">
                <h1 className="text-white font-bold text-3xl">Filters</h1>
                <div className="mobileContainer gap-6 md:flex flex-col justify-center lg:hidden  overflow-y-scroll relative w-full pb-12 overflow-x-hidden">
                  <SingleDropDown options={destinationsData} filterBy="Type" inline color="white" />
                  <SingleDropDown options={destinationActivities} filterBy="Activities" inline color="white" />
                  <SingleDropDown isInput={true} filterBy="Price" inline color="white" />
                </div>
              </div>
            </Modal>
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
