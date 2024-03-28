import { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, children }) => {
  const [bodyOverflow, setBodyOverflow] = useState('');

  useEffect(() => {
    // When the modal opens, prevent scrolling on the body element
    if (isOpen) {
      const originalOverflow = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      setBodyOverflow(originalOverflow);
    }

    // When the modal closes, restore the original overflow property of the body element
    return () => {
      document.body.style.overflow = bodyOverflow;
    };
  }, [isOpen, bodyOverflow]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 bg-black bg-opacity-50">
      <div className="relative rounded-lg w-full h-full max-h-lvh">
        <Image src="/boat2.jpg" alt="image" sizes="100vw" fill style={{ objectFit: 'cover' }} />
        <div className="p-4 lg:p-6 flex flex-col">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
