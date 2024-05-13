'use client';
import { useContext, useEffect, useRef, useMemo } from 'react';
import { ScrollContext } from '@/app/ScrollContext';
import CardSlider from '@/app/components/CardSlider';
import DestinationTypes from '@/app/components/DestinationTypes';
import DestinationActivities from '@/app/components/DestinationActivities';
import Hero from '@/app/components/Hero';

const HomePageWrapper = () => {
  const { scrolled } = useContext(ScrollContext);
  const heroRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pageContentClasses = useMemo(() => {
    let classes = 'flex flex-col h-screen justify-end -z-10 transition-all duration-500 ease-in-out';
    classes += scrolled ? ' afterScroll' : ' beforeScroll';
    return classes;
  }, [scrolled]);

  return (
    <div>
      <Hero ref={heroRef} />
      <div className={pageContentClasses}>
        <div className="h-3/4">
          <CardSlider sliderTitle="Popular Destinations" sliderDescription="Most popular destinations from users" />
          <DestinationTypes />
          <CardSlider sliderTitle="Best Deals" sliderDescription="Most cost effective trips" />
          <DestinationActivities />
        </div>
      </div>
    </div>
  );
};

export default HomePageWrapper;
