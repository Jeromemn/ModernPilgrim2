'use client';
import React, { useState } from 'react';
import Header from '@/app/components/Header';
import MockUserProfile from '@/app/mocks/mockUserProfile';
import mockUserProfile from '@/app/mocks/mockUserProfile';
import { PlaceHolderImage, LocationIcon, DestinationIcon, ZeroStars } from '@/app/icons';
import Image from 'next/image';
import useRouter from 'next/router';
import Link from 'next/link';

const SingleTrip = ({ params }) => {
  const { trips } = mockUserProfile;
  const trip = mockUserProfile.trips.find(({ id }) => id === params.tripId);
  const { name, description, displayDate, tripActivities, tripImages, location, tripBudget } = trip;

  const tipOptions = ['destinations', 'tours', 'accommodations', 'transportation', 'budgeting', 'flights', 'general'];
  console.log(params);
  return (
    <>
      <div className="flex flex-col p-2.5 mb-16">
        <div className="flex flex-row gap-16 ">
          {/*Image container*/}
          <div className="max-w-2xl ">
            <div className="grid grid-cols-1 gap-2">
              {/*<PlaceHolderImage width={645} height={420} />*/}
              <Image
                alt="Snowy landscape"
                className="rounded-lg w-full"
                height="420"
                src="/beachTrip.jpg"
                style={{
                  aspectRatio: '695/420',
                  objectFit: 'cover',
                }}
                width="695"
              />
              <div className="grid grid-cols-3 gap-2">
                <Image
                  alt="Snowy mountains"
                  className="rounded-lg w-full"
                  height="157"
                  src="/beachTrip.jpg"
                  style={{
                    aspectRatio: '195/157',
                    objectFit: 'cover',
                  }}
                  width="195"
                />
                <Image
                  alt="Sunset in snow"
                  className="rounded-lg w-full"
                  height="157"
                  src="/beachTrip.jpg"
                  style={{
                    aspectRatio: '195/157',
                    objectFit: 'cover',
                  }}
                  width="195"
                />
                <Image
                  alt="Northern lights"
                  className="rounded-lg w-full"
                  height="157"
                  src="/beachTrip.jpg"
                  style={{
                    aspectRatio: '195/157',
                    objectFit: 'cover',
                  }}
                  width="195"
                />
              </div>
            </div>
          </div>
          {/*About trip*/}
          {/*<div>*/}
          <div className="flex flex-col gap-3 max-w-xl">
            <h3 className="secondary-header">{name}</h3>
            <div className="flex gap-3">
              {/*<LocationIcon />*/}
              <DestinationIcon />
              <p>{location}</p>
            </div>
            <h3>{displayDate}</h3>
            <h3>Cost: ${tripBudget}</h3>
            <p> Loriem esim Loriem esim Loriem esim Loriem esim Loriem esim Loriem esim Loriem esim Loriem esim </p>
            <h4>{description}</h4>
            <div className="max-2xl">{/*<ZeroStars width={200} height={30} />*/}</div>
            <h3 className="secondary-header">Activities</h3>
            <ul className="columns-2 gap-y-14 list-inside list-disc ">
              {trip.tripActivities.map((activity, description, index) => (
                <div className="pb-4" key={index}>
                  <li className="font-bold">{activity.name}</li>
                  {/*<p className="pl-3">{activity.description}</p>*/}
                </div>
              ))}
            </ul>
            {/*<div>*/}
            <button className="p-2 border rounded bg-brown justify-self-end text-tan max-w-28">Save Trip</button>
            {/*</div>*/}
          </div>
          {/*</div>*/}
        </div>
        <div>
          <h2>Tips for this trip</h2>
          <div className="columns-4">
            <div className="">
              <h3 className="font-bold"> Destinations </h3>
              <p> Lorum esem</p>
              <p> Lorum esem</p>
            </div>
            <div className="">
              <h3 className="font-bold"> Things to do</h3>
              <p> Lorum esem</p>
              <p> Lorum esem</p>
            </div>
            <div className="">
              <h3 className="font-bold"> Tours </h3>
              <p> Lorum esem</p>
              <p> Lorum esem</p>
            </div>
            <div className="">
              <h3 className="font-bold"> Accommodations </h3>
              <p> Lorum esem</p>
              <p> Lorum esem</p>
            </div>
            <div className="">
              <h3 className="font-bold"> Flights </h3>
              <p> Lorum esem</p>
              <p> Lorum esem</p>
            </div>
            <div className="">
              <h3 className="font-bold"> Transportation </h3>
              <p> Lorum esem</p>
              <p> Lorum esem</p>
            </div>
            <div className="">
              <h3 className="font-bold"> Budgeting </h3>
              <p> Lorum esem</p>
              <p> Lorum esem</p>
            </div>
            <div className="">
              <h3 className="font-bold"> General </h3>
              <p> Lorum esem</p>
              <p> Lorum esem</p>
            </div>
          </div>
        </div>

        {/*</div>*/}
        {/* Save Trip button */}
      </div>
    </>
  );
};

export default SingleTrip;
