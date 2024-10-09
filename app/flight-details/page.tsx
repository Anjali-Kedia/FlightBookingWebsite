'use client'
import emiratesLogo from '/public/emirates.svg'; 
import lufthansaLogo from '/public/lufthansa.svg';
import FlightNavBar from '@/components/Navbar';
import { useState } from 'react';
import FlightComponent from '@/components/FlightDetailComp'; // Import the component
import { FiArrowLeft, FiClock } from 'react-icons/fi'; 
import Image from 'next/image';

const FlightListWithDetails = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Mock flight data
  
  const openDetails = () => {
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="relative">
       <div className={`${isDetailsOpen ? 'opacity-50' : 'opacity-100'} transition-opacity duration-500`}>
    <FlightNavBar />
  </div>
      <div className="mt-44"> {/* Add margin top here to push content below navbar */}
        <div className="mb-6 space-y-4 w-full max-w-7xl mx-auto">
          <p className="text-[#787B80] text-xl">Showing 356 of 767 results</p>
        </div>
        <FlightComponent flights={flightData} price={price} openDetails={openDetails} />
        <FlightComponent flights={flightData2} price={price2} openDetails={openDetails} />
        <FlightComponent flights={flightData2} price={price2} openDetails={openDetails} />
      </div>

      {/* Flight Details Card */}
      <div
  className={`fixed top-8 right-4 h-[95%] w-2/4 bg-white shadow-xl transition-transform duration-500 ease-in-out z-50 rounded-lg ${
    isDetailsOpen ? 'transform translate-x-0' : 'transform translate-x-full'
  }`}
>
  <button onClick={closeDetails} className="absolute top-8 left-6 flex  items-center">
    <div className="rounded-full  bg-gray-100 w-8 h-8 flex items-center justify-center">
      <FiArrowLeft className="text-lg" /> {/* Arrow inside a circle */}
    </div>
  </button>
  <div className="p-6 mt-16  bg-white ">
  <h2 className="text-2xl mb-4 border-b-2 pb-7">Flight details</h2>

  {/* First Flight */}
  <div className="relative flex mb-2 mt-8">
    {/* Circle and Vertical Line */}
    <div className="mr-4 flex flex-col items-center">
      <div className="w-4 h-4 border-2 border-black rounded-full mb-2"></div>
      <div className="border-l-2 border-black h-12"></div>
    </div>

    {/* Flight Details */}
    <div className="flex-1">
      <p className="text-gray-500">Sat 28 Sept • 2:15</p>
      <p className="font-semibold">DXB • Dubai International Airport</p>
    </div>

    {/* Airline Logo and Details */}
    <div className="flex items-center space-x-2">
      <Image src={lufthansaLogo} width={40} height={40} alt="airline logo" className="border p-1 rounded-sm mr-2 mb-2" />
      <div>
        <p className="text-sm text-gray-500">Saudi Arabian Airlines • SV553</p>
        <p className="text-sm text-gray-500">Economy • A330</p>
        <p className="text-sm text-gray-500">Flight time 3h 45m</p>
      </div>
    </div>
  </div>

  {/* Second Flight */}
  <div className="relative flex items-start mb-2">
    {/* Circle and Vertical Line */}
    <div className="mr-4 flex flex-col items-center">
      <div className="w-4 h-4 border-2 border-black rounded-full mb-2"></div>
      {/* Start the dotted line after the second hollow dot */}
      <div className="border-l-2 border-dashed border-gray-300 h-44"></div>
    </div>

    {/* Flight Details */}
    <div className="flex-1">
      <p className="text-gray-500">Sat 28 Sept • 2:15</p>
      <p className="font-bold">RUH • King Khalid International Airport</p>
      <div className="flex items-center space-x-2 mt-20 ml-8 ">
    <FiClock className="text-gray-500" />
    <p className="text-gray-500">Layover 2h 25m</p>
  </div>
    </div>
   

  </div>

  {/* Layover clock and text */}
 


  {/* Third Flight */}
  <div className="relative flex items-start mb-2">
    {/* Circle and Vertical Line */}
    <div className="mr-4 flex flex-col items-center">
      <div className="w-4 h-4 border-2 border-black rounded-full mb-3"></div>
      <div className="border-l-2 border-black h-12"></div>
    </div>

    {/* Flight Details */}
    <div className="flex-1">
      <p className="text-gray-500">Sat 28 Sept • 2:15</p>
      <p className="font-semibold">RUH • King Khalid International Airport</p>
    </div>

    {/* Airline Logo and Details */}
    <div className="flex items-center space-x-2">
      <Image src={lufthansaLogo} width={40} height={40} alt="airline logo" className="border p-1 rounded-sm mr-2 mb-3" />
      <div>
        <p className="text-sm text-gray-500">Saudi Arabian Airlines • SV553</p>
        <p className="text-sm text-gray-500">Economy • A330</p>
        <p className="text-sm text-gray-500">Flight time 3h 45m</p>
      </div>
    </div>
  </div>

  {/* Fourth Flight */}
  <div className="relative flex items-start mb-8">
    {/* Circle and Vertical Line */}
    <div className="mr-4 flex flex-col items-center">
      <div className="w-4 h-4 border-2 border-black rounded-full"></div>
    </div>

    {/* Flight Details */}
    <div className="flex-1">
      <p className="text-gray-500">Sat 28 Sept • 2:15</p>
      <p className="font-semibold">CDG • Paris - Charles de Gaulle Airport</p>
    </div>

  
  </div>
</div>
</div>




      {/* Background overlay when details are open */}
      {isDetailsOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={closeDetails}
        ></div>
      )}
    </div>
  );
};

export default FlightListWithDetails;
const flightData = [
    {
      date: 'Thu 25 Jun',
      logo: emiratesLogo, // This will work now as StaticImageData
      airline: 'Emirates',
      flightNumber: 'AT 4334',
      departureTime: '9:45 AM',
      arrivalTime: '11:45 AM',
      route: 'CDG - DXB',
      duration: '7h 10min',
      stops: 1,
      layover: ''
    },
    {
      date: 'Sat 2 Jul',
      logo: lufthansaLogo, // StaticImageData
      airline: 'Emirates',
      flightNumber: 'AT 4334',
      departureTime: '11:45 PM',
      arrivalTime: '6:45 AM',
      arrivalDay: '+1 day',
      route: 'CDG - DXB',
      duration: '19h 10min',
      stops: 1,
      layover: 'Lisbon'
    },
  ];

  const flightData2 = [
    {
      date: 'Thu 25 Jun',
      logo: emiratesLogo,  // Replace with actual path or link
      airline: 'Emirates',
      flightNumber: 'AT 4334',
      departureTime: '9:45 AM',
      arrivalTime: '11:45 AM',
      route: 'CDG - DXB',
      duration: '2h 10min',
      stops: 0,  // No stops
      layover: '',  // No layover
      arrivalDay: ''  // No additional arrival day
    },
    {
      date: 'Thu 25 Jun',
      logo: lufthansaLogo,  // Replace with actual path or link
      airline: 'Lufthansa',
      flightNumber: 'AT 4334',
      departureTime: '11:45 PM',
      arrivalTime: '6:45 AM',
      route: 'DXB - CDG',
      duration: '4h 10min',
      stops: 2,  // 2 stops
      layover: '6h 32m in Lisbon, P...',  // Layover details
      arrivalDay: '+1 day'  // Arrival on the next day
    }
  ];
  
  const price2 = 'AED 2,456.90';
  const price = 'AED 1,456.90';
