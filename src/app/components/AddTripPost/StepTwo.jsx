import TipSection from '@/app/components/AddTripPost/TipSection';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';

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
const FormStepTwo = () => {
  const { state, dispatch } = useFormContext();
  const handleActivityClick = (activity) => {
    dispatch({ type: 'toggleActivities', payload: activity });
  };

  return (
    <>
      <div>
        <h1>Step 2</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1> Select Activities</h1>
        <div className="flex flex-wrap gap-2">
          {activitiesData.map((activity) => (
            <button
              key={activity}
              className={`flex flex-wrap border border-black rounded-2xl w-fit px-3 py-1 ${
                state.activities.includes(activity) ? 'bg-black' + ' text-white' : ''
              }`}
              onClick={() => handleActivityClick(activity)}
            >
              {activity}
            </button>
          ))}
        </div>
        <div>
          <h1>Tips for Travelers</h1>
          <p>Provide helpful tips learned while traveling or strategies used to book the trip</p>
          <div>
            <TipSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormStepTwo;
