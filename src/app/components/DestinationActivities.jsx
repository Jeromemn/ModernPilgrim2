'use client';
import Link from 'next/link';

import {
  BikingIcon,
  ConcertIcon,
  GolfIcon,
  HikingIcon,
  NatureWatching,
  OffRoadingIcon,
  ScubaIcon,
  SightSeeingIcon,
  SnowSportsIcon,
  SportingEventsIcon,
  SurfingIcon,
  VisitIcon,
  WaterSportsIcon,
  WineIcon,
} from '@/app/icons/destinationActivities';
import { Line } from '@/app/icons';

const activitiesData = [
  {
    id: 1,
    name: 'Scuba Diving',
    Icon: ScubaIcon,
  },
  {
    id: 2,
    name: 'Hiking',
    Icon: HikingIcon,
  },
  {
    id: 3,
    name: 'Sightseeing',
    Icon: SightSeeingIcon,
  },
  {
    id: 4,
    name: 'Golfing',
    Icon: GolfIcon,
  },
  {
    id: 5,
    name: 'Water Sports',
    Icon: WaterSportsIcon,
  },
  {
    id: 6,
    name: 'Wine Tasting',
    Icon: WineIcon,
  },
  {
    id: 7,
    name: 'Snow Sports',
    Icon: SnowSportsIcon,
  },
  {
    id: 8,
    name: 'Concerts',
    Icon: ConcertIcon,
  },
  {
    id: 9,
    name: 'Nature Watching',
    Icon: NatureWatching,
  },
  {
    id: 10,
    name: 'Biking',
    Icon: BikingIcon,
  },
  {
    id: 11,
    name: 'Sporting Events',
    Icon: SportingEventsIcon,
  },
  {
    id: 12,
    name: 'Surfing',
    Icon: SurfingIcon,
  },
  {
    id: 13,
    name: 'Iconic Destinations',
    Icon: VisitIcon,
  },
  {
    id: 14,
    name: 'Off Roading',
    Icon: OffRoadingIcon,
  },
];

const DestinationActivities = () => {
  return (
    <div className="bg-light-green w-full flex justify-center p-10 mb-5 ">
      <div className="container flex flex-col gap-7">
        <div className="w-fit flex flex-col gap-2">
          <h2>Explore by Activity</h2>
          <Line color="#dda15e" style={{ width: '60%' }} />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-7 lg:grid-rows-2 lg:grid-flow-col gap-y-6 ">
          {activitiesData.map(({ name, Icon, id }) => (
            <Link key={id} href="">
              <div key={id} className="flex flex-col items-center gap-y-2">
                <Icon size={80} />
                <p className="text-white opacity-40 flex">{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationActivities;
