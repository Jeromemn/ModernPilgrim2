import Image from 'next/image';
import HomeHeader from '@/app/components/HomeHeader';
import { SearchIcon } from '@/app/icons';
import TopPicksBanner from '@/app/components/TopPicksBanner';
import CategoryBanner from '@/app/components/CategoryBanner';
import CardSlider from '@/app/components/CardSlider';

export default function Home() {
  return (
    <main className="w-full h-lvh">
      <div className="">
        <div className="w-full h-screen relative">
          <div className="h-5/6 relative">
            <Image
              // className="z-0"
              src="/HeroPlaceHolder.jpg"
              alt="Modern Pilgrims"
              // width={1920}
              // height={1080}
              fill
              priority
              // layout="responsive"
              className="object-cover bg-center"
            />
            <div
              className="w-full h-full overflow-hidden absolute bg-gradient-to-b from-dark-black/50
         from-5% via-dark-black/25 via-95% to-white to 100%"
            ></div>
          </div>
          <HomeHeader />
          <div className="flex flex-col w-full h-5/6 justify-center items-center bg-transparent top-0 absolute">
            <div className="bg-opacity-20 flex z-50 bg-white backdrop-blur rounded-xl">
              <div className="px-4 flex bg-transparent py-2 w-auto gap-3 items-center">
                <SearchIcon />
                <input
                  className="bg-transparent text-white w-72 placeholder:text-white focus:outline-none"
                  id="search"
                  type="search"
                  placeholder="Where would you like to go?"
                />
                <input
                  className="bg-transparent text-white flex flex-row-reverse  focus:outline-none"
                  id="start"
                  type="date"
                />
                <input className="bg-transparent text-white  focus:outline-none" id="end" type="date" />
                <input
                  className="bg-transparent text-white placeholder:text-white focus:outline-none"
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
        <CategoryBanner category="Adventure" />
      </div>
    </main>
  );
}
