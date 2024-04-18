import Image from 'next/image';
import HomeHeader from '@/app/components/HomeHeader';
import { SearchIcon } from '@/app/icons';
import TopPicksBanner from '@/app/components/TopPicksBanner';
import CardSlider from '@/app/components/CardSlider';
import DestinationTypes from '@/app/components/DestinationTypes';
import DestinationActivities from '@/app/components/DestinationActivities';

export default async function Home() {
  return (
    <main>
      <div>
        <div className="w-full h-screen relative">
          <div className="h-5/6 relative">
            <Image src="/HeroPlaceHolder.jpg" alt="Modern Pilgrims" fill priority className="object-cover bg-center" />
            <div
              className="w-full h-full overflow-hidden absolute bg-gradient-to-b from-dark-black/50
         from-5% via-dark-black/25 via-95% to-white to 100%"
            ></div>
          </div>
          <HomeHeader />
          <div className="flex flex-col w-full h-5/6 justify-center items-center bg-transparent top-0 absolute">
            <div className="bg-opacity-20 flex z-10 bg-white backdrop-blur rounded-xl">
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
                  id="budget"
                  placeholder="Budget"
                />
                <button className="bg-white text-green rounded-2xl w-fit px-6 py-1 hover:border max-h-8 max-w-24">
                  Search
                </button>
              </div>
            </div>
            <TopPicksBanner />
          </div>
        </div>
        <CardSlider sliderTitle="Popular Destinations" sliderDescription="Most popular destinations from users" />
        <DestinationTypes />
        <CardSlider sliderTitle="Best Deals" sliderDescription="Most cost effective trips" />
        <DestinationActivities />
      </div>
    </main>
  );
}
