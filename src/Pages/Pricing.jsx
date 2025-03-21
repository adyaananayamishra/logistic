// import React, { useState } from "react";

// const Pricing = () => {
//   const [formData, setFormData] = useState({
//     shippingMethod: "Surface",
//     status: "Forward",
//     originPincode: "",
//     destinationPincode: "",
//     codAmount: "0",
//     paymentMode: "COD",
//     shipmentType: "B2C",
//     invoiceAmount: "0",
//   });

//   const [boxes, setBoxes] = useState([
//     { weight: "", weightUnit: "g", length: "", breadth: "", height: "", count: "" },
//   ]);

//   // Handle input change for formData
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle input change for boxes
//   const handleBoxChange = (index, e) => {
//     const newBoxes = [...boxes];
//     newBoxes[index][e.target.name] = e.target.value;
//     setBoxes(newBoxes);
//   };

//   // Add a new box
//   const addBox = () => {
//     setBoxes([...boxes, { weight: "", weightUnit: "g", length: "", breadth: "", height: "", count: "" }]);
//   };

//   // Remove a box
//   const removeBox = (index) => {
//     const newBoxes = boxes.filter((_, i) => i !== index);
//     setBoxes(newBoxes);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ ...formData, boxes });
//   };

//   return (
//     <div className="bg-green-100 min-h-screen flex items-center justify-center p-6">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
//         <h2 className="text-2xl font-bold text-center mb-6">Calculate Your Shipping Price</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//           {/* Shipping Method & Status */}
//           <div>
//             <label className="block">Shipping Method</label>
//             <select name="shippingMethod" value={formData.shippingMethod} onChange={handleChange} className="w-full p-2 border rounded">
//               <option value="Surface">Surface</option>
//               <option value="Air">Express</option>
//             </select>
//           </div>
//           <div>
//             <label className="block">Status</label>
//             <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
//               <option value="Forward">Forward</option>
//               <option value="Return">RTO</option>
//               <option value="Return">Reverse</option>
//             </select>
//           </div>

//           {/* Origin & Destination */}
//           <input type="text" name="originPincode" placeholder="Origin Pincode" className="w-full p-2 border rounded" onChange={handleChange} />
//           <input type="text" name="destinationPincode" placeholder="Destination Pincode" className="w-full p-2 border rounded" onChange={handleChange} />

//           {/* COD & Payment Mode */}
//           <input type="text" name="codAmount" placeholder="COD Amount" className="w-full p-2 border rounded" onChange={handleChange} />
//           <select name="paymentMode" value={formData.paymentMode} onChange={handleChange} className="w-full p-2 border rounded">
//             <option value="COD">COD</option>
//             <option value="Prepaid">Prepaid</option>
//           </select>

//           {/* Shipment Type & Invoice Amount */}
//           <select name="shipmentType" value={formData.shipmentType} onChange={handleChange} className="w-full p-2 border rounded">
//             <option value="B2C">B2C</option>
//             <option value="B2B">B2B</option>
//           </select>
//           <input type="text" name="invoiceAmount" placeholder="Invoice Amount" className="w-full p-2 border rounded" onChange={handleChange} />

//           {/* Dynamic Box Fields */}
//           <div className="col-span-2 space-y-4">
//             {boxes.map((box, index) => (
//               <div key={index} className="flex gap-2 items-center border p-3 rounded shadow-sm">
//                 <input type="text" name="weight" placeholder="Weight" className="w-1/5 p-2 border rounded" value={box.weight} onChange={(e) => handleBoxChange(index, e)} />
//                 <select name="weightUnit" value={box.weightUnit} onChange={(e) => handleBoxChange(index, e)} className="w-1/5 p-2 border rounded">
//                   <option value="g">g</option>
//                   <option value="kg">kg</option>
//                 </select>
//                 <input type="text" name="length" placeholder="L (cm)" className="w-1/5 p-2 border rounded" value={box.length} onChange={(e) => handleBoxChange(index, e)} />
//                 <input type="text" name="breadth" placeholder="B (cm)" className="w-1/5 p-2 border rounded" value={box.breadth} onChange={(e) => handleBoxChange(index, e)} />
//                 <input type="text" name="height" placeholder="H (cm)" className="w-1/5 p-2 border rounded" value={box.height} onChange={(e) => handleBoxChange(index, e)} />
//                 <input type="text" name="count" placeholder="Count" className="w-1/5 p-2 border rounded" value={box.count} onChange={(e) => handleBoxChange(index, e)} />
//                 {index > 0 && (
//                   <button type="button" className="bg-white text-white px-2 py-1 rounded" onClick={() => removeBox(index)}>
//                     ❌
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="col-span-2 flex justify-between mt-4">
//             <button type="button" onClick={addBox} className="bg-green-400 text-green-800 px-4 py-2 rounded">
//               ➕ Add More Boxes
//             </button>
//             <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//               Submit and Compare
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

