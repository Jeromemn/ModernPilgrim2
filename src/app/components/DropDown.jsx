'use client';
import React, { useState, useRef, useEffect } from 'react';
import { DownChevron, PlaceIcon, CloseIcon } from '@/app/icons';

const DropDown = ({ options, filterBy }) => {
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
      <div className="flex w-full justify-start">
        <h1 className=""> Filter by {filterBy}</h1>
      </div>
      <div
        ref={dropDownRef}
        className="relative w-full lg:w-96 border border-green rounded-2xl flex justify-between items-center px-2 py-1 h-auto"
      >
        {selectedOptions.length === 0 && <p className="text-gray-400 w-full">Select an option</p>}
        <div className="flex max-w-[288px] max-h-[60px] overflow-y-scroll flex-wrap gap-2">
          {selectedOptions.length > 0 &&
            selectedOptions.map((selectedOption, index) => (
              <div
                key={index}
                className="flex justify-center items-center px-2 gap-2 bg-light-brown border rounded-2xl"
              >
                <p className="">{selectedOption}</p>
                <button onClick={() => handleSelect(selectedOption)}>
                  <CloseIcon />
                </button>
              </div>
            ))}
        </div>
        <button
          className="px-4 py-1 bg-gray-200 rounded-md focus:outline-none text-dark-black flex justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <DownChevron />
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md rounded-md z-50">
            {options.map((option, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer flex justify-between ${selectedOptions.some((selectedOption) => selectedOption === option) ? 'text-black' : 'text-light-green'}`}
                onClick={() => handleSelect(option)}
              >
                {option}
                {selectedOptions.some((selectedOption) => selectedOption === option) && <PlaceIcon color="#212529" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
