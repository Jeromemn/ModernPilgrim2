import HomeHeader from '@/app/components/HomeHeader';
import ProfileBanner from '@/app/components/ProfileBanner';
const ProfileLayout = ({ children }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <HomeHeader background />
      <div className="flex flex-col mt-20 mx-auto h-full overflow-hidden lg:gap-4 gap-8">
        <ProfileBanner />
        <div className="flex lg:justify-start justify-center lg:items-center overflow-scroll pb-10 ">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
