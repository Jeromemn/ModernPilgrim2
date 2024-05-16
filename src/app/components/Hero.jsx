'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import { ScrollContext } from '@/app/ScrollContext';
import HomeHeader from '@/app/components/HomeHeader';
import { SearchIcon } from '@/app/icons';
const Hero = () => {
  const { scrolled, setScrolled } = useContext(ScrollContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, setScrolled]);
  return (
    <div className={`hero w-full h-full fixed top-0 z-50 ${scrolled ? 'hero-shrink' : ''} `}>
      <div className="h-full relative">
        <Image src="/HeroPlaceHolder.jpg" alt="Modern Pilgrims" fill priority className="object-cover bg-center" />
        <div
          className="w-full h-full overflow-hidden absolute bg-gradient-to-b from-dark-black/50
         from-5% via-dark-black/25 via-95% to-white to 100%"
        ></div>
      </div>
      <div className="flex flex-col w-full h-full justify-center items-center bg-transparent top-0 absolute">
        <div className="bg-opacity-20 flex bg-white backdrop-blur rounded-xl">
          <div className="px-4 flex bg-transparent py-2 w-auto gap-3 items-center">
            <SearchIcon color="#fff" />
            <input
              className="bg-transparent text-white w-fit max-w-40 placeholder:text-white focus:outline-none"
              id="search"
              type="search"
              placeholder="Explore Trips"
            />
            {/*<input*/}
            {/*  className="bg-transparent text-white w-fit  focus:outline-none"*/}
            {/*  id="start"*/}
            {/*  type="date"*/}
            {/*/>*/}
            {/*<input className="bg-transparent text-white max-w-fit focus:outline-none" id="end" type="date" />*/}
            <input
              className="bg-transparent text-white placeholder:text-white focus:outline-none w-fit max-w-16 md:max-w-24"
              placeholder="Budget"
            />
            <button className="bg-white text-green rounded-2xl w-fit px-6 py-1 hover:border max-h-8 max-w-24">
              Search
            </button>
          </div>
        </div>
        <HomeHeader />
      </div>
    </div>
  );
};

export default Hero;
