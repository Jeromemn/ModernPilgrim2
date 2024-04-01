// 'use client';
// import React from 'react';
// import mockUserProfile from '@/app/mocks/mockUserProfile';
// import { DestinationIcon } from '@/app/icons';
// import Image from 'next/image';
//
// const SingleTrip = ({ params }) => {
//   // const { trips } = mockUserProfile;
//   const trip = mockUserProfile.trips.find(({ id }) => id === params.tripId);
//   const { name, description, displayDate, tripActivities, tripImages, location, tripBudget, tips } = trip;
//
//   return (
//     <>
//       <div className="flex flex-col mb-16 gap-y-7">
//         <div className="flex flex-row gap-16 ">
//           {/*Image container*/}
//           <div className="max-w-2xl ">
//             <div className="grid grid-cols-1 gap-2">
//               {/*<PlaceHolderImage width={645} height={420} />*/}
//               {tripImages.length > 0 && (
//                 <Image
//                   alt="Trip image"
//                   className="rounded-lg w-full"
//                   height="420"
//                   src={tripImages[0].tripImage}
//                   style={{
//                     aspectRatio: '695/420',
//                     objectFit: 'cover',
//                   }}
//                   width="695"
//                 />
//               )}
//               <div className="grid grid-cols-3 gap-2">
//                 {tripImages.slice(1).map((tripImage, id) => (
//                   <Image
//                     alt="Trip image"
//                     className="rounded-lg w-full"
//                     height="157"
//                     key={`${id}`}
//                     src={tripImage.tripImage}
//                     style={{
//                       aspectRatio: '195/157',
//                       objectFit: 'cover',
//                     }}
//                     width="195"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//           {/*About trip*/}
//           <div className="flex flex-col gap-3 max-w-xl">
//             <h3 className="secondary-header">{name}</h3>
//             <div className="flex gap-3">
//               <DestinationIcon />
//               <p>{location}</p>
//             </div>
//             <h3>{displayDate}</h3>
//             <h3>Cost: ${tripBudget}</h3>
//             <p> Loriem esim Loriem esim Loriem esim Loriem esim Loriem esim Loriem esim Loriem esim Loriem esim </p>
//             <h4>{description}</h4>
//
//             <h3 className="secondary-header">Activities</h3>
//             <ul className="columns-2 gap-y-14 list-inside list-disc ">
//               {tripActivities.map((activity, description, id) => (
//                 <div className="pb-4" key={`${activity.name}${id}`}>
//                   <li className="font-bold">{activity.name}</li>
//                 </div>
//               ))}
//             </ul>
//             <button className="p-2 border rounded bg-brown justify-self-end text-tan max-w-28">Save Trip</button>
//           </div>
//         </div>
//         <div className="flex flex-col gap-3">
//           <h3 className="secondary-header text-light-green">Tips for this trip</h3>
//           <div className="h-fit columns-4">
//             {tips.map((tip, id) => (
//               <div key={`tips${id}`} className="min-h-28">
//                 <h3 className="font-bold text-center"> {tip.title} </h3>
//                 <p className=" text-center"> {tip.content}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
//
// export default SingleTrip;
