import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <button
        onClick={() => navigate("/pre-prod")}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Pre Production
      </button>
      <button
        onClick={() => navigate("/crop-season")}
        className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none"
      >
        Crop Season
      </button>
      <button
        onClick={() => navigate("/post-prod")}
        className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none"
      >
        Post Production
      </button>
    </div>
  );
};

export default Home;
