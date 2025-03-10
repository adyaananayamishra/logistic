//  import React, { useState } from "react";

//  const ShippingCalculator = () => {
//    const [showModal, setShowModal] = useState(false);

//    const handleSubmit = () => {
//      setShowModal(true);
//    };

//    return (
//      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
//        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
//          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 pb-2">
//            <span>Calculate Your Shipping Price</span>
//          </h2>
//          <div className="grid grid-cols-2 gap-4">
//            <div>
//              <label className="block text-gray-600">Shipping Method</label>
//              <select className="w-full p-2 border rounded">
//                <option>Surface</option>
//                <option>Air</option>
//              </select>
//            </div>
//            <div>
//              <label className="block text-gray-600">Status</label>
//              <select className="w-full p-2 border rounded">
//                <option>Forward</option>
//                <option>Return</option>
//              </select>
//            </div>
//            <div>
//              <label className="block text-gray-600">Origin Pincode</label>
//              <input type="text" placeholder="Ex. 813210" className="w-full p-2 border rounded" />
//            </div>
//            <div>
//              <label className="block text-gray-600">Destination Pincode</label>
//              <input type="text" placeholder="Ex. 845401" className="w-full p-2 border rounded" />
//            </div>
//            <div>
//              <label className="block text-gray-600">COD Amount</label>
//              <input type="number" defaultValue={0} className="w-full p-2 border rounded" />
//            </div>
//            <div>
//              <label className="block text-gray-600">Payment Mode</label>
//              <select className="w-full p-2 border rounded">
//                <option>COD</option>
//                <option>Prepaid</option>
//              </select>
//            </div>
//            <div>
//              <label className="block text-gray-600">Shipment Type</label>
//              <select className="w-full p-2 border rounded">
//                <option>B2C</option>
//                <option>B2B</option>
//              </select>
//            </div>
//            <div>
//              <label className="block text-gray-600">Invoice Amount</label>
//              <input type="number" defaultValue={0} className="w-full p-2 border rounded" />
//            </div>
//          </div>
//          <div className="mt-4 grid grid-cols-6 gap-2">
//            <input type="number" placeholder="Weight" className="p-2 border rounded col-span-2" />
//            <select className="p-2 border rounded">
//              <option>g</option>
//              <option>kg</option>
//            </select>
//            <input type="number" placeholder="L (cm)" className="p-2 border rounded" />
//            <input type="number" placeholder="B (cm)" className="p-2 border rounded" />
//            <input type="number" placeholder="H (cm)" className="p-2 border rounded" />
//            <input type="number" placeholder="Count" className="p-2 border rounded" />
//          </div>
//          <div className="mt-6 flex space-x-4">
//            <button className="px-4 py-2 border border-black text-black rounded ">
//              Add More Boxes
//            </button>
//            <button className="px-4 py-2 bg-black text-white rounded" onClick={handleSubmit}>
//              Submit and Compare
//            </button>
//          </div>

//          {/* Modal */}
//          {showModal && (
//            <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
//              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//                <h3 className="text-lg font-bold mb-4">Choose Your Service</h3>
//                <button
//                  className="px-4 py-2 bg-red-500 text-white rounded w-full"
//                  onClick={() => setShowModal(false)}
//                >
//                  Close
//                </button>
//              </div>
//            </div>
//          )}
//        </div>
//      </div>
//    );
//  };

 import React, { useState } from "react";

 const ShippingCalculator = () => {
   const [showModal, setShowModal] = useState(false);
 
   const handleSubmit = (event) => {
     event.preventDefault(); // Prevents page refresh
     setShowModal(true);
   };
 
   return (
     <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
       <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
         <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 pb-2">
           Calculate Your Shipping Price
         </h2>
         
         <form onSubmit={handleSubmit}>
           <div className="grid grid-cols-2 gap-4">
             <div>
               <label className="block text-gray-600">Shipping Method</label>
               <select className="w-full p-2 border rounded">
                 <option>Surface</option>
                 <option>Air</option>
               </select>
             </div>
             <div>
               <label className="block text-gray-600">Status</label>
               <select className="w-full p-2 border rounded">
                 <option>Forward</option>
                 <option>Return</option>
               </select>
             </div>
             <div>
               <label className="block text-gray-600">Origin Pincode</label>
               <input type="text" className="w-full p-2 border rounded" />
             </div>
             <div>
               <label className="block text-gray-600">Destination Pincode</label>
               <input type="text" className="w-full p-2 border rounded" />
             </div>
             <div>
               <label className="block text-gray-600">COD Amount</label>
               <input type="number" defaultValue={0} className="w-full p-2 border rounded" />
             </div>
             <div>
               <label className="block text-gray-600">Payment Mode</label>
               <select className="w-full p-2 border rounded">
                 <option>COD</option>
                 <option>Prepaid</option>
               </select>
             </div>
             <div>
               <label className="block text-gray-600">Shipment Type</label>
               <select className="w-full p-2 border rounded">
                 <option>B2C</option>
                 <option>B2B</option>
               </select>
             </div>
             <div>
               <label className="block text-gray-600">Invoice Amount</label>
               <input type="number" defaultValue={0} className="w-full p-2 border rounded" />
             </div>
           </div>
 
           {/* Weight & Dimensions */}
           <div className="mt-4 grid grid-cols-6 gap-2">
             <input type="number" placeholder="Weight" className="p-2 border rounded col-span-2" />
             <select className="p-2 border rounded">
               <option>g</option>
               <option>kg</option>
             </select>
             <input type="number" placeholder="L (cm)" className="p-2 border rounded" />
             <input type="number" placeholder="B (cm)" className="p-2 border rounded" />
             <input type="number" placeholder="H (cm)" className="p-2 border rounded" />
             <input type="number" placeholder="Count" className="p-2 border rounded" />
           </div>
 
           {/* Buttons */}
           <div className="mt-4 flex space-x-4">
             <button type="button" className="px-4 py-2 border border-black text-black rounded">
               Add More Boxes
             </button>
             <button type="submit" className="px-4 py-2 bg-black text-white rounded">
               Submit and Compare
             </button>
           </div>
         </form>
 
         {/* Modal */}
         {showModal && (
           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
               <h3 className="text-lg font-bold mb-4">Choose Your Service</h3>
               <button
                 className="px-4 py-2 bg-red-500 text-white rounded w-full"
                 onClick={() => setShowModal(false)}
               >
                 Close
               </button>
             </div>
           </div>
         )}
       </div>
     </div>
   );
 };
 
 export default ShippingCalculator;
 