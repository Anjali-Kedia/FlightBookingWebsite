// import { CiCalendar, CiSearch } from "react-icons/ci";
// import { IoIosSwap } from "react-icons/io";
// import { BiTargetLock } from "react-icons/bi";
// import { Button } from "@/components/ui/button"; 
// import { Input } from "@/components/ui/input";  
// import { GoChevronDown } from "react-icons/go"; 

// const FlightSearch = () => {
//   return (
//     <div className="flex flex-col items-center min-h-screen  font-montreal pt-24">
//       {/* Greeting Section Outside the Box */}
//       <div className="mb-8 text-center">
//         <h1 className="text-[42px]  text-gray-800">Good afternoon, Brian</h1>
//       </div>

//       {/* Flight Search Form Box */}
//       <div className="bg-white shadow-sm rounded-lg p-10 w-full max-w-6xl border border-gray-200">
//         {/* Tabs */}
//         <div className="flex justify-start mb-6">
//           <button className="py-2 px-8 bg-gray-100 text-gray-700 text-xl font-medium rounded-md focus:outline-none focus:ring">
//             Flights
//           </button>
//         </div>

//         {/* Flight Search Form */}
//         <div className="flex items-center justify-between space-x-6">
//           {/* "Where From?" Field */}
//           <div className="relative w-full flex items-center">
//             <BiTargetLock className="absolute left-4 h-6 w-6 text-gray-500" />
//             <Input placeholder="Where from?" className="w-full pl-12 text-lg py-8" />
//             <GoChevronDown className="absolute right-4 h-6 w-6 text-gray-500"/>
//           </div>

//           {/* Swap Icon */}
//           <div className="flex items-center">
//             <button className="p-4 bg-gray-100 rounded-full shadow-sm">
//               <IoIosSwap className="h-6 w-6 text-gray-500" />
//             </button>
//           </div>

//           {/* "Where To?" Field */}
//           <div className="relative w-full flex items-center">
//             <BiTargetLock className="absolute left-4 h-6 w-6 text-gray-500" />
//             <Input placeholder="Where to?" className="w-full pl-12 text-lg py-8" />
//             <GoChevronDown className="absolute right-4 h-6 w-6 text-gray-500"/>
//           </div>

//           {/* Departure Field */}
//           <div className="relative w-full flex items-center">
//             <CiCalendar className="absolute left-4 h-6 w-6 text-gray-500" />
//             <Input placeholder="Departure" className="w-full pl-12 text-lg py-8" />
//           </div>

//           {/* Return Field */}
//           <div className="relative w-full flex items-center">
//             <CiCalendar className="absolute left-4 h-6 w-6 text-gray-500" />
//             <Input placeholder="Return" className="w-full pl-12 text-lg py-8" />
//           </div>
//         </div>

//         {/* Search Button with Icon */}
//         <div className="mt-8 flex justify-end">
//           <Button className="bg-[#003E39] hover:bg-green-700 text-white py-7 px-12 rounded-md flex items-center space-x-3 text-xl">
//             <CiSearch className="h-6 w-6" />
//             <span>Search flights</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightSearch;

"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { CiCalendar, CiSearch } from "react-icons/ci";
import { IoIosSwap } from "react-icons/io";
import { BiTargetLock } from "react-icons/bi";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";  
import { GoChevronDown ,GoChevronUp} from "react-icons/go"; 
import airportData from '@/data/airports.json'; // Assuming the JSON file is in the 'data' folder

