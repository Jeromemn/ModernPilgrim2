import {
  Beaches,
  Camping,
  Castles,
  CountrySide,
  Deserts,
  HouseBoats,
  IconicCities,
  Mountains,
  Tropical,
} from '@/app/icons/destinationsTypes';
import { useFormContext } from '@/app/components/AddTripPost/FormContext';
import Image from 'next/image';
import { BackArrow } from '@/app/icons';

const destinationTypes = [
  {
    id: 1,
    name: 'Mountains',
    icon: Mountains,
  },
  {
    id: 2,
    name: 'Beaches',
    icon: Beaches,
  },
  {
    id: 3,
    name: 'Iconic Cities',
    icon: IconicCities,
  },
  {
    id: 4,
    name: 'Deserts',
    icon: Deserts,
  },
  {
    id: 5,
    name: 'House Boats',
    icon: HouseBoats,
  },
  {
    id: 6,
    name: 'CountrySide',
    icon: CountrySide,
  },
  {
    id: 7,
    name: 'Camping',
    icon: Camping,
  },
  {
    id: 8,
    name: 'Historical',
    icon: Castles,
  },
  {
    id: 9,
    name: 'Tropical',
    icon: Tropical,
  },
  // {
  //   id: 10,
  //   name: 'Historical',
  //   icon: Castles,
  // },
];

const DestinationTypeStep = () => {
  const { state, dispatch, onPrev, onNext } = useFormContext();

  const handleTypeClick = (type) => {
    dispatch({ type: 'toggleTripType', payload: type });
  };

  return (
    <div className="lg:stepContainer mobileStepContainer items-center">
      <div className="stepContentWrapper">
        <div className="stepContent w-5/6 h-3/4 lg:h-2/3 lg:w-2/3 mx-auto">
          <button onClick={onPrev} className="backBtn">
            <BackArrow />
          </button>
          <h1 className="stepHeader text-balance">What type of destination?</h1>
          <div className="lg:destinationGrid flex flex-wrap gap-2 justify-center">
            {destinationTypes.map((type) => (
              <button
                key={type.id}
                className={`flex flex-col items-center w-40 text-white/30 rounded-md px-4 py-2 text-xl border border-black hover:border-light-brown ${
                  state.typeOfTrip.includes(type.name) ? 'bg-black' : 'bg-green'
                }`}
                onClick={() => handleTypeClick(type.name)}
              >
                <Image src={type.icon} alt={type.name} height={30} width={30} />
                {type.name}
              </button>
            ))}
          </div>
          <button className="yesNoBtn w-fit self-end" onClick={onNext}>
            next
          </button>
        </div>
      </div>
      <div className="stepImage">
        <Image src="/planeview.webp" alt="plane window" fill />
      </div>
    </div>
  );
};

export default DestinationTypeStep;
