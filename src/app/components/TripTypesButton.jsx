import Image from 'next/image';

const TripTypesButton = ({ tripType, icon, onClick, selectedType }) => {
  const handleToggleActive = (e) => {
    e.preventDefault();
    onClick(tripType);
  };
  return (
    <button
      className={`flex flex-col items-center w-40 text-white/30 rounded-md px-4 py-2 text-xl border border-black ${
        selectedType ? 'bg-black' : 'bg-green'
      }`}
      onClick={handleToggleActive}
    >
      <Image src={icon} alt={tripType} height={30} width={30} />
      {tripType}
    </button>
  );
};

export default TripTypesButton;
