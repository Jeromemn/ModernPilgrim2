'use client';
// import { useState } from 'react';
// import { createTrip } from '@/actions/tripActions';
import {
  LocationStep,
  TitleStep,
  DescriptionStep,
  DatesStep,
  DestinationTypeStep,
  BudgetStep,
  ActivitiesStep,
  TipsStep,
  ImagesStep,
} from '@/app/components/AddTripPost/Steps';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';

const steps = [
  LocationStep,
  TitleStep,
  DescriptionStep,
  DatesStep,
  DestinationTypeStep,
  BudgetStep,
  ActivitiesStep,
  TipsStep,
  ImagesStep,
];
const AddTripForm = ({ onClose }) => {
  // const [submitResponse, setSubmitResponse] = useState(null);
  const { state, step } = useFormContext();
  console.log('start date:', state.startDate, 'end date:', state.endDate);
  console.log('state:', state);
  const Step = steps[step];
  const handleSubmit = async (event) => {
    event.preventDefault();
    onClose();
    // try {
    //   const response = await createTrip(state);
    //   if (response.success) {
    //     setSubmitResponse(response);
    //   } else {
    //     console.error(response.error);
    //   }
    // } catch (error) {
    //   console.error('Failed to upload mongoDb', error);
    // }
  };

  return (
    <div className="flex flex-col h-full">
      <Step />
      {/*{submitResponse && submitResponse.success && (*/}
      {/*  <p className="text-green-500">Trip {submitResponse.trip.title} added</p>*/}
      {/*)}*/}
      <button className="FormBtn absolute bottom-5 left-5 w-fit" type="submit" onClick={handleSubmit}>
        Save for later
      </button>
    </div>
  );
};

export default AddTripForm;
