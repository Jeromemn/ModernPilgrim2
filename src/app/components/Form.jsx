'use client';
import { useEffect, useState } from 'react';
import { addTrip } from '@/actions/action';
const Form = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch('/api/trips');
      const data = await response.json();
      console.log(data.trips);
      setTrips(data.trips);
    };
    fetchTrips();
  }, []);
  // console.log(trips);
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
