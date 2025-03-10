import React, { useEffect, useRef } from "react";

const partners = [
  { name: "Razorpay", img: "/assets/razor.jpg" },
  { name: "Zoho", img: "/assets/zoho.jpg" },
  { name: "Delhivery", img: "/assets/delhivery.jpg" },
  { name: "BlueDart", img: "/assets/bluedart.jpg" },
  { name: "XpressBees", img: "/assets/xpress.jpg" },
];

const TrustedPartners = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;
        
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-200 py-10">
      <h2 className="text-center text-2xl font-bold mb-6">Our Trusted Partners</h2>
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap flex gap-6 px-6 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white p-4 rounded-lg shadow-lg w-48 h-28 flex items-center justify-center mx-2"
            >
              <img src={partner.img} alt={partner.name} className="max-h-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
