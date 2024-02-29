import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImage } from '../../icons';
import mockUserProfile from '@/app/mocks/mockUserProfile';

const ProfilePage = () => {
  // const tripHasImages = false
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 p-6">
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
