import Header from '@/app/components/Header';
import ProfileBanner from '@/app/components/ProfileBanner';
const ProfileLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 h-screen w-screen">
      <Header />
      <div className='w-full flex justify-center'>
        <div className="flex flex-col gap-7 px-6 items-center w-10/12">
          <ProfileBanner />
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
