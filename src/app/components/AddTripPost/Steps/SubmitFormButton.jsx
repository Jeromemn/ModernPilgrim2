'use client';
import { useState } from 'react';
import { createTrip } from '@/actions/tripActions';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import { useSession } from 'next-auth/react';

const SubmitFormButton = () => {
  const [submitResponse, setSubmitResponse] = useState(null);
  const session = useSession();
  const { state } = useFormContext();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createTrip({ ...state, userId: session.data.user.id, userName: session.data.user.name });
      if (response.success) {
        setSubmitResponse(response);
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error('Failed to upload mongoDb', error);
    }
  };
  console.log(submitResponse);
  return (
    <button className="yesNoBtn w-fit self-end" type="submit" onClick={handleSubmit}>
      Submit
    </button>
  );
};

export default SubmitFormButton;
