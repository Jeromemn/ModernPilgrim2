const ResultsLayout = () => {
  return (
    <div className="results-layout w-full bg-white mt-4 flex justify-center">
      <ul
        className="container m-auto w-full grid grid-cols-5
            gap-y-8 gap-x-3 sm:grid-cols-1 md:grid-cols-3
            lg:grid-cols-5 grid-rows-4 p-2.5 "
      >
        <li className="trip-card"></li>
        <li className="trip-card"></li>
        <li className="trip-card"></li>
        <li className="trip-card"></li>
        <li className="trip-card"></li>
        <li className="trip-card"></li>
        <li className="trip-card"></li>
        <li className="trip-card"></li>
        <li className="trip-card"></li>
        <li className="trip-card"></li>
        {/*<li className="trip-card"></li>*/}
      </ul>
    </div>
  );
};

export default ResultsLayout;
