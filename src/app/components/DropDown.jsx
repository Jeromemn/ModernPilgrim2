'use client';
import React, { useState, useRef, useEffect } from 'react';
import { DownCheveron } from '@/app/icons';

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
        className="relative w-full lg:w-96 border border-green rounded-2xl flex justify-between items-center px-2 py-1 "
      >
        <p>{selectedOptions.length === 0 ? 'Select an option' : selectedOptions + ','}</p>
        <button
          className="px-4 py-1 bg-gray-200 rounded-md focus:outline-none text-dark-black flex justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <DownCheveron />
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md rounded-md z-50">
            {options.map((option, index) => (
              <li
                key={index}
                // className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-light-green"
                className={`px-4 py-2 cursor-pointer ${selectedOptions.some((selectedOption) => selectedOption === option) ? 'bg-light-green' : 'bg-white'}`}
                onClick={() => handleSelect(option)}
                // onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