const FlightSearch = () => {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [filteredFromAirports, setFilteredFromAirports] = useState(airportData.airports);
  const [filteredToAirports, setFilteredToAirports] = useState(airportData.airports);
  const [isFromDropdownVisible, setFromDropdownVisible] = useState(false);
  const [isToDropdownVisible, setToDropdownVisible] = useState(false);

  const router = useRouter(); 

  // Handle the input change and filter airports for "Where From"
  const handleFromInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setFromInput(input);
    if (input) {
      setFilteredFromAirports(
        airportData.airports.filter((airport) =>
          airport.name.toLowerCase().includes(input.toLowerCase()) ||
          airport.city.toLowerCase().includes(input.toLowerCase()) ||
          airport.code.toLowerCase().includes(input.toLowerCase())
        )
      );
      setFromDropdownVisible(true);
    } else {
      setFromDropdownVisible(false);
    }
  };

  // Handle the input change and filter airports for "Where To"
  const handleToInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setToInput(input);
    if (input) {
      setFilteredToAirports(
        airportData.airports.filter((airport) =>
          airport.name.toLowerCase().includes(input.toLowerCase()) ||
          airport.city.toLowerCase().includes(input.toLowerCase()) ||
          airport.code.toLowerCase().includes(input.toLowerCase())
        )
      );
      setToDropdownVisible(true);
    } else {
      setToDropdownVisible(false);
    }
  };

  // Handle airport selection for "From"
  const handleFromAirportSelect = (airport: string) => {
    setFromInput(airport);
    setFromDropdownVisible(false);
  };

  // Handle airport selection for "To"
  const handleToAirportSelect = (airport: string) => {
    setToInput(airport);
    setToDropdownVisible(false);
  };
  // Handle search button click and navigate to loading page
  const handleSearchFlights = () => {
    // Navigate to the loading page
    router.push("/loading");
  };

  return (
          <div>
            
    
            {/* Flight Search Form */}
            
            <div className="flex items-center justify-between space-x-6">
              {/* "Where From?" Field */}
              <div className="relative w-full flex items-center">
              {!fromInput && (
                <BiTargetLock className="absolute left-4 h-6 w-6 text-gray-400" />
              )}
              <label className="w-full flex items-center cursor-text">
                {/* Label spans for clickable area */}
                <span
                  className={`absolute transition-all duration-300 ease-in-out text-gray-600 ${
                    fromInput ? 'left-4 top-2 text-s' : 'left-12 top-5 text-lg'
                  }`}
                >
                  Where from?
                </span>
                {/* Input Field */}
                <Input
                  value={fromInput}
                  onChange={handleFromInputChange}
                  className={`w-full ${!fromInput ? 'pl-4 py-8' : 'pl-4 pt-10 pb-8'} text-lg`}
                />
                {isFromDropdownVisible ? (
              <GoChevronUp className="absolute right-4 h-6 w-6 text-gray-500" />
            ) : (
              <GoChevronDown className="absolute right-4 h-6 w-6 text-gray-500" />
            )}
              </label>
                {isFromDropdownVisible && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white shadow-lg border rounded-md z-10">
                {filteredFromAirports.map((airport) => (
                  <div
                    key={airport.code}
                    className="p-2 m-2 cursor-pointer hover:bg-gray-100 flex justify-between"
                    onClick={() => handleFromAirportSelect(`${airport.city} (${airport.code})`)}
                  >
                    <div>
                      <p className="font">{airport.city}</p>
                      <p className="text-sm text-gray-500">{airport.country}</p>
                    </div>
                    <p className=" text-lg">{airport.code}</p>
                  </div>
                ))}
              </div>
            )}
            </div>
    
              {/* Swap Icon */}
              <div className="flex items-center">
                <button className="p-4 bg-gray-100 rounded-full shadow-sm ">
                  <IoIosSwap className="h-7 w-7 text-gray-700 " />
                  
                </button>
              </div>
    
              {/* "Where To?" Field */}
            <div className="relative w-full flex items-center">
              {!toInput && (
                <BiTargetLock className="absolute left-4 h-6 w-6 text-gray-400" />
              )}
              <label className="w-full flex items-center cursor-text">
                {/* Label spans for clickable area */}
                <span
                  className={`absolute transition-all duration-300 ease-in-out text-gray-500 ${
                    toInput ? 'left-4 top-2 text-s' : 'left-12 top-5 text-lg'
                  }`}
                >
                  Where to?
                </span>
                {/* Input Field */}
                <Input
                  value={toInput}
                  onChange={handleToInputChange}
                  className={`w-full ${!toInput ? 'pl-4 py-8' : 'pl-4 pt-10 pb-8'} text-lg`}
                />
                 {isToDropdownVisible ? (
              <GoChevronUp className="absolute right-4 h-6 w-6 text-gray-500" />
            ) : (
              <GoChevronDown className="absolute right-4 h-6 w-6 text-gray-500" />
            )}
              </label>
                {isToDropdownVisible && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white shadow-lg border rounded-md z-10">
                {filteredToAirports.map((airport) => (
                  <div
                    key={airport.code}
                    className="p-4 cursor-pointer hover:bg-gray-100 flex justify-between"
                    onClick={() => handleToAirportSelect(`${airport.city} (${airport.code})`)}
                  >
                    <div>
                      <p className="">{airport.city}</p>
                      <p className="text-sm text-gray-500">{airport.country}</p>
                    </div>
                    <p className=" text-lg">{airport.code}</p>
                  </div>
                ))}
              </div>
            )}
              </div>
    
              {/* Departure Field */}
              <div className="relative w-full flex items-center">
                <CiCalendar className="absolute left-4 h-6 w-6 text-gray-500" />
                <Input placeholder="Departure" className="w-full pl-12 text-lg py-8" />
              </div>
    
              {/* Return Field */}
              <div className="relative w-full flex items-center">
                <CiCalendar className="absolute left-4 h-6 w-6 text-gray-500" />
                <Input placeholder="Return" className="w-full pl-12 text-lg py-8" />
              </div>
            </div>
    
            {/* Search Button with Icon */}
            <div className="mt-8 flex justify-end">
              <Button onClick={handleSearchFlights} className="bg-[#003E39] hover:bg-green-900 text-white py-7 px-12 rounded-md flex items-center space-x-3 text-xl">
                <CiSearch className="h-6 w-6" />
                <span>Search flights</span>
              </Button>
            </div>
          </div>
       
      );
    };
    
export default FlightSearch;
