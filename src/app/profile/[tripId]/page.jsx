"use client";
import React, { useState } from 'react';
import Header from "@/app/components/Header";
import MockUserProfile from "@/app/mocks/mockUserProfile";
import mockUserProfile from "@/app/mocks/mockUserProfile";
import { PlaceHolderImage } from "@/app/icons";
import Image from "next/image";
import useRouter from "next/router";
import Link from "next/link";

const SingleTrip = ({params}) => {
    const { trips } = mockUserProfile;
    const [selectedTab, setSelectedTab] = useState('details'); // Manage active tab state
    const trip = mockUserProfile.trips.find(({id}) => id === params.tripId )
    const {name, description, displayDate,tripActivities, tripImages, location,tripBudget} = trip
    console.log(params)
    return (
        <>
            <div className="flex max-w-fit bg-green p-1 rounded-xl">
                {/* Tab buttons */}
                <button
                    className={`py-1 px-4  rounded-xl ${selectedTab === 'details' ? 'bg-light-brown' +
                        ' text-green' : 'text-light-brown'}`}
                    onClick={() => setSelectedTab('details')}
                >
                    Details
                </button>
                <button
                    className={`py-1 px-4  rounded-xl ${selectedTab === 'activities' ? 'bg-light-brown' +
                        ' text-green' : 'text-light-brown'}`}
                    onClick={() => setSelectedTab('activities')}
                >
                    Activities
                </button>
                <button
                    className={`py-1 px-4  rounded-xl ${selectedTab === 'tips' ? 'bg-light-brown' +
                        ' text-green' : 'text-light-brown'}`}
                    onClick={() => setSelectedTab('tips')}
                >
                    Tips
                </button>
            </div>
        <div className='flex flex-col border h-2/3 p-2.5 rounded-card max-w-6xl'>
            {/* Tab content */}
            {selectedTab === 'details' && (
                <div className='flex flex-row gap-6'>
                    <div>

                    <div>

                        <h3 className='secondary-header'>{name}</h3>
                        <h3>{location}</h3>
                        <h3>{displayDate}</h3>
                        <h3>${tripBudget}</h3>
                        <h4>{description}</h4>
                    </div>
                    <div className="max-w-md">
                        {!tripImages.length ?
                            <PlaceHolderImage width={400} height={400}/> :
                            <Image
                                alt="Trip 1"
                                className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                                height="150"
                                src="/placeholder.svg"
                                width="200"
                            />
                        }
                    </div>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='secondary-header'>Activities</h3>
                        <div className='flex flex-col'>
                            {trip.tripActivities.map((activity, index) => (
                                <div className="max-w-60 flex flex-col items-start" key={index}>
                                    <h3 className='font-bold'>{activity.name}</h3>
                                    <p className='max-w-60'>{activity.description}</p>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}
            {selectedTab === 'activities' && (
                <div className=''>
                    <h2>Activities</h2>
                    <div className='flex '>
                    {trip.tripActivities.map((activity, index) => (
                        <div className="max-w-60 flex flex-col items-center" key={index}>
                            <h3>{activity.name}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {!trip.hasActivityImage ?
                                    <PlaceHolderImage width={250} /> :
                                    <Image
                                        alt="Trip 1"
                                        className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                                        height="150"
                                        src="/placeholder.svg"
                                        width="250"
                                    />
                                }
                            </div>
                            <p className='max-w-60'>{activity.description}</p>

                        </div>
                    ))}
                    </div>
                </div>
            )}
            {selectedTab === 'tips' && (
                <div>
                    <h2>Tips for this trip</h2>
                    {trip.tripActivities.map((activity, index) => (
                        <div key={index}>
                            <h3>{activity.name}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>
            )}
            {/* Save Trip button */}
            <div className='flex px-3 max-w-fit justify-self-end'>
                <button className="p-2 border rounded bg-brown text-tan max-w-28">
                    Save Trip
                </button>
            </div>
        </div>
        </>
    );
};

export default SingleTrip;
