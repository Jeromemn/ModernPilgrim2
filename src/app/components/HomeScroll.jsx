'use client';
import { ScrollProvider } from '@/app/ScrollContext';
import HomePageWrapper from '@/app/components/HomePageWrapper';

const HomeScroll = () => {
  return (
    <ScrollProvider>
      <HomePageWrapper></HomePageWrapper>
    </ScrollProvider>
  );
};

export default HomeScroll;
