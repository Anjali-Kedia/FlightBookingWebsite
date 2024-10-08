import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Flight {
  date: string;
  logo: StaticImageData;
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  arrivalDay?: string;
  route: string;
  duration: string;
  stops: number;
  layover?: string;
}

interface FlightComponentProps {
  flights: Flight[];
  price: string;
  openDetails: () => void; // Function to open flight details
}

const FlightComponent: React.FC<FlightComponentProps> = ({ flights, price, openDetails }) => {
  return (
    <div onClick={openDetails} className="cursor-pointer border rounded-xl p-6 bg-white hover:bg-gray-50 shadow-sm space-y-4 w-full max-w-7xl mx-auto mb-6 ">
      <div className="grid grid-cols-4 gap-5 items-center mb-2">
        <div className="col-span-3 space-y-4">
          {flights.map((flight, index) => (
            <div key={index} className="grid grid-cols-3 gap-5 items-center">
              <div>
                <p className="text-md text-[#787B80] mb-2">{flight.date}</p>
                <div className="flex space-x-2 items-center">
                  <Image
                    src={flight.logo}
                    alt={flight.airline}
                    width={50}
                    height={50}
                    className="object-contain border rounded-md py-2 px-1 mr-2"
                  />
                  <div>
                    <p className="text-md text-gray-500 font-medium">
                      {flight.airline} • {flight.flightNumber}
                    </p>
                    <p className="text-xl text-black">
                      {flight.departureTime} - {flight.arrivalTime}
                      {flight.arrivalDay && (
                        <span className="align-super text-sm text-[#962828] ml-1">
                          {flight.arrivalDay}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right mt-6">
                <p className=" text-[#787B80]">{flight.route}</p>
                <p className="text-xl text-[#001F1D]">{flight.duration}</p>
              </div>
              <div className="text-left mt-6 pl-28">
                {flight.layover && <p className="text-md text-[#787B80]">{flight.layover}</p>}
                <p className="text-xl text-[#1c2323]">
                  {flight.stops} stop{flight.stops > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-end items-start space-y-2 w-full h-full border-l-2 pl-6 ">
          <p className="text-[#787B80] text-lg">from</p>
          <p className="text-2xl  text-gray-900">{price}</p>
          <button className="bg-[#003E39] text-white px-24 py-3 rounded-lg  text-lg hover:bg-[#002f2a] transition">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightComponent;

