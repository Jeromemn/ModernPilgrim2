'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { LeftChevron, RightChevron, PlaceIcon } from '@/app/icons';
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
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="w-full flex flex-col justify-center overflow-hidden pl-44 gap-y-16 pb-32">
      <div className="flex justify-center w-full pr-44">
        <div className="w-full flex justify-between pl-5 pr-10">
          <div className="flex flex-col gap-y-5">
            <h2>{sliderTitle}</h2>
            <p>{sliderDescription}</p>
          </div>
          <div className="flex space-x-4 items-end">
            <button
              onClick={previous}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-green  text-white"
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

      <div className="w-full flex justify-end">
        <div className="w-full overflow-visible right-0 relative">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
            className="w-full"
          >
            {MockImageGallery.map((image, index) => (
              <div key={index} className="max-w-80 w-80 min-w-80 h-56 flex relative rounded-2xl flex-col p-3">
                <Image src={image.imgSrc} alt={image.title} fill className="rounded-2xl h-full -wfull -z-20" />
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
