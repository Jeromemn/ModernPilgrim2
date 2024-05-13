'use client';
import { useState, useEffect } from 'react';
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
  { imgSrc: '/beachTrip.jpg', title: 'place 10', price: 1000 },
  { imgSrc: '/beachTrip.jpg', title: 'place 11', price: 1100 },
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
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // cleanup
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="h-screen w-full">
      <div className={`w-full h-1/4 sticky top-0 flex flex-col justify-end ${scrolled ? 'shrink-image' : 'no-shrink'}`}>
        <div className={`h-full relative  z-0`}>
          <Image src="/beachTrip.jpg" alt="Modern Pilgrims" fill priority className="object-cover object-center" />
          {/*<Image src="/beachTrip.jpg" alt="Modern Pilgrims" fill priority className="object-cover bg-center" />*/}
          <div className="w-full h-full bg-dark-black absolute opacity-25 z-0"></div>
        </div>

        <div className="flex flex-col items-center lg:items-center absolute self-center justify-self-end z-20 gap-3 px-4 pb-2">
          <h2 className="text-white text-4xl font-bold text-center">Search Results</h2>
          <p className="text-white text-2xl text-center"> Find stories, tips and ideas for your next trip to </p>
        </div>
        <HomeHeader />
      </div>
      <div className="mx-5 md:mx-10 lg:mx-12 2xl:mx-24 flex flex-col w-auto justify-center items-center gap-5 pt-10">
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
              <div className="flex w-full justify-between items-center z-20 relative">
                <h1 className="text-white font-bold text-3xl">Modern Pilgrim</h1>
                <button onClick={toggleMenu}>
                  <CloseIcon color="#fff" size={25} />
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
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full ${isOpen ? 'hidden' : ''}`}
        >
          {MockImageGallery.map(({ imgSrc, title, price }, index) => (
            <TripCard key={index} location={title} imgSrc={imgSrc} tripId={index} canLike={true} cost={price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
