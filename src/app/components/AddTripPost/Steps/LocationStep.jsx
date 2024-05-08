import FormInput from '@/app/components/AddTripPost/FormInput';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import Image from 'next/image';

const LocationStep = () => {
  const { state, dispatch, onNext } = useFormContext();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'inputChange', payload: { name, value } });
  };

  return (
    <div className="lg:stepContainer mobileStepContainer">
      <div className="lg:stepContentWrapper mobileStepContentWrapper justify-center ">
        <div className="stepContent h-1/2">
          <h1 className="stepHeader w-fit pb-3">Where did you travel?</h1>
          <FormInput
            placeholder="Location"
            type="text"
            name="location"
            handleChange={handleInputChange}
            value={state.location}
          />
          <button
            className="FormBtn w-fit self-end"
            // disabled={!state.location}
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
      <div className="stepImage">
        <Image src="/planeview.webp" alt="plane window" fill />
      </div>
    </div>
  );
};

export default LocationStep;