// import React, { useState } from "react";

// const Pricing = () => {
//   const [formData, setFormData] = useState({
//     shippingMethod: "Surface",
//     status: "Forward",
//     originPincode: "",
//     destinationPincode: "",
//     codAmount: "0",
//     paymentMode: "COD",
//     shipmentType: "B2C",
//     invoiceAmount: "0",
//   });

//   const [boxes, setBoxes] = useState([
//     { weight: "", weightUnit: "g", length: "", breadth: "", height: "", count: "" },
//   ]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleBoxChange = (index, e) => {
//     const newBoxes = [...boxes];
//     newBoxes[index][e.target.name] = e.target.value;
//     setBoxes(newBoxes);
//   };

//   const addBox = () => {
//     setBoxes([...boxes, { weight: "", weightUnit: "g", length: "", breadth: "", height: "", count: "" }]);
//   };

//   const removeBox = (index) => {
//     const newBoxes = boxes.filter((_, i) => i !== index);
//     setBoxes(newBoxes);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ ...formData, boxes });
//   };

//   return (
//     <div className="bg-green-100 min-h-screen flex items-center justify-center p-4 sm:p-6">
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl">
//         <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Calculate Your Shipping Price</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block">Shipping Method</label>
//             <select name="shippingMethod" value={formData.shippingMethod} onChange={handleChange} className="w-full p-2 border rounded">
//               <option value="Surface">Surface</option>
//               <option value="Air">Express</option>
//             </select>
//           </div>
//           <div>
//             <label className="block">Status</label>
//             <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
//               <option value="Forward">Forward</option>
//               <option value="Return">RTO</option>
//               <option value="Return">Reverse</option>
//             </select>
//           </div>

//           <input type="text" name="originPincode" placeholder="Origin Pincode" className="w-full p-2 border rounded" onChange={handleChange} />
//           <input type="text" name="destinationPincode" placeholder="Destination Pincode" className="w-full p-2 border rounded" onChange={handleChange} />

//           <input type="text" name="codAmount" placeholder="COD Amount" className="w-full p-2 border rounded" onChange={handleChange} />
//           <select name="paymentMode" value={formData.paymentMode} onChange={handleChange} className="w-full p-2 border rounded">
//             <option value="COD">COD</option>
//             <option value="Prepaid">Prepaid</option>
//           </select>

//           <select name="shipmentType" value={formData.shipmentType} onChange={handleChange} className="w-full p-2 border rounded">
//             <option value="B2C">B2C</option>
//             <option value="B2B">B2B</option>
//           </select>
//           <input type="text" name="invoiceAmount" placeholder="Invoice Amount" className="w-full p-2 border rounded" onChange={handleChange} />

//           <div className="col-span-1 sm:col-span-2 space-y-4">
//             {boxes.map((box, index) => (
//               <div key={index} className="flex flex-wrap gap-2 items-center border p-3 rounded shadow-sm">
//                 <input type="text" name="weight" placeholder="Weight" className="flex-grow p-2 border rounded" value={box.weight} onChange={(e) => handleBoxChange(index, e)} />
//                 <select name="weightUnit" value={box.weightUnit} onChange={(e) => handleBoxChange(index, e)} className="p-2 border rounded">
//                   <option value="g">g</option>
//                   <option value="kg">kg</option>
//                 </select>
//                 <input type="text" name="length" placeholder="L (cm)" className="flex-grow p-2 border rounded" value={box.length} onChange={(e) => handleBoxChange(index, e)} />
//                 <input type="text" name="breadth" placeholder="B (cm)" className="flex-grow p-2 border rounded" value={box.breadth} onChange={(e) => handleBoxChange(index, e)} />
//                 <input type="text" name="height" placeholder="H (cm)" className="flex-grow p-2 border rounded" value={box.height} onChange={(e) => handleBoxChange(index, e)} />
//                 <input type="text" name="count" placeholder="Count" className="flex-grow p-2 border rounded" value={box.count} onChange={(e) => handleBoxChange(index, e)} />
//                 {index > 0 && (
//                   <button type="button" className="text-red-500 px-2 py-1 rounded" onClick={() => removeBox(index)}>❌</button>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="col-span-1 sm:col-span-2 flex justify-between mt-4">
//             <button type="button" onClick={addBox} className="bg-green-400 text-white px-4 py-2 rounded">
//               ➕ Add More Boxes
//             </button>
//             <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//               Submit and Compare
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

