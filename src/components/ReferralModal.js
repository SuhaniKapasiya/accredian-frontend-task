import React, { useState } from "react";
import { referapi } from "../utils/api";
import { toast } from "react-toastify"; 

const ReferralModal = ({ onClose }) => {

  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await referapi(formData);
      toast.success("Referral submitted successfully!");
      onClose();
    } catch (error) {
      toast.error("Error submitting referral!");
      console.error("Error submitting referral", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="border p-2 w-full text-black"
            type="text"
            name="referrerName"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 w-full text-black"
            type="email"
            name="referrerEmail"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 w-full text-black"
            type="text"
            name="refereeName"
            placeholder="Friend's Name"
            onChange={handleChange}
            required
          />
          <input
            className="border p-2 w-full text-black"
            type="email"
            name="refereeEmail"
            placeholder="Friend's Email"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
        <button onClick={onClose} className="mt-3 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default ReferralModal;
