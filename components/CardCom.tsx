'use client'
import { useState } from 'react';

const FlightDetails: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to open flight details */}
      <button onClick={toggleDetails} className="bg-blue-500 text-white px-4 py-2">
        Show Flight Details
      </button>

      {/* The flight details sliding card */}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-xl transition-transform duration-500 ease-in-out ${
          isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <button onClick={toggleDetails} className="absolute top-4 right-4">
          X
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold">Flight details</h2>
          <ul>
            <li>DXB → RUH</li>
            <li>3h 45m | Economy</li>
            <li>RUH → CDG</li>
            <li>7h 10m | Economy</li>
          </ul>
        </div>
      </div>

      {/* Background overlay when details are open */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={toggleDetails}
        ></div>
      )}
    </>
  );
};

export default FlightDetails;
