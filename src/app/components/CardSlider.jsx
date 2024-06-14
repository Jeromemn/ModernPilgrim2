'use client';
import React, { useRef } from 'react';
import useTrips from '@/app/hooks/useTrips';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftChevron, RightChevron, Line } from '@/app/icons';
import TripCard from '@/app/components/Cards/TripCard';

const CardSlider = ({ sliderTitle, sliderDescription }) => {
  const { trips, isLoading, isError } = useTrips();
  console.log(trips, isLoading, isError);
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="xl:w-full flex flex-col justify-center overflow-hidden xl:pl-44 gap-y-8 md:gap-y-16 pb-16 md:pb-12 md:mx-auto my-0 md:pl-8 mx-5">
      <div className="flex justify-center w-full xl:pr-44 container">
        <div className="w-full flex justify-between xl:pl-5 xl:pr-10 md:pr-8">
          <div className="flex flex-col gap-y-4 w-fit">
            <h2 className="w-fit">{sliderTitle}</h2>
            <Line color="#dda15e" style={{ width: '60%' }} />
            <p className="w-fit">{sliderDescription}</p>
          </div>
          <div className="flex space-x-4 items-end">
            <button
              onClick={previous}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-green text-white"
            >
              <LeftChevron color="#fffdf2" />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-light-brown text-white"
            >
              <RightChevron color="#fffdf2" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start">
        <div className="w-full relative overflow-y-hidden self-start justify-self-start">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {trips?.map(
              ({ hasTripImage, _id, tripBudget, title, displayDate, location, tripImages, tripType, month, likes }) => (
                <TripCard
                  key={_id}
                  hasTripImage={hasTripImage}
                  tripId={_id}
                  tripBudget={tripBudget}
                  name={title}
                  displayDate={displayDate}
                  location={location}
                  imgSrc={tripImages}
                  cost={tripBudget}
                  tripType={tripType}
                  likes={likes}
                  month={month}
                />
              ),
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
