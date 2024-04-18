const TripActivitiesButton = ({ activity, onClick, selected }) => {
  const handleToggleActive = () => {
    onClick(activity);
  };
  return (
    <button
      className={`flex flex-wrap border border-black rounded-2xl w-fit px-3 py-1 ${
        selected ? 'bg-black' + ' text-white' : ''
      }`}
      onClick={handleToggleActive}
    >
      {activity}
    </button>
  );
};

export default TripActivitiesButton;
