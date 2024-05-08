import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import FormInput from '@/app/components/AddTripPost/FormInput';
import { BackArrow } from '@/app/icons';
import Image from 'next/image';

const DescriptionStep = () => {
  const { state, dispatch, onPrev, onNext } = useFormContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'inputChange', payload: { name, value } });
  };

  return (
    <div className="lg:stepContainer mobileStepContainer">
      <div className="stepContentWrapper">
        <div className="stepContent w-5/6 h-1/2 lg:w-2/3 mx-auto ">
          <button onClick={onPrev} className="backBtn">
            <BackArrow />
          </button>
          <div className="flex flex-col gap-4">
            <h1 className="stepHeader w-fit text-pretty">Provided details about your trip to {state.location}</h1>
            <div className="flex flex-col w-full">
              <FormInput
                placeholder="Tells us about your trip..."
                name="description"
                handleChange={handleInputChange}
                value={state.description}
                multiline
              />
              <button className="FormBtn w-fit self-end" onClick={onNext}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="stepImage">
        <Image src="/planeview.webp" alt="plane window" fill />
      </div>
    </div>
  );
};

export default DescriptionStep;
