'use client';
import { useState, useEffect } from 'react';
import Modal from '@/app/components/Modal';
import { MobileMenuIcon } from '@/app/icons';
import FormModal from '@/app/components/AddTripPost/FormModal';
import Image from 'next/image';
import Link from 'next/link';
const HomeHeader = ({ background }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmitModal = () => {
    setIsSubmitModalOpen(!isSubmitModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className={`flex flex-row w-full h-20 fixed lg:justify-center p-4 lg:p-6 top-0 `}>
      {background && (
        <Image src="/HeroPlaceHolder.jpg" alt="Modern Pilgrims" fill priority className="object-cover brightness-50 " />
      )}
      <div className="flex lg:w-5/6 w-full justify-between items-center z-30">
        <Link href="/">
          <h1 className="text-white font-bold text-3xl">Modern Pilgrim</h1>
        </Link>
        <ul className="flex-row text-white font-bold gap-6 hidden lg:flex">
          <li>
            <a href="/searchResults">Explore</a>
          </li>
          <li className="cursor-pointer" onClick={toggleSubmitModal}>
            Submit Voyage
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
        <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
          <div className="flex w-full justify-between items-center z-10 relative">
            <h1 className="text-white font-bold text-3xl">Modern Pilgrim</h1>
            <button onClick={toggleMenu}>
              <MobileMenuIcon />
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
              <li className="cursor-pointer" onClick={toggleSubmitModal}>
                Submit Voyage
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
        <FormModal isOpen={isSubmitModalOpen} onClose={toggleSubmitModal} />
      </div>
    </div>
  );
};

export default HomeHeader;
