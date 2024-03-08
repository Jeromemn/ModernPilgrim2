'use client';
import React, { useRef } from 'react';
import Carousel from 'nuka-carousel';
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
const NukaCarousel = () => {
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = React.useState(0);
  const totalSlides = MockImageGallery.length;
  console.log('carouselRef', carouselRef);
  const params = {
    slidesToShow: 4,
    wrapAround: true,
    withoutControls: true,
    // cellAlign: 'left',
    // defaultControlsConfig: {
    //   nextButtonOnClick: () => nextSlide(),
    // },
    // controlProps: {
    //   currentSlide: 0,
    //   nextSlide: () => nextSlide(),
    //   previousSlide: () => previousSlide(),
    // },
  };

  // const handleNextSlide = () => {
  //   // if (carouselRef.current && typeof carouselRef.current.nextSlide === 'function') {
  //   //   carouselRef.current.nextSlide();
  //   // }
  //   if (carouselRef.current) {
  //     carouselRef.current.nextSlide();
  //   }
  // };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => {
      if (prevIndex === totalSlides - 1) {
        return 0; // Go to the first slide
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePreviousSlide = () => {
    setSlideIndex((prevIndex) => {
      if (prevIndex === 0) {
        return totalSlides - 1; // Go to the last slide
      } else {
        return prevIndex - 1;
      }
    });
  };

  // const previousSlide = () => {
  //   if (carouselRef.current && typeof carouselRef.current.previousSlide === 'function') {
  //     carouselRef.current.previousSlide();
  //   }
  // };

  return (
    <div className="mx-auto w-3/4">
      <div className=" flex gap-6">
        <button className="bg-black text-white p-5" onClick={handlePreviousSlide}>
          Previous
        </button>
        <button className="bg-black text-white p-5" onClick={handleNextSlide}>
          Next
        </button>
      </div>
      <Carousel
        ref={carouselRef}
        slideIndex={slideIndex}
        afterSlide={(newIndex) => setSlideIndex(newIndex)}
        {...params}
      >
        {MockImageGallery.map((image, index) => (
          <div key={index} className="w-80 h-56 border flex relative rounded-2xl flex-col p-3">
            <Image src={image.imgSrc} alt={image.title} fill className="rounded-2xl" />
            {/*<PlaceHolderImage imageName={imgNumber} width={200} height={150} />*/}
            <div className="flex z-50 w-full h-full">
              <h3 className="text-white text-xl h-fit z-50">{image.title}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NukaCarousel;
