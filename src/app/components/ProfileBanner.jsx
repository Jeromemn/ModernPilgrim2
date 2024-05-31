'use client';
import { ProfileIcon } from '@/app/icons';
import Image from 'next/image';
import mockUserProfile from '@/app/mocks/mockUserProfile';
import { useSession, SessionProvider } from 'next-auth/react';
// import { auth } from '@/auth';
const ProfileBanner = () => {
  const session = useSession();

  // const session = auth();
  // console.log(session.data.token.token.token.token.token.token.token.token);
  console.log(session.data.session.user.name);
  // const userProfile = session.user;

  const userHasProfilePic = false;
  const totalLikes = mockUserProfile.trips.reduce((acc, trip) => acc + trip.likes, 0);
  console.log(totalLikes);
  return (
    // <SessionProvider>
    <div className="flex flex-col items-center justify-center absolute lg:-mt-16 bottom-0 lg:bottom-auto pb-3 lg:pb-0 -z-10 md:w-full">
      <div className="flex flex-col gap-3 md:gap-2 lg:gap-1 items-center mx-9 lg:mx-0 justify-center">
        <div className="flex flex-row lg:gap-6 gap-4 items-center justify-center">
          <div className="self-start">
            {!userHasProfilePic ? (
              <div className="rounded-full border-4 border-white w-20 h-20 lg:w-32 lg:h-32 flex justify-center items-center overflow-hidden place-items-center bg-[#EBFBFE] lg:self-start">
                <ProfileIcon />
              </div>
            ) : (
              <Image
                alt="Profile Picture"
                className="rounded-full border-4 border-white"
                height="112"
                src="/icons/Profileicon"
                style={{
                  objectFit: 'cover',
                }}
                width="112"
              />
            )}
          </div>

          <div className="flex flex-col justify-evenly lg:justify-center w-fit lg:pt-5 lg:gap-2 gap-1">
            <h1 className="lg:text-3xl text-2xl font-semibold text-white w-fit pt-2 md:pt-1">{session.data.session.user.name}</h1>
            <div className="lg:text-center text-left">
              <p className="text-md text-black lg:pt-3 text-pretty">{mockUserProfile.bio}</p>
            </div>
            <div className="w-fit gap-5 rounded bg-white py-1 shadow-xl px-4 hidden lg:flex">
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{mockUserProfile.trips.length}</h3>
                <p className="text-sm">Trips</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{totalLikes}</h3>
                <p className="text-sm"> Likes</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{totalLikes}</h3>
                <p className="text-sm"> Likes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 rounded bg-white py-1 shadow-xl px-4 lg:hidden">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">{mockUserProfile.trips.length}</h3>
            <p className="text-sm">Trips</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">{totalLikes}</h3>
            <p className="text-sm"> Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">{totalLikes}</h3>
            <p className="text-sm"> Likes</p>
          </div>
        </div>
      </div>
    </div>
    // </SessionProvider>
  );
};

export default ProfileBanner;
