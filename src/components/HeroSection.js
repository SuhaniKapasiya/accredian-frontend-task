import React, { useState } from "react";
import ReferralModal from "./ReferralModal";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="relative bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center max-w-5xl w-full ">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900">
            Let’s Learn & Earn
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Get a chance to win up to{" "}
            <span className="text-blue-500 font-bold">Rs. 15,000</span>
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Refer Now
          </button>
        </div>

        {/* Right Section - Image & Icons */}
        <div className="w-1/2 flex justify-center relative mt-6 md:mt-0">
          <img
            src="https://res.cloudinary.com/dtqnuyqei/image/upload/v1739539190/Anniversary_7_1_huxuvn.png"
            alt="Mobile Mockup"
            className="w-64 md:w-80 lg:w-96 shadow-lg rounded-lg z-10"
          />
          {/* Floating Money Icons */}
          <img
            src="https://res.cloudinary.com/dtqnuyqei/image/upload/v1739539496/Anniversary_8_1_1_um3yzw.png"
            alt="Money Icon"
            className="w-14 absolute top-0 left-0 animate-bounce"
          />
          <img
            src="https://res.cloudinary.com/dtqnuyqei/image/upload/v1739539496/Anniversary_8_1_1_um3yzw.png"
            alt="Money Icon"
            className="w-14 absolute bottom-0 right-0 animate-bounce"
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <ReferralModal onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
