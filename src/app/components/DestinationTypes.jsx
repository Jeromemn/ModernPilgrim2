'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Line } from '@/app/icons';

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

const DestinationTypes = () => {
  return (
    <div className="bg-light-green w-full flex justify-center p-6 md:p-10 mb-5 ">
      <div className="container flex flex-col gap-7">
        <div className="w-fit flex flex-col gap-2">
          <h2>Explore by category</h2>
          <Line color="#dda15e" style={{ width: '60%' }} />
        </div>
        <ul className="lg:flex lg:justify-between grid grid-rows-3 grid-flow-col gap-y-2">
          {destinationsData.map((destination) => (
            <Link href={`/destinations/${destination.name}`} key={destination.id}>
              <li className="flex flex-col items-center hover:invert hover:brightness-0" key={destination.id}>
                <Image src={destination.icon} alt={destination.name} height={35} width={35} />
                <p className="text-white opacity-40">{destination.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationTypes;
