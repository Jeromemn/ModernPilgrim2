import { addTrip, getTrips } from '@/actions/action';
const Form = async () => {
  const trips = await getTrips();
  console.log(trips);
  return (
    <div>
      <div>
        {trips.map((trip) => (
          <div key={trip._id}>
            <h2>{trip.title}</h2>
            <p>{trip.location}</p>
            {/*<p>{trip.date}</p>*/}
            <p>{trip.description}</p>
          </div>
        ))}
      </div>

      <form action={addTrip} className="bg-brown h-72 w-72 p-6">
        <label>
          title:
          <input type="text" name="title" />
        </label>
        <label>
          location:
          <input type="text" name="location" />
        </label>
        <label>
          date:
          <input type="text" name="date" />
        </label>
        <label>
          description:
          <input type="text" name="description" />
        </label>
        <button className=" bg-dark-black text-white p-2 " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
