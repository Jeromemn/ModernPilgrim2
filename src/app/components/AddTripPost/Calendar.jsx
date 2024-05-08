'use client';
import React, { useState } from 'react';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import {
  calendar,
  isDate,
  isSameDay,
  getNextMonth,
  getPreviousMonth,
  monthDayYear,
  WEEK_DAYS,
  CALENDAR_MONTHS,
} from '../../utils/calendarHelpers';
import { LeftChevron, RightChevron } from '@/app/icons';
import { MonthClosed, MonthOpen } from '@/app/icons/CalendarParts';

export default function Calendar({ dateType, onClose, className }) {
  const { dispatch } = useFormContext();
  const currentDate = new Date();
  const [dateState, setDateState] = useState({
    current: currentDate,
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [openMonths, setOpenMonths] = useState(false);

  const currentYear = currentDate.getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);
  const [openYears, setOpenYears] = useState(false);
  const handleYearChange = (e) => {
    setDateState((prev) => ({
      ...prev,
      year: parseInt(e.target.value),
      current: prev.current,
      month: prev.month,
    }));
    setOpenYears(!openYears);
  };

  const monthNames = Object.keys(CALENDAR_MONTHS);

  const handleMonthChange = (e) => {
    setDateState((prev) => ({
      ...prev,
      month: parseInt(e.target.value),
      current: prev.current,
      year: prev.year,
    }));
    setOpenMonths(!openMonths);
  };

  const addDateToState = (date) => {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();
    setDateState({
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear(),
    });
    if (dateType === 'start') {
      dispatch({ type: 'setStartDate', payload: { date: monthDayYear(_date) } });
    } else if (dateType === 'end') {
      dispatch({ type: 'setEndDate', payload: { date: monthDayYear(_date) } });
    }
    onClose();
  };

  const getCalendarDates = () => {
    const { current, month, year } = dateState;
    const calendarMonth = month || +current?.getMonth() + 1;
    const calendarYear = year || current?.getFullYear();
    return calendar(calendarMonth, calendarYear);
  };

  const dayAbbreviations = Object.keys(WEEK_DAYS).map((day) => (
    <div className="flex w-9 justify-center items-center text-black" key={day}>
      {WEEK_DAYS[day]}
    </div>
  ));

  const RenderCalendar = () => {
    return getCalendarDates().map((week, index) => (
      <div key={index} className="grid grid-cols-7 w-full">
        {week.map((date, index) => {
          const [year, month, day, current] = date;
          const dateObject = new Date(year, month - 1, day);
          const isNotMonth = dateState.month !== +month;

          return (
            <div
              key={index}
              className={`flex justify-center items-center cursor-pointer w-9 h-9 rounded bg-white hover:bg-light-green/80 ${current ? 'bg-light-green' : ''}
              ${isNotMonth ? 'text-brown' : 'text-black'} ${
                isSameDay(dateObject, selectedDate)
                  ? 'bg-light-green'
                  : isSameDay(dateObject, dateState.current)
                    ? 'bg-green-500'
                    : ''
              }`}
              onClick={() => {
                addDateToState(dateObject);
                setSelectedDate(dateObject);
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
    ));
  };

  const gotoPreviousMonth = () => {
    const { month, year } = dateState;
    const previousMonth = getPreviousMonth(month, year);
    setDateState({
      month: previousMonth.month,
      year: previousMonth.year,
      current: dateState.current,
    });
  };
  const gotoNextMonth = () => {
    const { month, year } = dateState;
    const nextMonth = getNextMonth(month, year);
    setDateState({
      month: nextMonth.month,
      year: nextMonth.year,
      current: dateState.current,
    });
  };

  const handleOpenMonths = () => {
    setOpenMonths(!openMonths);
    setOpenYears(false);
  };

  const handleOpenYears = () => {
    setOpenYears(!openYears);
    setOpenMonths(false);
  };

  return (
    <div className={`w-80 h-80 border flex flex-col items-center p-2  bg-white/30 rounded-2xl ${className}`}>
      <div className="flex w-full justify-between ">
        <button
          className="bg-light-green rounded-full flex justify-center items-center w-9 h-9"
          onClick={gotoPreviousMonth}
        >
          <LeftChevron color="#dda15e" />
        </button>
        <div className="flex gap-1 justify-center ">
          <div className="flex relative">
            <button className="bg-white p-2 rounded-md relative flex text-black" onClick={handleOpenMonths}>
              {monthNames[dateState.month - 1]}
              {openMonths ? <MonthOpen color="#dda15e" /> : <MonthClosed color="#dda15e" />}
            </button>
            {openMonths && (
              <div className="flex flex-col items-start top-11 gap-1 bg-white absolute z-50 p-2 rounded h-60 overflow-y-scroll no-scrollbar shadow-2xl ring ring-black/20">
                {monthNames.map((month, index) => {
                  return (
                    <button
                      className="hover:text-light-brown w-full text-start"
                      key={index}
                      onClick={() => handleMonthChange({ target: { value: index + 1 } })}
                    >
                      {month}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex relative">
            <button className="bg-white p-2 rounded-md relative flex text-black" onClick={handleOpenYears}>
              {dateState.year}
              {openYears ? <MonthOpen color="#dda15e" /> : <MonthClosed color="#dda15e" />}
            </button>
            {openYears && (
              <div className="flex flex-col bg-white absolute top-11 gap-1 z-50 rounded h-60 px-1 py-2 overflow-y-scroll no-scrollbar shadow-[0px_1px_15px_0px_#212529] shadow-black">
                {years.map((year, index) => {
                  return (
                    <button
                      className="px-2 hover:text-light-brown"
                      key={index}
                      onClick={() => handleYearChange({ target: { value: year } })}
                    >
                      {year}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <button
          className="bg-light-green rounded-full flex justify-center items-center w-9 h-9"
          onClick={gotoNextMonth}
        >
          <RightChevron color="#dda15e" />
        </button>
      </div>
      <div className="grid grid-cols-7 w-full">{dayAbbreviations}</div>
      <div className="flex flex-col w-full gap-1">
        <RenderCalendar />
      </div>
    </div>
  );
}
