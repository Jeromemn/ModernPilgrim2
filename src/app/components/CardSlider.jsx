'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { LeftChevron, RightChevron, PlaceIcon, Line } from '@/app/icons';
import Image from 'next/image';

const MockImageGallery = [
  { imgSrc: '/beachTrip.jpg', title: 'place 1' },
  { imgSrc: '/beachTrip.jpg', title: 'place 2' },
  { imgSrc: '/beachTrip.jpg', title: 'place 3' },
  { imgSrc: '/beachTrip.jpg', title: 'place 4' },
  { imgSrc: '/beachTrip.jpg', title: 'place 5' },
  { imgSrc: '/beachTrip.jpg', title: 'place 6' },
  { imgSrc: '/beachTrip.jpg', title: 'place 7' },
  { imgSrc: '/beachTrip.jpg', title: 'place 8' },
  { imgSrc: '/beachTrip.jpg', title: 'place 9' },
];

const CardSlider = ({ sliderTitle, sliderDescription }) => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    // centerPadding: "60px",
    variableWidth: true,
    // adaptiveHeight: true,
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
          slidesToShow: 3,
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
    <div className="xl:w-full flex flex-col justify-center overflow-hidden xl:pl-44 gap-y-8 md:gap-y-16 pb-16 md:pb-32 md:mx-auto my-0 md:pl-8 mx-5">
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
              <LeftChevron />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-light-brown text-white"
            >
              <RightChevron />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-start md:max-h-56">
        <div className="w-full relative md:max-h-56 overflow-y-hidden self-start justify-self-start">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {MockImageGallery.map((image, index) => (
              <div
                key={index}
                className="md:max-w-80 md:w-80 md:min-w-80 md:h-56 h-64 w-96 flex relative rounded-2xl flex-col p-3"
              >
                <Image src={image.imgSrc} alt={image.title} fill className="rounded-2xl h-full -z-20" />
                <div className="flex z-50 w-full h-full items-end gap-x-4">
                  <div className="flex items-center justify-center gap-x-4">
                    <PlaceIcon />
                    <h3 className="text-white text-2xl h-fit z-50">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
