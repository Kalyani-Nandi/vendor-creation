import React from "react";

function Shimmer() {
  return (
    <div
      className="w-full h-30 bg-white animate-pulse rounded-lg shadow-md p-4"
    >
      <div className="h-4 bg-gray-200 rounded-md mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
      <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
      <div className="flex gap-4">
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
}

export default Shimmer;
