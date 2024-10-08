"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiLoader5Line } from "react-icons/ri";
import Image from "next/image";
import bg_img from "../public/Bg_loading.png"; // Adjust the path if needed

const LoadingScreen = () => {
  const [step, setStep] = useState(1);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Redirect to flight details page after all steps are done
  useEffect(() => {
    if (step === 3) {
      setTimeout(() => {
        router.push("/flight-details"); // Redirect to flight details page
      }, 1000); // Optional delay before redirecting (1 second in this case)
    }
  }, [step, router]);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        alt="Mountains"
        src={bg_img}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        quality={100}
        className="z-0"
      />

      {/* Main Content - Centered Div */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-3xl shadow-lg p-10 text-center border border-gray-200 w-[450px]">
        {/* Image (Paper plane) */}
        <div className="flex justify-center mb-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/df34/ff5d/de2e13b8b13ef90316e36338415b882b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gf5vcD9rdcm2adRpOJP3gAjZdFw4t~nDk35aMPorNTirD6B6qGn4pQi1JbReocuqq~cxodGvgarRJAqSKVzdPvbZ0Gyv0mqiHHHJv~tpYoZFF-6NghBwV2j2pm3pgUrXDX-pAMCdybJneNFMyGh6rc4b0WuRxmPOYb1xwpjZtlNbcR4tUe3~0kr-qGqBrab0RTcQdcfhpY16~48jsZyfHNrKppbIOVS3uuCP56JxjeadzaL9X4m2sQkb0-fmozexqp6FxJLkxHRQGc877BVL6ltt~fNDX5w1DYb~HNrx4gEtmQEYKL-aay2uVWzMRKvcJXvHFiga99BawWL493xM9g__"
            alt="Paper Plane"
            className="w-52 h-40"
          />
        </div>

        {/* Steps with Checkmarks */}
        <div className="space-y-6 text-center">
          {/* Searching flights */}
          <div className="flex items-center justify-start space-x-2">
            <FaRegCircleCheck className={`w-6 h-6 ${step >= 1 ? 'text-green-700' : 'text-gray-500'}`} />
            <p className={`text-2xl pl-2 font-medium ${step >= 1 ? 'text-[#787B80]' : 'text-[#C9CACC]'}`}>
              Searching 400+ flights
            </p>
          </div>

          {/* Attaching company rules */}
          <div className="flex items-center justify-start space-x-2">
            {step >= 2 ? (
              <FaRegCircleCheck className="text-green-700 w-6 h-6" />
            ) : (
              <RiLoader5Line className="animate-spin text-gray-500 w-6 h-6" />
            )}
            <p className={`text-2xl pl-2 font-medium ${step >= 2 ? 'text-[#787B80]' : 'text-[#C9CACC]'}`}>
              Attaching company rules
            </p>
          </div>

          {/* Serving best results */}
          <div className="flex items-center justify-start space-x-2">
            {step >= 3 ? (
              <FaRegCircleCheck className="text-green-700 w-6 h-6" />
            ) : (
              <RiLoader5Line className="animate-spin text-gray-500 w-6 h-6" />
            )}
            <p className={`text-2xl pl-2 font-medium ${step >= 3 ? 'text-[#787B80]' : 'text-[#C9CACC]'}`}>
              Serving best results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
