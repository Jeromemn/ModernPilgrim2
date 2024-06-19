'use client';
import { useState, useRef, useEffect } from 'react';
import useUser from '@/app/hooks/useUser';
import { getPresignedUrl } from '@/actions/imageUploadAction';
import { deleteImage } from '@/actions/imageDeleteAction';
import { ProfileIcon } from '@/app/icons';
import Image from 'next/image';
import useUpdateProfile from '@/app/hooks/useUpdateProfile';
// import { useSession } from 'next-auth/react';

const ProfileBanner = ({ userId }) => {
  const { user, isLoading, isError } = useUser(userId);
  const { trigger } = useUpdateProfile(userId);
  const fileInputRef = useRef();
  const [tempImage, setTempImage] = useState(null);
  console.log(user, isLoading, isError);
  // const session = useSession();
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    username: user?.username || 'name',
    email: user?.email || 'email',
    bio: user?.bio || 'Add a bio',
    profileImage: {
      imageName: user?.profileImage?.imageName || 'profileImage',
      imageUrl: user?.profileImage?.imageUrl || 'profileImage',
    },
    hasProfileImage: user?.hasProfileImage || false,
  });

  useEffect(() => {
    if (user) {
      setUserData({
        username: user.username || 'name',
        email: user.email || 'email',
        bio: user.bio || 'Add a bio',
        profileImage: {
          imageName: user?.profileImage?.imageName || 'profileImage',
          imageUrl: user?.profileImage?.imageUrl || 'profileImage',
        },
        hasProfileImage: user.hasProfileImage || false,
      });
    }
  }, [user]);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleProfilePicClick = () => {
    if (editMode) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      // If there's a previously uploaded image, delete it
      if (tempImage) {
        const response = await deleteImage({ key: tempImage.imageName });
        if (response.error) {
          console.error('Error deleting image:', response.error);
          return;
        }
      }
      const { url, fields } = await getPresignedUrl(file.name, file.type);
      const imageData = new FormData();

      Object.keys(fields).forEach((key) => {
        imageData.append(key, fields[key]);
      });
      imageData.append('file', file);

      const response = await fetch(url, {
        method: 'POST',
        body: imageData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload file: ${file.name}`);
      }

      setUserData({
        ...userData,
        profileImage: {
          imageName: fields.key,
          imageUrl: `${url}${fields.key}`,
        },
        hasProfileImage: true,
      });
      setTempImage({
        imageName: fields.key,
        imageUrl: `${url}${fields.key}`,
      });
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      // Delete the current profile image from the image database
      if (tempImage) {
        if (user.hasProfileImage) {
          const response = await deleteImage({ key: user.profileImage.imageName });
          if (response.error) {
            console.error('Error deleting image:', response.error);
            return;
          }
        }
      }

      // Update the user's profile image in the database
      trigger(userData);
      setEditMode(false);
      setTempImage(null);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  // const userHasProfilePic = false;
  // const totalLikes = mockUserProfile.trips.reduce((acc, trip) => acc + trip.likes, 0);
  // console.log(totalLikes);
  return (
    <div className="flex flex-col items-center justify-center absolute lg:-mt-16 bottom-0 lg:bottom-auto pb-3 lg:pb-0 -z-10 md:w-full">
      <div className="flex flex-col gap-3 md:gap-2 lg:gap-1 items-center mx-9 lg:mx-0 justify-center">
        <div className="flex flex-row lg:gap-6 gap-4 items-center justify-center">
          <div className="self-start" onClick={handleProfilePicClick}>
            <div
              className={`rounded-full border-4 border-white w-20 h-20 lg:w-32 lg:h-32 flex justify-center items-center overflow-hidden place-items-center bg-[#EBFBFE] lg:self-start relative ${editMode ? 'cursor-pointer' : ''}`}
            >
              {!user?.hasProfileImage ? (
                <ProfileIcon />
              ) : (
                <Image
                  alt="Profile Picture"
                  fill
                  src={editMode ? userData?.profileImage.imageUrl : user?.profileImage.imageUrl}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              )}
            </div>
            <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          </div>

          <div className="flex flex-col justify-evenly lg:justify-center w-fit lg:pt-5 lg:gap-2 gap-1">
            {!editMode ? (
              <h1 className="lg:text-3xl text-2xl font-semibold text-white w-fit pt-2 md:pt-1">
                {user?.username || 'name'}
              </h1>
            ) : (
              <input
                className={`peer focus:outline-none border-b-2 border-black w-full min-w-80 p-1 bg-transparent resize-none placeholder:text-xl placeholder:text-black/70 h-10 text-white text-2xl`}
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                spellCheck
              />
            )}
            <div className="lg:text-center text-left lg:min-w-80 h-9">
              {!editMode ? (
                // <p className="text-md text-black lg:pt-3 text-pretty">{mockUserProfile.bio}</p>
                <p className="text-md text-black lg:pt-3 text-pretty h-9">{user?.bio || 'Add a bio'}</p>
              ) : (
                <textarea
                  className={`peer focus:outline-none border-b border-black w-full min-w-80 p-1 bg-transparent resize-none placeholder:text-xl placeholder:text-black/70 text-md h-9`}
                  name="bio"
                  value={userData.bio}
                  onChange={handleInputChange}
                  spellCheck
                />
              )}
            </div>
            <div className="w-fit gap-5 rounded bg-white py-1 shadow-xl px-4 hidden lg:flex">
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{user?.trips?.length}</h3>
                <p className="text-sm">Trips</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{user?.likes || '0'}</h3>
                <p className="text-sm"> Likes</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-semibold">{user?.likes || '0'}</h3>
                <p className="text-sm"> Likes</p>
              </div>
            </div>
          </div>
          {!editMode ? (
            <button className="border p-2 rounded" onClick={handleEdit}>
              edit
            </button>
          ) : (
            <button className="border p-2 rounded" onClick={handleSave}>
              DONE
            </button>
          )}
        </div>
        <div className="flex gap-5 rounded bg-white py-1 shadow-xl px-4 lg:hidden">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">{user?.trips?.length}</h3>
            <p className="text-sm">Trips</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">{user?.likes || '0'}</h3>
            <p className="text-sm"> Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold">{user?.likes || '0'}</h3>
            <p className="text-sm"> Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
