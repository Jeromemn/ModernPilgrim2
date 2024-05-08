'use client';
import { useState, useEffect } from 'react';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import { LeftChevron, RightChevron, CalendarIcon } from '@/app/icons';

const months = [
  {
    month: 'January',
    abbreviation: 'Jan',
  },
  {
    month: 'February',
    abbreviation: 'Feb',
  },
  {
    month: 'March',
    abbreviation: 'Mar',
  },
  {
    month: 'April',
    abbreviation: 'Apr',
  },
  {
    month: 'May',
    abbreviation: 'May',
  },
  {
    month: 'June',
    abbreviation: 'Jun',
  },
  {
    month: 'July',
    abbreviation: 'Jul',
  },
  {
    month: 'August',
    abbreviation: 'Aug',
  },
  {
    month: 'September',
    abbreviation: 'Sep',
  },
  {
    month: 'October',
    abbreviation: 'Oct',
  },
  {
    month: 'November',
    abbreviation: 'Nov',
  },
  {
    month: 'December',
    abbreviation: 'Dec',
  },
];

const MonthPicker = ({ openDatePicker, setOpenDatePicker }) => {
  const { state, dispatch } = useFormContext();
  const [year, setYear] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  console.log('state month', state.month);

  useEffect(() => {
    const dateObj = new Date();
    const thisYear = dateObj.getFullYear();
    console.log(thisYear);
    setYear(thisYear);
  }, []);

  const onNextYear = () => {
    setYear(year + 1);
  };

  const onPrevYear = () => {
    setYear(year - 1);
  };

  const handleMonthChange = (month) => {
    dispatch({ type: 'monthChange', payload: { monthName: month, year } });
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setOpenDatePicker('month');
  };
  useEffect(() => {
    if (openDatePicker !== 'month') {
      setIsOpen(false);
    }
  }, [openDatePicker]);

  return (
    <div className="relative">
      <button className="flex justify-between border-b-2 px-2 gap-2 w-fit text-3xl items-baseline" onClick={handleOpen}>
        {state.month.year && state.month.monthName ? (
          <p>{`${state.month.monthName}, ${state.month.year}`}</p>
        ) : (
          <p>Month</p>
        )}
        <CalendarIcon size={22} color="black" />
      </button>
      {isOpen && (
        <div className="flex flex-col w-fit border p-2 rounded-xl bg-white/30 gap-1 fixed">
          <div className="flex justify-between items-center gap-2">
            <button className="rounded-full flex justify-center items-center" onClick={onPrevYear}>
              <LeftChevron color="#dda15e" />
            </button>
            <p className="align-middle text-lg">{year}</p>
            <button className="rounded-full flex justify-center items-center" onClick={onNextYear}>
              <RightChevron color="#dda15e" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {months.map(({ month, abbreviation }) => (
              <button
                className="bg-white/80 rounded w-10 p-1 hover:bg-light-green/80 text-black"
                key={month}
                onClick={() => handleMonthChange(month)}
              >
                {abbreviation}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthPicker;
