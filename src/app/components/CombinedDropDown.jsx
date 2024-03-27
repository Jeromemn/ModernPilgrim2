'use client';
import React, { useState, useRef, useEffect } from 'react';
import { DownChevron } from '@/app/icons';

const CombinedDropDown = ({ options }) => {
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
    <div className="flex flex-col w-full lg:w-96 justify-center items-center lg:items-start gap-3">
      <div
        ref={dropDownRef}
        className="relative w-full lg:w-96 border border-green rounded-2xl flex justify-between items-center px-2 py-1 h-auto"
      >
        <p className="text-gray-400 w-full">Filters</p>
        <button
          className="px-4 py-1 bg-gray-200 rounded-md focus:outline-none text-dark-black flex justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <DownChevron />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md z-50 grid grid-cols-2 grid-flow-col">
            <div className="flex flex-col w-full h-fit px-4 py-2 row-span-1">
              <h1 className="font-medium"> Price </h1>
              <div className="flex justify-between">
                <input className="w-fit max-w-12" type="text" placeholder="Min" />
                <input className="w-fit max-w-12" type="text" placeholder="Max" />
              </div>
            </div>
            <ul className="flex flex-col px-4 py-2 gap-2 row-span-1">
              <h1 className="font-medium">Type</h1>
              {options[0].map((option, index) => (
                <li
                  key={index}
                  className={` min-w-fit cursor-pointer ${selectedOptions.some((selectedOption) => selectedOption === option) ? 'text-black' : 'text-light-green'}`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>

            <ul className="flex flex-col px-4 py-2 gap-2 row-span-2">
              <h1 className="font-medium">Activities</h1>
              {options[1].map((option, index) => (
                <li
                  key={index}
                  className={`min-w-fit cursor-pointer ${selectedOptions.some((selectedOption) => selectedOption === option) ? 'text-black' : 'text-light-green'}`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CombinedDropDown;
