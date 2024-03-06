'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImage, LeftChevron, RightChevron } from '@/app/icons';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

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

const CategoryBanner = ({ category }) => {
  const [currentImage, setCurrentImage] = useState(0);
  let sliderRef = useRef(null);
  console.log(currentImage);

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
  // const handleNextImage = () => {
  //   if (currentImage === MockImageGallery.length - 1) setCurrentImage(0);
  //   else setCurrentImage((currentImage + 1) % MockImageGallery.length);
  //   setCurrentImage((currentImage + 1) % MockImageGallery.length);
  // };

  // const handlePreviousImage = () => {
  //   if (currentImage === 0) setCurrentImage(MockImageGallery.length - 1);
  //   else setCurrentImage((currentImage - 1 + MockImageGallery.length) % MockImageGallery.length);
  // };

  return (
    <div className="w-full flex justify-center overflow-hidden bg-brown">
      <div className="flex flex-col gap-8 relative p-8 container ">
        <div className="flex justify-between items-end container ">
          <div className="flex flex-col gap-y-5">
            <h2>{category}</h2>
            <p> Category Description </p>
          </div>
          <div className="flex space-x-4 align-bottom">
            <button
              onClick={previous}
              className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black bg-opacity-50 text-white"
            >
              <LeftChevron />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black bg-opacity-50 text-white"
            >
              <RightChevron />
            </button>
          </div>
        </div>
        {/*<div className="mt-6">*/}
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {MockImageGallery.map((image, index, imgSrc) => (
            <div key={index} className="flex max-w-80 h-56 rounded-2xl p-3 relative">
              <Image src={image.imgSrc} alt={image.title} fill className="rounded-2xl" />
              {/*<PlaceHolderImage imageName={imgSrc} width={200} height={150} />*/}
              <div className="flex z-50 w-full h-full">
                <h3 className="text-white text-xl h-fit z-50">{image.title}</h3>
              </div>
            </div>
          ))}
        </Slider>

        {/*{MockImageGallery.map((image, index) => (*/}
        {/*  <div className="flex-shrink-0 w-96 rounded-lg bg-cover bg-center border" key={index}>*/}
        {/*    <PlaceHolderImage />*/}
        {/*    <div className="p-4">*/}
        {/*      <p> Locations, Location </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*))}*/}
        {/*{MockImageGallery.map(({ imgSrc, index, title }) => (*/}
        {/*  <div*/}
        {/*    id="card"*/}
        {/*    className={`card flex-shrink-0 w-96 rounded-lg bg-cover bg-center border ease-out duration-40`}*/}
        {/*    style={{ transform: `translateX(-${currentImage + '384px'})` }}*/}
        {/*    key={index}*/}
        {/*  >*/}
        {/*    <PlaceHolderImage imageName={imgSrc} />*/}
        {/*    <div className="p-4">*/}
        {/*      <p> {title}</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*))}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default CategoryBanner;