import React, { useState } from "react";

const ShippingCalculator = () => {
  const [boxes, setBoxes] = useState([{ id: 1 }]); // Initial box

  // Function to add a new box
  const addBox = () => {
    setBoxes([...boxes, { id: boxes.length + 1 }]);
  };

  // Function to remove a box by ID
  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4 mt-20">
          Calculate Your Shipping Price
        </h2>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipping Method */}
          <div>
            <label className="block text-gray-700 font-semibold">Shipping Method</label>
            <select className="w-full p-2 border rounded-md focus:ring-emerald-500">
              <option>Surface</option>
              <option>Express</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-gray-700 font-semibold">Status</label>
            <select className="w-full p-2 border rounded-md focus:ring-emerald-500">
              <option>Forward</option>
              <option>RTO</option>
              <option>Reverse</option>
            </select>
          </div>

          {/* Origin Pincode */}
          <div>
            <label className="block text-gray-700 font-semibold">Origin Pincode</label>
            <input
              type="text"
              placeholder="Ex. 813210"
              className="w-full p-2 border rounded-md focus:ring-emerald-500"
            />
          </div>

          {/* Destination Pincode */}
          <div>
            <label className="block text-gray-700 font-semibold">Destination Pincode</label>
            <input
              type="text"
              placeholder="Ex. 845401"
              className="w-full p-2 border rounded-md focus:ring-emerald-500"
            />
          </div>

          {/* COD Amount */}
          <div>
            <label className="block text-gray-700 font-semibold">COD Amount</label>
            <input
              type="number"
              placeholder="0"
              className="w-full p-2 border rounded-md focus:ring-emerald-500"
            />
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-gray-700 font-semibold">Payment Mode</label>
            <select className="w-full p-2 border rounded-md focus:ring-emerald-500">
              <option>COD</option>
              <option>Prepaid</option>
            </select>
          </div>

          {/* Shipment Type */}
          <div>
            <label className="block text-gray-700 font-semibold">Shipment Type</label>
            <select className="w-full p-2 border rounded-md focus:ring-emerald-500">
              <option>B2C</option>
              <option>B2B</option>
            </select>
          </div>

          {/* Invoice Amount */}
          <div>
            <label className="block text-gray-700 font-semibold">Invoice Amount</label>
            <input
              type="number"
              placeholder="0"
              className="w-full p-2 border rounded-md focus:ring-emerald-500"
            />
          </div>
        </div>

  
      

        {/* Dynamically Added Boxes */}
        {boxes.map((box) => (
          <div key={box.id} className="overflow-x-auto">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-3 bg-gray-100 p-3 rounded-lg shadow mt-3 min-w-[240px] relative">
              <input type="number" className="p-2 border rounded-md" placeholder="Weight" />
              <select className="p-2 border rounded-md">
                <option>g</option>
                <option>kg</option>
              </select>
              <input type="number" className="p-2 border rounded-md" placeholder="L (cm)" />
              <input type="number" className="p-2 border rounded-md" placeholder="B (cm)" />
              <input type="number" className="p-2 border rounded-md" placeholder="H (cm)" />
              <input type="number" className="p-2 border rounded-md" placeholder="Count" />
              {boxes.length>1?<button
                type="button"
                onClick={() => removeBox(box.id)}
                className="absolute top-[-8px] right-1 text-red-600 hover:text-red-800"
              >
                ❌
              </button>:null}
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between mt-4  space-x-4">
          <button
            type="button"
            onClick={addBox}
            className="px-4 py-2 border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-100 transition"
          >
            ➕ Add More Boxes
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition"
          >
            Submit and Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingCalculator;


