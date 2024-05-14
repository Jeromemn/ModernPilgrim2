'use client';
import { useRef } from 'react';
import { LeftChevron, RightChevron } from '@/app/icons';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import TripCard from '@/app/components/Cards/TripCard';

const MockImageGallery = [
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 1', price: 100 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 2', price: 200 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 3', price: 300 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 4', price: 400 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 5', price: 500 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 6', price: 600 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 7', price: 700 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 8', price: 800 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 9', price: 900 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 10', price: 1000 },
  { imgSrc: ['/beachTrip.jpg', '/HeroPlaceHolder.jpg'], title: 'place 11', price: 1100 },
];

// option for the carousel to be used in the category banner

const CategoryBanner = ({ category }) => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    className: 'center',
    // variableWidth: true,

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
    <div className="w-full flex justify-center overflow-hidden pb-32">
      <div className="flex flex-col gap-8 relative container">
        <div className="flex justify-between items-end pl-5 pr-14">
          <div className="flex flex-col gap-y-5">
            <h2>{category}</h2>
            <p> Category Description </p>
          </div>
          <div className="flex space-x-4 align-bottom">
            <button
              onClick={previous}
              className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black bg-opacity-50 text-white"
            >
              <LeftChevron color="#fffdf2" />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black bg-opacity-50 text-white"
            >
              <RightChevron color="#fffdf2" />
            </button>
          </div>
        </div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {MockImageGallery.map(({ imgSrc, title, price }, index) => (
            <TripCard imgSrc={imgSrc} key={index} location={title} cost={price} tripId={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryBanner;
