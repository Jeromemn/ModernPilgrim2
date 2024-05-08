'use client';
import { useState, useEffect } from 'react';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import { CalendarIcon } from '@/app/icons';
import Calendar from '@/app/components/AddTripPost/Calendar';

const DatePicker = ({ dateType, openDatePicker, setOpenDatePicker }) => {
  const { state } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setOpenDatePicker(dateType);
  };
  useEffect(() => {
    if (openDatePicker !== dateType) {
      setIsOpen(false);
    }
  }, [dateType, openDatePicker]);
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col relative">
      <button
        className="flex justify-between border-b-2 px-2 gap-2 w-fit text-3xl items-baseline text-black"
        onClick={handleOpen}
      >
        {dateType === 'start' ? (
          state.startDate ? (
            <p>{state.startDate}</p>
          ) : (
            <p>Start Date</p>
          )
        ) : state.endDate ? (
          <p>{state.endDate}</p>
        ) : (
          <p>End Date</p>
        )}
        <CalendarIcon size={22} color="#212529" />
      </button>
      {isOpen && (
        <div className="relative">
          <Calendar dateType={dateType} onClose={onClose} className="fixed z-10" />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
