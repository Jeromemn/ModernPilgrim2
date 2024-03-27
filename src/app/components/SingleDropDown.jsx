'use client';
import React, { useState, useRef, useEffect } from 'react';
import { DownChevron, PlaceIcon } from '@/app/icons';

const SingleDropDown = ({ options, filterBy, isInput, reverse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <div className="flex flex-col justify-center items-center lg:items-start gap-3">
      <div ref={dropDownRef} className="relative flex justify-between items-center py-1 h-auto">
        <button
          ref={dropDownRef}
          className="py-1 bg-gray-200 rounded-md focus:outline-none text-dark-black flex justify-center items-center gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="font-bold text-black"> {filterBy} </h1>
          <DownChevron color="#dda15e" />
        </button>
        {isOpen && !isInput && (
          <ul
            className={`absolute top-full right-0 w-40 bg-tan shadow-lg border rounded-md z-50 px-4 py-2 flex flex-col gap-2 ${reverse ? 'left-0' : 'right-0'}`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer flex justify-between ${selectedOptions.some((selectedOption) => selectedOption === option) ? 'text-black' : 'text-light-green'}`}
                onClick={() => handleSelect(option)}
              >
                {option}
                {selectedOptions.some((selectedOption) => selectedOption === option) && <PlaceIcon color="#212529" />}
              </li>
            ))}
          </ul>
        )}
        {isOpen && isInput && (
          <div className="absolute top-full right-0 w-40 bg-tan shadow-lg border rounded-md z-50 px-4 py-2 flex gap-2">
            <input className="w-16" type="text" placeholder="Min" />
            <input className="w-16" type="text" placeholder="Max" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleDropDown;
