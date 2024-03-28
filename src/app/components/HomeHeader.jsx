'use client';
import { useState } from 'react';
import Modal from '@/app/components/Modal';
import { CloseIcon, MobileMenuIcon } from '@/app/icons';
const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row w-full absolute lg:justify-center p-4 lg:p-6 top-0 z-50">
      <div className="flex lg:w-5/6 w-full justify-between items-center">
        <h1 className="text-white font-bold text-3xl">Modern Pilgrim</h1>
        <ul className="flex-row text-white font-bold gap-6 hidden lg:flex">
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="#">Submit Voyage</a>
          </li>
          <li>
            <a href="/profile">My Profile</a>
          </li>
          <li>
            <a href="/profile">Sign Up</a>
          </li>
        </ul>
        <button className="flex lg:hidden" onClick={toggleMenu}>
          <MobileMenuIcon />
        </button>
        <Modal isOpen={isOpen} onClose={toggleMenu}>
          <div className="flex w-full justify-between items-center z-10 relative">
            <h1 className="text-white font-bold text-3xl">Modern Pilgrim</h1>
            <button onClick={toggleMenu}>
              <CloseIcon color="#fff" />
            </button>
          </div>
          <div className="flex justify-center h-full items-center relative pt-10">
            <ul className="flex flex-col gap-10 font-bold text-white text-2xl text-center">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/searchResults">Explore</a>
              </li>
              <li>
                <a href="#">Submit Voyage</a>
              </li>
              <li>
                <a href="/profile">My Profile</a>
              </li>
              <li>
                <a href="/profile">Sign Up</a>
              </li>
            </ul>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default HomeHeader;
