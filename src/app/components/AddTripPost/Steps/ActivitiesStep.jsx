import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import { BackArrow } from '@/app/icons';
import Image from 'next/image';

const activitiesData = [
  'Scuba Diving',
  'Hiking',
  'Sightseeing',
  'Golfing',
  'Water Sports',
  'Wine Tasting',
  'Snow Sports',
  'Concerts',
  'Nature Watching',
  'Biking',
  'Sporting Events',
  'Surfing',
  'Iconic Destinations',
  'Off Roading',
];

const ActivitiesStep = () => {
  const { state, dispatch, onPrev, onNext } = useFormContext();
  const handleActivityClick = (activity) => {
    dispatch({ type: 'toggleActivities', payload: activity });
  };
  return (
    <div className="lg:stepContainer mobileStepContainer">
      <div className="stepContentWrapper">
        <div className="h-2/3 w-5/6 lg:w-2/3 gap-5 stepContent">
          <button onClick={onPrev} className="backBtn ">
            <BackArrow />
          </button>
          <h1 className="stepHeader"> What activities did you do in {state.location}? </h1>
          <div className="flex flex-wrap gap-2 w-full">
            {activitiesData.map((activity) => (
              <button
                key={activity}
                className={`flex flex-wrap border border-light-brown hover:border-black rounded-2xl w-fit px-3 py-1 text-lg text-light-brown ${
                  state.activities.includes(activity) ? 'bg-black' : 'bg-black/40'
                }`}
                onClick={() => handleActivityClick(activity)}
              >
                {activity}
              </button>
            ))}
          </div>
          <button className="yesNoBtn w-fit self-end" onClick={onNext}>
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

export default ActivitiesStep;
