"use client";
import React, { useState } from 'react';
import Header from "@/app/components/Header";
import MockUserProfile from "@/app/mocks/mockUserProfile";
import mockUserProfile from "@/app/mocks/mockUserProfile";
import { PlaceHolderImage } from "@/app/icons";
import Image from "next/image";
import Link from "next/link";

const SingleTrip = () => {
    const { trips } = mockUserProfile;
    const firstTrip = trips[0];
    const [selectedTab, setSelectedTab] = useState('details'); // Manage active tab state

    return (
        <div className='flex flex-col border h-2/3 p-2.5 rounded-card'>
            <div className="flex max-w-fit mb-4 bg-green p-1 rounded-xl">
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
            {/* Tab content */}
            {selectedTab === 'details' && (
                <div>
                    <h2>{firstTrip.name}</h2>
                    <h3>{firstTrip.location}</h3>
                    <h3>{firstTrip.displayDate}</h3>
                    <h3>${firstTrip.tripBudget}</h3>
                    <h4>{firstTrip.description}</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {!firstTrip.hasTripImage ?
                            <PlaceHolderImage /> :
                            <Image
                                alt="Trip 1"
                                className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                                height="150"
                                src="/placeholder.svg"
                                width="200"
                            />
                        }
                        {!firstTrip.hasTripImage ?
                            <PlaceHolderImage /> :
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
            )}
            {selectedTab === 'activities' && (
                <div className=''>
                    <h2>Activities</h2>
                    <div className='flex '>
                    {firstTrip.tripActivities.map((activity, index) => (
                        <div className="max-w-60 flex flex-col items-center" key={index}>
                            <h3>{activity.name}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {!firstTrip.hasActivityImage ?
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
                    {firstTrip.tripActivities.map((activity, index) => (
                        <div key={index}>
                            <h3>{activity.name}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>
            )}
            {/* Save Trip button */}
            <div className='flex w-full justify-end px-3'>
                <button className="p-2 border rounded bg-brown text-tan max-w-28">
                    Save Trip
                </button>
            </div>
        </div>
    );
};

export default SingleTrip;
