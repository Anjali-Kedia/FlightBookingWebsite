import FlightSearch from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen font-montreal pt-24">
      {/* Dashed Lines */}
      <div className="absolute top-0 w-full max-w-6xl flex justify-between">
        {/* Left Dashed Line */}
        <div
          className="h-48"
          style={{
            borderRight: "2px dashed #d1d5db",
            borderImage: "repeating-linear-gradient(transparent, transparent 10px, #e6e8eb 10px, #d1d5db 25px) 2",
          }}
        ></div>
        <div
          className="h-48 "
          style={{
            borderRight: "2px dashed #d1d5db",
            borderImage: "repeating-linear-gradient(transparent, transparent 10px, #e6e8eb 10px, #d1d5db 25px) 2",
          }}
        ></div>
        <div
          className="h-48 pl-32"
          style={{
            borderRight: "2px dashed #d1d5db",
            borderImage: "repeating-linear-gradient(transparent, transparent 10px, #e6e8eb 10px, #d1d5db 25px) 2",
          }}
        ></div>
        {/* Right Dashed Line */}
        <div
          className="h-48"
          style={{
            borderRight: "2px dashed #d1d5db",
            borderImage: "repeating-linear-gradient(transparent, transparent 10px, #e6e8eb  10px, #d1d5db 25px) 2",
          }}
        ></div>
      </div>

      {/* Greeting Section Outside the Box */}
      <div className="mb-8 text-center z-10">
        <h1 className="text-[42px] text-gray-800">Good afternoon, Brian</h1>
      </div>

      {/* Flight Search Form Box */}
      <div className="bg-white shadow-sm rounded-lg p-10 w-full max-w-6xl border border-gray-200 z-10">
        {/* Tabs */}
        <div className="flex justify-start mb-6">
          <button className="py-2 px-8 bg-gray-100 text-gray-700 text-xl rounded-md focus:outline-none focus:ring">
            Flights
          </button>
        </div>
        <FlightSearch />
      </div>
    </div>
  );
}
