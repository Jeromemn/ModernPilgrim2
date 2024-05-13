import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImage } from '../../icons';
import mockUserProfile from '@/app/mocks/mockUserProfile';

const ProfilePage = () => {
  // const tripHasImages = false
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 scroll-py-2 h-full">
      {/*map through mock trips*/}
      {mockUserProfile.trips.map(({ hasTripImage, id, tripBudget, name, displayDate, location }) => (
        <div key={id} className="border rounded p-4 card-shadow">
          <h2 className="text-lg font-bold">{name}</h2>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <div className="grid grid-cols-2 grid-rows-2">
              <p>{location}</p>
              <p>{displayDate}</p>
              <p> ${tripBudget}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {!hasTripImage ? (
                <PlaceHolderImage />
              ) : (
                <Image
                  alt="Trip 1"
                  className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                  height="150"
                  src="/placeholder.svg"
                  width="200"
                />
              )}
              {!hasTripImage ? (
                <PlaceHolderImage />
              ) : (
                <Image
                  alt="Trip 1"
                  className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                  height="150"
                  src="/placeholder.svg"
                  width="200"
                />
              )}
            </div>
          </div>
          <button className="p-2 border rounded mt-4 bg-brown text-tan">
            <Link href={`/profile/${id}`}> View Details </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
