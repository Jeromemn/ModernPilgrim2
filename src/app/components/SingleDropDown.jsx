'use client';
import React, { useState, useRef, useEffect } from 'react';
import { DownChevron, PlaceIcon, Money } from '@/app/icons';

const SingleDropDown = ({ options, filterBy, isInput, reverse, inline, dark, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 768) {
        return;
      }
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    const index = selectedOptions.findIndex((selectedOption) => selectedOption === option);
    if (index === -1) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    }
  };
  const handleSelect = (option) => {
    toggleOption(option);
  };

  return (
    <div className="lg:flex flex-col justify-center items-center lg:items-start gap-3">
      <div
        ref={dropDownRef}
        className="relative flex flex-col lg:flex-row justify-center lg:justify-between items-center py-1 h-auto w-full"
      >
        <button
          ref={dropDownRef}
          className="py-1 bg-gray-200 rounded-md focus:outline-none text-dark-black flex justify-center items-center gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className={`font-bold lg:text-black text-xl ${dark ? 'text-black' : 'text-white'}`}> {filterBy} </h1>
          <DownChevron color={color} />
        </button>
        {isOpen && !isInput && (
          <ul
            className={`absolute top-full right-0 w-40 lg:w-fit lg:gap-2 lg:bg-tan shadow-lg border rounded-md z-50 lg:px-4 lg:py-2 ${reverse ? 'left-0' : 'right-0'} ${inline ? 'z-0 relative shadow-none xsm:grid grid-cols-2 w-full items-center flex flex-col flex-wrap border rounded-2xl lg:border-none bg-black/20 text-white' : 'flex flex-col bg-tan'}`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer xsm:even:border-l lg:border-none px-4 lg:p-0 xsm:px-0 xsm:pl-3 xsm:pr-1 h-full flex justify-between text-start py-2 place-items-start font-bold w-full lg:w-40 ${dark ? 'text-black' : 'text-white'} lg:text-black`}
                onClick={() => handleSelect(option)}
              >
                {option}
                {selectedOptions.some((selectedOption) => selectedOption === option) && <PlaceIcon color="#212529" />}
              </li>
            ))}
          </ul>
        )}
        {isOpen && isInput && (
          <div
            className={`absolute top-full right-0 w-full lg:w-fit bg-tan shadow-lg border rounded-md z-50 lg:px-4 py-2 flex gap-5 items-center justify-center ${inline ? 'z-0 bg-transparent relative border-0 shadow-none px-0' : ''}`}
          >
            <label htmlFor="min" className="text-white font-bold lg:text-black">
              <span>Min</span>
              <div className="border rounded-2xl px-3 py-1 lg:border-none bg-black/20 text-white font-bold lg:text-black placeholder:text-black flex focus-within:shadow-lg">
                <Money color="white" />
                <input
                  className="w-16 text-white font-bold lg:text-black bg-transparent focus:outline-none placeholder:text-white/80"
                  type="text"
                />
              </div>
            </label>
            <label htmlFor="max" className="text-white font-bold lg:text-black">
              <span> Max </span>
              <div className="border rounded-2xl px-3 py-1 lg:border-none bg-black/20 text-white font-bold lg:text-black placeholder:text-black flex focus-within:shadow-lg">
                <Money color="white" />
                <input
                  className="w-16 text-white font-bold lg:text-black bg-transparent focus:outline-none placeholder:text-white/80"
                  type="text"
                />
              </div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleDropDown;
