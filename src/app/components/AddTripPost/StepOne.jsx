import FormInput from '@/app/components/AddTripPost/FormInput';
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
    name: 'Castles',
    icon: Castles,
  },
  {
    id: 9,
    name: 'Tropical',
    icon: Tropical,
  },
  {
    id: 10,
    name: 'Historical',
    icon: Castles,
  },
];
const FormStepOne = () => {
  const { state, dispatch } = useFormContext();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'inputChange', payload: { name, value } });
  };

  const handleTypeClick = (type) => {
    dispatch({ type: 'toggleTripType', payload: type });
  };

  return (
    <>
      <h1>Lets Start With the basics</h1>
      <div className="flex justify-between ">
        <FormInput label="Title" type="text" name="title" value={state.title} handleChange={handleInputChange} />
        <FormInput
          label="Destination"
          type="text"
          name="location"
          handleChange={handleInputChange}
          value={state.location}
        />
      </div>
      <FormInput
        label="Description"
        type="text"
        name="description"
        handleChange={handleInputChange}
        value={state.description}
      />
      <div className="flex">
        <FormInput
          label="Start Date"
          type="date"
          name="startDate"
          handleChange={handleInputChange}
          value={state.startDate}
        />
        <FormInput label="End Date" type="date" name="endDate" handleChange={handleInputChange} value={state.endDate} />
        <FormInput label="Month" type="Month" name="month" handleChange={handleInputChange} value={state.month} />
      </div>
      <div className="w-24">
        <FormInput
          isBudget
          label="Budget"
          type="number"
          name="tripBudget"
          handleChange={handleInputChange}
          value={state.tripBudget}
        />
      </div>
      <div className="grid grid-flow-col grid-rows-2 gap-2">
        {destinationTypes.map((type) => (
          <button
            key={type.id}
            className={`flex flex-col items-center w-40 text-white/30 rounded-md px-4 py-2 text-xl border border-black ${
              state.typeOfTrip.includes(type.name) ? 'bg-black' : 'bg-green'
            }`}
            onClick={() => handleTypeClick(type.name)}
          >
            <Image src={type.icon} alt={type.name} height={30} width={30} />
            {type.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default FormStepOne;
