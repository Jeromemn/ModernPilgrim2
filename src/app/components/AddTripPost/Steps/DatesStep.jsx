import { useState } from 'react';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import { BackArrow } from '@/app/icons';
import MonthPicker from '@/app/components/AddTripPost/MonthPicker';
import DatePicker from '@/app/components/AddTripPost/DatePicker';
import Image from 'next/image';
const DatesStep = () => {
  const { state, onPrev, onNext } = useFormContext();
  const [openDatePicker, setOpenDatePicker] = useState(null);

  return (
    <div className="lg:stepContainer mobileStepContainer">
      <div className="stepContentWrapper">
        <div className="stepContent w-5/6 h-1/2 lg:w-3/4 mx-auto overflow-visible">
          <button onClick={onPrev} className="backBtn">
            <BackArrow />
          </button>
          <div className="flex flex-wrap items-center w-full gap-5">
            <div className="flex flex-wrap">
              <h1 className="stepHeader">I went to {state.location} location from</h1>
              <DatePicker
                content="start date"
                dateType="start"
                openDatePicker={openDatePicker}
                setOpenDatePicker={setOpenDatePicker}
              />
              <h1 className="stepHeader">until</h1>
              <DatePicker
                content="end date"
                dateType="end"
                openDatePicker={openDatePicker}
                setOpenDatePicker={setOpenDatePicker}
              />
            </div>
            <div className="flex flex-wrap">
              <h1 className="stepHeader text-pretty">I dont recall the dates but it was </h1>
              <MonthPicker openDatePicker={openDatePicker} setOpenDatePicker={setOpenDatePicker} />
            </div>
          </div>
          <button onClick={onNext} className="FormBtn w-fit self-end mr-2">
            {(state.startDate && state.endDate) || state.month.monthName ? 'Next' : 'Not Now'}
          </button>
        </div>
      </div>
      <div className="stepImage">
        <Image src="/planeview.webp" alt="plane window" fill />
      </div>
    </div>
  );
};

export default DatesStep;
