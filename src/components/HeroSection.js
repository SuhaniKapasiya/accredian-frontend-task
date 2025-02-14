import React, { useState } from "react";
import ReferralModal from "./ReferralModal";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Refer & Earn</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
      >
        Refer Now
      </button>
      {isOpen && <ReferralModal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default HeroSection;
