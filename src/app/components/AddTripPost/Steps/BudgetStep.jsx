import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import { BackArrow, Money } from '@/app/icons';
import Image from 'next/image';

const BudgetStep = () => {
  const { state, dispatch, onPrev, onNext } = useFormContext();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, '');
    if (!isNaN(numericValue) || numericValue === '') {
      // Convert the number to a string with commas as thousands separators
      const formattedValue = numericValue === '' ? '' : Number(numericValue).toLocaleString('en-US');
      dispatch({ type: 'inputChange', payload: { name, value: formattedValue } });
    }
  };

  return (
    <div className="lg:stepContainer mobileStepContainer">
      <div className="stepContentWrapper">
        <div className="stepContent w-5/6 h-1/2 lg:w-2/3 mx-auto">
          <button onClick={onPrev} className="backBtn">
            <BackArrow />
          </button>
          <h1 className="stepHeader text-balance leading-normal">
            What was the budget for your trip to {state.location}?
          </h1>
          <div className={`flex border-b-2 border-black p-1 w-36 items-center `}>
            <Money height={30} color="#212529" />
            <input
              className={`peer flex focus:outline-none w-full bg-transparent text-xl font-bold h-fit placeholder:text-black/70`}
              placeholder="0.00"
              required
              type="text"
              name="tripBudget"
              value={state.tripBudget}
              onChange={handleInputChange}
            />
          </div>
          <button className="yesNoBtn w-fit self-end lg:self-center" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
      <div className="stepImage">
        <Image src="/planeview.webp" alt="plane window" fill />
      </div>
    </div>
  );
};

export default BudgetStep;
