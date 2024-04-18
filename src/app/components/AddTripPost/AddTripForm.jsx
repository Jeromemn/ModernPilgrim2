'use client';
import { useState } from 'react';
import { createTrip } from '@/actions/tripActions';
import FormStepOne from '@/app/components/AddTripPost/StepOne';
import FormStepTwo from '@/app/components/AddTripPost/StepTwo';
import FormStepThree from '@/app/components/AddTripPost/StepThree';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';

const steps = {
  1: FormStepOne,
  2: FormStepTwo,
  3: FormStepThree,
};
const AddTripForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitResponse, setSubmitResponse] = useState(null);
  const { state } = useFormContext();
  console.log(state.tripImages);
  const Step = steps[currentStep];
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createTrip(state);
      if (response.success) {
        setSubmitResponse(response);
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error('Failed to upload mongoDb', error);
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="">
      <div className="flex">
        <h2>Tell the world about your travels</h2>
      </div>
      <Step />
      {submitResponse && submitResponse.success && (
        <p className="text-green-500">Trip {submitResponse.trip.title} added</p>
      )}
      <div className="flex justify-between">
        <button className="FormBtn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <div className="flex gap-3">
          <button className="FormBtn" onClick={handlePrev}>
            Back
          </button>
          <button className="FormBtn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTripForm;
