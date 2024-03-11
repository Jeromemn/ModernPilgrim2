// 'use client';
import Image from 'next/image';
import {
  IconicCities,
  Beaches,
  Camping,
  Castles,
  Deserts,
  Tropical,
  Mountains,
  HouseBoats,
  CountrySide,
} from '@/app/icons/destinationsTypes';
import { Line } from '@/app/icons';

const destinationsData = [
  {
    id: 1,
    name: 'Mountains',
    icon: Mountains,
  },
  {
    id: 2,
    name: 'Beaches',
    icon: Beaches,
  },
  {
    id: 3,
    name: 'Iconic Cities',
    icon: IconicCities,
  },
  {
    id: 4,
    name: 'Deserts',
    icon: Deserts,
  },
  {
    id: 5,
    name: 'House Boats',
    icon: HouseBoats,
  },
  {
    id: 6,
    name: 'CountrySide',
    icon: CountrySide,
  },
  {
    id: 7,
    name: 'Camping',
    icon: Camping,
  },
  {
    id: 8,
    name: 'Castles',
    icon: Castles,
  },
  {
    id: 9,
    name: 'Tropical',
    icon: Tropical,
  },
  // {
  //   id: 10,
  //   name: 'Historical',
  //   icon: valley,
  // },
];
const DestinationTypes = () => {
  return (
    <div className="bg-light-green w-full flex justify-center p-10 mb-5 ">
      <div className="container flex flex-col gap-7">
        <div className="w-fit flex flex-col gap-2">
          <h2>Destination Types</h2>
          <Line color='#dda15e' style={{ width: '60%' }} />
        </div>
        <ul className="flex justify-between ">
          {destinationsData.map((destination) => (
            <li className="flex flex-col items-center" key={destination.id}>
              <Image src={destination.icon} alt={destination.name} height={35} width={35} />
              <p className="text-white opacity-40">{destination.name}</p>
            </li>
          ))}
          {/*<Image src={mountain} alt="mountainicon" />*/}
          {/*<h3> {name}</h3>*/}
        </ul>
      </div>
    </div>
  );
};

export default DestinationTypes;
