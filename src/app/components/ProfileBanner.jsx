'use client';
import { useEffect, useState } from 'react';
import { ProfileIcon } from '@/app/icons';
import Image from 'next/image';
// import mockUserProfile from '@/app/mocks/mockUserProfile';
// import { useSession } from 'next-auth/react';
// import { auth } from '@/auth';

const getData = async (userId) => {
  const res = await fetch(`http://localhost:3000/api/user/${userId}`);
  return await res.json();
};
const ProfileBanner = ({ userId }) => {
  // const session = useSession();
  const [editMode, setEditMode] = useState(false);

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(userId);
      setUserData(data);
    };

    fetchData();
  }, [userId]);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const userHasProfilePic = false;
  // const totalLikes = mockUserProfile.trips.reduce((acc, trip) => acc + trip.likes, 0);
  // console.log(totalLikes);
  return (
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
            <h1 className="lg:text-3xl text-2xl font-semibold text-white w-fit pt-2 md:pt-1">
              {userData?.user?.username || 'name'}
            </h1>
            <div className="lg:text-center text-left lg:min-w-80">
              {!editMode ? (
                // <p className="text-md text-black lg:pt-3 text-pretty">{mockUserProfile.bio}</p>
                <p className="text-md text-black lg:pt-3 text-pretty">{userData?.user?.bio || 'Add a bio'}</p>
              ) : (
                <textarea
                  className={`peer focus:outline-none border-b-2 border-black w-full min-w-80 p-1 bg-transparent resize-none placeholder:text-xl placeholder:text-black/70 text-xl h-10`}
                  // placeholder={placeholder}
                  // required={require}
                  // name={name}
                  // value={value}
                  // onChange={handleChange}
                  spellCheck
                />
              )}
            </div>
            <div className="w-fit gap-5 rounded bg-white py-1 shadow-xl px-4 hidden lg:flex">
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{userData?.user?.trips.length}</h3>
                <p className="text-sm">Trips</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{userData?.user.likes || '0'}</h3>
                <p className="text-sm"> Likes</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{userData?.user.likes || '0'}</h3>
                <p className="text-sm"> Likes</p>
              </div>
            </div>
          </div>
          <button className="border p-2 rounded" onClick={handleEdit}>
            edit
          </button>
        </div>
        <div className="flex gap-5 rounded bg-white py-1 shadow-xl px-4 lg:hidden">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">{userData?.user.trips.length}</h3>
            <p className="text-sm">Trips</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">{userData?.user.likes || '0'}</h3>
            <p className="text-sm"> Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">{userData?.user.likes || '0'}</h3>
            <p className="text-sm"> Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
