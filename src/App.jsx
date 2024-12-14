import React from "react";
import { useNavigate } from "react-router-dom";

const PreProd = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Pre-Production Assistance
      </h1>
      <button
        onClick={() => navigate("/optimal-crop")}
        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none"
      >
        Help Farmers Choose Correct Crop
      </button>
      <button
        onClick={() => navigate("/pre-fertilisers")}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Suggest Best Fertilizers
      </button>
    </div>
  );
};

export default PreProd;
