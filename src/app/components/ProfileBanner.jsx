import { ProfileIcon } from '@/app/icons';
import Image from 'next/image';
import mockUserProfile from '@/app/mocks/mockUserProfile';

const ProfileBanner = () => {
  const userHasProfilePic = false;
  return (
    <div className="flex items-center pb-2.5 gap-4 w-full border-b border-brown">
      {!userHasProfilePic ? (
        <ProfileIcon />
      ) : (
        <Image
          alt="Profile Picture"
          className="rounded-full"
          height="64"
          src="/icons/Profileicon"
          style={{
            aspectRatio: '64/64',
            objectFit: 'cover',
          }}
          width="64"
        />
      )}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <h3> Recorded Trips: {mockUserProfile.trips.length}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{mockUserProfile.bio}</p>
      </div>
    </div>
  );
};

export default ProfileBanner;
