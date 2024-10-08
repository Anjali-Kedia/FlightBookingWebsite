import Image from "next/image";
import FlightSearch from "@/components/Hero";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen  font-montreal pt-24">
          {/* Greeting Section Outside the Box */}
          <div className="mb-8 text-center">
            <h1 className="text-[42px]  text-gray-800">Good afternoon, Brian</h1>
          </div>
    
          {/* Flight Search Form Box */}
          <div className="bg-white shadow-sm rounded-lg p-10 w-full max-w-6xl border border-gray-200">
            {/* Tabs */}
            <div className="flex justify-start mb-6">
              <button className="py-2 px-8 bg-gray-100 text-gray-700 text-xl  rounded-md focus:outline-none focus:ring">
                Flights
              </button>
            </div>
            <FlightSearch/>
          </div>
      </div>
    </div>
  );
}
