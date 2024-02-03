import Header from "@/app/components/Header";
import ProfileBanner from "@/app/components/ProfileBanner";
const ProfileLayout = ({ children }) => {
    return (
        <div className='flex flex-col gap-4 h-screen w-screen'>
      <Header/>
            <div className='flex flex-col gap-3 px-6 h-screen'>

     <ProfileBanner/>
            {children}
            </div>
        </div>
    );
};

export default ProfileLayout