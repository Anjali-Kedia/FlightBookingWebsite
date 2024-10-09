'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CiCalendar, CiSearch } from 'react-icons/ci';
import { IoIosSwap } from 'react-icons/io';
import { BiTargetLock } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import airportData from '@/data/airports.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FlightSearch = () => {
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');
  const [filteredFromAirports, setFilteredFromAirports] = useState(airportData.airports);
  const [filteredToAirports, setFilteredToAirports] = useState(airportData.airports);
  const [isFromDropdownVisible, setFromDropdownVisible] = useState(false);
  const [isToDropdownVisible, setToDropdownVisible] = useState(false);

  // State for departure and return dates
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  const router = useRouter();

  // Load saved data from localStorage when component mounts
  useEffect(() => {
    const savedDetails = localStorage.getItem('flightSearch');
    if (savedDetails) {
      const parsedDetails = JSON.parse(savedDetails);
      setFromInput(parsedDetails.from || '');
      setToInput(parsedDetails.to || '');
      setDepartureDate(parsedDetails.departureDate ? new Date(parsedDetails.departureDate) : null);
      setReturnDate(parsedDetails.returnDate ? new Date(parsedDetails.returnDate) : null);
    }
  }, []);

  // Store data in localStorage whenever inputs are changed
  const updateLocalStorage = () => {
    localStorage.setItem('flightSearch', JSON.stringify({
      from: fromInput,
      to: toInput,
      departureDate: departureDate ? departureDate.toISOString() : null,
      returnDate: returnDate ? returnDate.toISOString() : null,
    }));
  };

  useEffect(() => {
    updateLocalStorage();
  }, [fromInput, toInput, departureDate, returnDate]);

  const handleFromInputClick = () => {
    setFilteredFromAirports(airportData.airports);
    setFromDropdownVisible(true);
  };

  const handleToInputClick = () => {
    setFilteredToAirports(airportData.airports);
    setToDropdownVisible(true);
  };

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
    } else {
      setFilteredFromAirports(airportData.airports);
    }
  };

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
    } else {
      setFilteredToAirports(airportData.airports);
    }
  };

  const handleFromAirportSelect = (airport: string) => {
    setFromInput(airport);
    setFromDropdownVisible(false);
  };

  const handleToAirportSelect = (airport: string) => {
    setToInput(airport);
    setToDropdownVisible(false);
  };

  const handleSearchFlights = () => {
    router.push('/loading');
  };

  return (
    <div>
      {/* Flight Search Form */}
      <div className="flex items-center justify-between space-x-6">
        {/* "Where From?" Field */}
        <div className="relative w-full flex items-center">
          {!fromInput && <BiTargetLock className="absolute left-4 h-6 w-6 text-gray-400" />}
          <label className="w-full flex items-center cursor-text">
            <span className={`absolute transition-all duration-300 ease-in-out text-gray-600 ${fromInput ? 'left-4 top-2 text-s' : 'left-12 top-5 text-lg'}`}>
              Where from?
            </span>
            <Input
              value={fromInput}
              onChange={handleFromInputChange}
              onClick={handleFromInputClick}
              className={`w-full ${!fromInput ? 'pl-4 py-8' : 'pl-4 pt-10 pb-8'} text-lg`}
            />
            {isFromDropdownVisible ? (
              <GoChevronUp className="absolute right-4 h-6 w-6 text-gray-500" />
            ) : (
              <GoChevronDown className="absolute right-4 h-6 w-6 text-gray-500" />
            )}
          </label>
          {isFromDropdownVisible && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white shadow-lg border rounded-md z-10 max-h-60 overflow-y-auto">
              {filteredFromAirports.map((airport) => (
                <div
                  key={airport.code}
                  className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between"
                  onClick={() => handleFromAirportSelect(`${airport.city} (${airport.code})`)}
                >
                  <div>
                    <p className="font">{airport.city}</p>
                    <p className="text-sm text-gray-500">{airport.country}</p>
                  </div>
                  <p className="text-lg">{airport.code}</p>
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
          {!toInput && <BiTargetLock className="absolute left-4 h-6 w-6 text-gray-400" />}
          <label className="w-full flex items-center cursor-text">
            <span className={`absolute transition-all duration-300 ease-in-out text-gray-500 ${toInput ? 'left-4 top-2 text-s' : 'left-12 top-5 text-lg'}`}>
              Where to?
            </span>
            <Input
              value={toInput}
              onChange={handleToInputChange}
              onClick={handleToInputClick}
              className={`w-full ${!toInput ? 'pl-4 py-8' : 'pl-4 pt-10 pb-8'} text-lg`}
            />
            {isToDropdownVisible ? (
              <GoChevronUp className="absolute right-4 h-6 w-6 text-gray-500" />
            ) : (
              <GoChevronDown className="absolute right-4 h-6 w-6 text-gray-500" />
            )}
          </label>
          {isToDropdownVisible && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white shadow-lg border rounded-md z-10 max-h-60 overflow-y-auto">
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
                  <p className="text-lg">{airport.code}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Departure Date Picker */}
        <div className="relative w-full flex items-center border rounded-md">
          <CiCalendar className="absolute left-4 h-6 w-6 text-gray-500 z-30" />
          <DatePicker
            selected={departureDate}
            onChange={(date: Date | null) => setDepartureDate(date)} // Accept Date | null
            className=" pl-12 text-lg py-5 "
            placeholderText="Departure"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        {/* Return Date Picker */}
        <div className="relative w-full flex items-center border rounded-md">
          <CiCalendar className="absolute left-4 h-6 w-6 text-gray-500 z-30" />
          <DatePicker
            selected={returnDate}
            onChange={(date: Date | null) => setReturnDate(date)} // Accept Date | null
            className="w-full pl-12 text-lg py-5 "
            placeholderText="Return"
            dateFormat="dd/MM/yyyy"
          />
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
