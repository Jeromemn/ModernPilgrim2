import { useState } from 'react';
import FormInput from '@/app/components/AddTripPost/FormInput';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import { BackArrow } from '@/app/icons/index';
import Image from 'next/image';

const TitleStep = () => {
  const { state, dispatch, onNext, onPrev } = useFormContext();
  const [addTitle, setAddTitle] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'inputChange', payload: { name, value } });
  };
  return (
    <div className="lg:stepContainer mobileStepContainer">
      <div className="stepContentWrapper">
        <div className="stepContent w-5/6 h-1/2 lg:w-2/3 mx-auto">
          <button onClick={onPrev} className="backBtn">
            <BackArrow />
          </button>
          <div className="flex flex-col gap-4">
            <h1 className="stepHeader w-fit text-pretty">
              Would you like to give a name to your trip to {state.location}?
            </h1>

            <div className="flex flex-col gap-3 pb-4 pl-2 ">
              <button onClick={onNext} className="yesNoBtn">
                No
              </button>
              <button onClick={() => setAddTitle(true)} className="yesNoBtn">
                Yes
              </button>
            </div>

            {addTitle && (
              <FormInput
                type="text"
                name="title"
                placeholder="Name your trip"
                value={state.title}
                handleChange={handleInputChange}
              />
            )}
            {addTitle && (
              <button className="FormBtn self-end mr-2 w-fit" onClick={onNext}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="stepImage">
        <Image src="/planeview.webp" alt="plane window" fill />
      </div>
    </div>
  );
};

export default TitleStep;
