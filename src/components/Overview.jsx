import React from "react";

export default function CompanyOverview() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Who We Are</h2>

        {/* Mission, Vision, and Values Section */}
        <div className="space-y-6 text-left md:text-center">
          <div>
            <h3 className="text-2xl font-semibold text-black">Our Mission</h3>
            <p className="text-gray-700 mt-2">
              Delivering innovative, cost-effective, and time-sensitive logistics solutions to ensure seamless global transportation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black">Our Vision</h3>
            <p className="text-gray-700 mt-2">
              To be the most trusted logistics partner, redefining efficiency and sustainability in supply chain management.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black">Our Values</h3>
            <p className="text-gray-700 mt-2">
              Customer-first approach, transparency, innovation, and a commitment to sustainability drive our business forward.
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <img src="/assets/logistics.jpg" alt="logistics" className="rounded-lg shadow-md" />
          <img src="/assets/warehouse.jpg" alt="Warehouse" className="rounded-lg shadow-md" />
          <img src="/assets/supply-chain.jpg" alt="Supply Chain" className="rounded-lg shadow-md md:col-span-3 mx-auto w-3/4" />
        </div>
      </div>
    </section>
  );
}
