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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-2xl font-semibold mb-4">Track your Parcel</h2>
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-md">
        <input
          type="text"
          placeholder="Enter Tracking Id/AWB"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="px-4 py-2 outline-none w-64 text-gray-600"
        />
        <button
          onClick={handleTrack}
          className="px-4 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
        >
          Track
        </button>
      </div>
    </div>
  );
};

export default TrackParcel;
