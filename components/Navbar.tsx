'use client'
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; 
import FlightSearch from "./Hero";

const FlightNavBar = () => {
  const router = useRouter(); 
  const [isPanelVisible, setIsPanelVisible] = useState(false); 

  // State to hold the flight search details from localStorage
  const [flightDetails, setFlightDetails] = useState({
    from: 'CDG',
    to: 'DXB',
    departureDate: '',
    returnDate: '',
  });

  // Handle close for the entire navbar
  const handleClose = () => {
    router.push("/"); 
  };

  // Handle click for the flight details container to show the panel
  const handleFlightDetailsClick = () => {
    setIsPanelVisible(true); 
  };

  // Handle close for the slider panel
  const handlePanelClose = () => {
    setIsPanelVisible(false); 
  };


  useEffect(() => {
    const savedDetails = localStorage.getItem('flightSearch');
    if (savedDetails) {
      const parsedDetails = JSON.parse(savedDetails);
      setFlightDetails({
        from: parsedDetails.from || 'CDG',
        to: parsedDetails.to || 'DXB',
        departureDate: parsedDetails.departureDate ? new Date(parsedDetails.departureDate).toLocaleDateString() : '',
        returnDate: parsedDetails.returnDate ? new Date(parsedDetails.returnDate).toLocaleDateString() : '',
      });
    }
  }, []);

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white p-6 shadow-md z-50">
        {/* Flight Details Container */}
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto p-2 border-gray-200 relative">
          {/* Flight Details */}
          <div 
            className="flex items-center space-x-8 border rounded-full px-4 py-2 bg-white shadow-sm cursor-pointer"
            onClick={handleFlightDetailsClick}
          >
            {/* From (Dynamic Data) */}
            <div className="flex items-center space-x-4 border-r pr-6">
              
              <span className="text-gray-500 text-lg">
                {/* Display a fallback value if no data is present */}
                {flightDetails.from === 'CDG' ? 'Paris Charles De Gaulle' : flightDetails.from}
              </span>
            </div>

            {/* To (Dynamic Data) */}
            <div className="flex items-center space-x-4 border-r pr-6">
              
              <span className="text-gray-500 text-lg">
                {flightDetails.to === 'DXB' ? 'Dubai International' : flightDetails.to}
              </span>
            </div>

            {/* Dates (Dynamic Data) */}
            <div className="flex items-center space-x-4 border-r pr-6">
              <span className="text-lg text-black">
                {flightDetails.departureDate && flightDetails.returnDate
                  ? `${flightDetails.departureDate} - ${flightDetails.returnDate}`
                  : 'Select dates'}
              </span>
            </div>

            {/* Search Icon */}
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
              <CiSearch className="w-6 h-6 text-[#003E39] font-bold" />
            </button>
          </div>

          {/* Close (X) Button */}
          <button className="flex items-center justify-center w-12 h-12 border rounded-full" onClick={handleClose}>
            <IoMdClose className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Top-Down Sliding Panel */}
      {isPanelVisible && (
        <>
          {/* Background overlay */}
          <div 
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={handlePanelClose} // Close panel when overlay is clicked
          ></div>

          {/* Panel Content */}
          <div 
            className={`fixed top-0 left-0 w-full h-60 bg-white shadow-lg z-50 transition-transform duration-500  ease-in-out transform${
              isPanelVisible ? 'transform translate-y-0' : 'transform translate-y-full'
            }`}
            style={{  willChange: 'transform' }}
          >
            <div className="my-12 mx-52">
              <FlightSearch/>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FlightNavBar;
