'use client';
import React, { useState, useEffect } from 'react';
import { DestinationIcon, HeartIcon } from '@/app/icons';
import Image from 'next/image';
import Link from 'next/link';
import useTrip from '@/app/hooks/useTrip';
import HomeHeader from '@/app/components/HomeHeader';
import {
  BikingIcon,
  ConcertIcon,
  GolfIcon,
  HikingIcon,
  NatureWatching,
  OffRoadingIcon,
  ScubaIcon,
  SightSeeingIcon,
  SnowSportsIcon,
  SportingEventsIcon,
  SurfingIcon,
  VisitIcon,
  WaterSportsIcon,
  WineIcon,
} from '@/app/icons/destinationActivities';
import ProfileIcon from '@/app/icons/ProfileIcon';

const activityIcons = {
  'Scuba Diving': <ScubaIcon />,
  Hiking: <HikingIcon />,
  Sightseeing: <SightSeeingIcon />,
  Golfing: <GolfIcon />,
  'Water Sports': <WaterSportsIcon />,
  'Wine Tasting': <WineIcon />,
  'Snow Sports': <SnowSportsIcon />,
  Concerts: <ConcertIcon />,
  'Nature Watching': <NatureWatching />,
  Biking: <BikingIcon />,
  'Sporting Events': <SportingEventsIcon />,
  Surfing: <SurfingIcon />,
  'Iconic Destinations': <VisitIcon />,
  'Off Roading': <OffRoadingIcon />,
  Museums: <SightSeeingIcon />,
  'Food Tasting': <WineIcon />,
};

const SingleTrip = ({ params: { tripId } }) => {
  const { trip, isLoading, isError } = useTrip(tripId);
  console.log(trip, isLoading, isError);

  useEffect(() => {
    if (trip) {
      setPreviousImage(trip.tripImages[0].tripImageUrl);
      setCurrentImage(trip.tripImages[0].tripImageUrl);
    }
  }, [trip]);

  const [previousImage, setPreviousImage] = useState(trip?.tripImages[0].tripImageUrl);
  const [opacity, setOpacity] = useState(1);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [currentImage, setCurrentImage] = useState(trip?.tripImages[0].tripImageUrl);

  useEffect(() => {
    if (isImageSelected) {
      setOpacity(1);
      const timer = setTimeout(() => {
        setPreviousImage(currentImage);
        setOpacity(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentImage, isImageSelected]);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('liked');
  };

  let gridClass;
  if (trip?.activities?.length <= 3) {
    gridClass = 'grid-cols-1';
  } else if (trip?.activities?.length > 3 && trip?.activities?.length <= 7) {
    gridClass = 'grid-cols-2';
  } else {
    gridClass = 'grid-cols-3';
  }

  return (
    <div className="h-max -z-50">
      <div className="fixed top-0 h-32 w-full lg:h-44 z-10">
        <Image
          src="/HeroPlaceHolder.jpg"
          alt="boat on water"
          fill
          priority
          className="object-cover object-center brightness-80 z-0 "
        />
        <div className="w-full h-full flex overflow-hidden bg-black rounded-lg opacity-40 "></div>
        <HomeHeader />
      </div>
      <div className="flex flex-col mb-16 mt-32 lg:mt-44 justify-center h-full">
        <div className="flex flex-col items-center xl:max-w-screen-xl 2xl:max-w-screen-2xl md:mx-10 xl:mx-auto pt-8 gap-y-14 ">
          <div className="flex flex-col lg:flex-row xl:gap-16 gap-6 w-full h-full">
            <div className="grid grid-cols-1 w-full lg:w-1/2 h-full gap-2">
              {trip?.tripImages.length > 0 && (
                <div className="w-full h-60 md:h-72 lg:h-96 relative">
                  <Image
                    alt="Previous trip image"
                    className="rounded-lg absolute"
                    fill
                    src={previousImage}
                    style={{
                      aspectRatio: '695/420',
                      objectFit: 'cover',
                      transition: 'opacity .45s ease-out',
                      opacity: 3 - opacity,
                      willChange: 'opacity',
                    }}
                  />
                  <Image
                    alt="Trip image"
                    className="rounded-lg"
                    fill
                    src={currentImage}
                    style={{
                      aspectRatio: '695/420',
                      objectFit: 'cover',
                      transition: 'opacity .5s ease-in',
                      opacity: opacity,
                      willChange: 'opacity',
                    }}
                  />
                </div>
              )}

              <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-2 h-24">
                {trip?.tripImages.map((tripImage, id) => (
                  <div
                    key={id}
                    className="w-full h-full rounded-lg relative"
                    onMouseEnter={() => {
                      setCurrentImage(tripImage.tripImageUrl);
                      setIsImageSelected(true);
                    }}
                  >
                    <Image
                      alt="Trip image"
                      className="rounded-lg w-full "
                      fill
                      src={tripImage.tripImageUrl}
                      style={{
                        aspectRatio: '195/157',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-11/12 mx-auto md:w-full md:mx-0 lg:w-1/2">
              <div className="flex justify-between border-b border-black/50 lg:pb-3 pb-5">
                <div className="flex gap-3 items-center">
                  <DestinationIcon />
                  <h3 className="secondary-header text-black">{trip?.location}</h3>
                </div>
                <button className="flex self-end heart-icon-hover" onClick={handleLike}>
                  <HeartIcon size={32} outlineColor="#212529" />
                </button>
              </div>
              <div className="flex items-center gap-4 border-b border-black/50 lg:py-3 py-5">
                <div className="w-12 h-12">
                  <ProfileIcon />
                </div>
                <div>
                  <div className="flex flex-col lg:flex-row lg:gap-3 lg:items-center">
                    <h3 className="text-xl font-semibold">{trip?.title}</h3>
                    <Link href={`/profile/${trip?.userId}/account`}>
                      <p> Posted by {trip?.userName}</p>
                    </Link>
                  </div>
                  <h3>
                    {trip?.month.monthName}, {trip?.month.year}
                  </h3>
                  <div className="flex gap-3">
                    <h3>Cost: ${trip?.tripBudget}</h3>
                    <div className="flex gap-2 items-center">
                      <p>Likes: {trip?.likes}</p>
                      <HeartIcon size={20} outlineColor="black" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-black/50 lg:py-3 py-5">
                <p> {trip?.description}</p>
              </div>
              <div className="border-b border-black/50 lg:py-3 py-5 flex flex-col gap-2">
                <h3 className="secondary-header">Activities</h3>
                <ul className={`grid grid-cols-2 lg:${gridClass} gap-2`}>
                  {trip?.activities.map((activity, description, id) => (
                    <div className="flex items-center gap-1 h-8" key={`${activity}${id}`}>
                      <div className="">{activityIcons[activity]}</div>
                      <li className="">{activity}</li>
                    </div>
                  ))}
                </ul>
              </div>
              <button className="hidden p-2 border rounded bg-brown justify-self-end text-tan max-w-28">
                Save Trip
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center mx-auto md:mx-0 xl:max-w-3/4 w-11/12 md:w-full ">
            <h3 className="secondary-header text-light-green">Tips for this trip</h3>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {trip?.tips.map((tip, id) => (
                <div key={`tips${id}`} className="min-h-28 rounded-xl bg-white p-3 shadow-xl">
                  <h3 className="font-bold text-center"> {tip.category} </h3>
                  <p className="text-center text-wrap w-full"> {tip.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrip;
