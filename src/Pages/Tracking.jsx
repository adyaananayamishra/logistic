import React, { useState } from "react";

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    if (trackingId.trim() === "") {
      alert("Please enter a tracking ID");
      return;
    }
    console.log("Tracking parcel with ID:", trackingId);
    // Implement tracking logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Track Your Parcel
        </h2>

        <div className="flex items-center border border-gray-300 rounded-full shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Enter Tracking Id/AWB"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="px-4 py-3 w-full text-gray-700 outline-none rounded-l-full"
          />
          <button
            onClick={handleTrack}
            className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-r-full hover:bg-emerald-600 transition"
          >
            Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackParcel;
