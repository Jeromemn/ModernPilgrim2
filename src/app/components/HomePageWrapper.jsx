'use client';
import { useContext, useEffect, useRef, useMemo } from 'react';
import { ScrollContext } from '@/app/ScrollContext';
import CardSlider from '@/app/components/CardSlider';
import DestinationTypes from '@/app/components/DestinationTypes';
import DestinationActivities from '@/app/components/DestinationActivities';
import Hero from '@/app/components/Hero';
import CategoryBanner from '@/app/components/CategoryBanner';
import Login from '@/app/components/loginSignup/Login';
import SignupSignIn from '@/app/components/loginSignup/SignupSignIn';

const HomePageWrapper = () => {
  const { scrolled } = useContext(ScrollContext);
  // const heroRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pageContentClasses = useMemo(() => {
    let classes = 'flex flex-col h-screen justify-end transition-all duration-500 ease-in-out';
    classes += scrolled ? ' afterScroll' : ' beforeScroll';
    return classes;
  }, [scrolled]);

  return (
    <div className="">
      <Hero />
      <div className={pageContentClasses}>
        <div className="h-3/4">
          {/*<Login />*/}
          <SignupSignIn />
          {/*<CardSlider sliderTitle="Popular Destinations" sliderDescription="Most popular destinations from users" />*/}
          <DestinationTypes />
          {/*<CardSlider sliderTitle="Best Deals" sliderDescription="Most cost effective trips" />*/}
          <DestinationActivities />
          {/*<CategoryBanner category="Popular Destinations" />*/}
        </div>
      </div>
    </div>
  );
};

export default HomePageWrapper;
