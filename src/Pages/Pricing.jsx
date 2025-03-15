import React, { useState } from "react";

const Pricing = () => {
  const [formData, setFormData] = useState({
    shippingMethod: "Surface",
    status: "Forward",
    originPincode: "",
    destinationPincode: "",
    codAmount: "0",
    paymentMode: "COD",
    shipmentType: "B2C",
    invoiceAmount: "0",
  });

  const [boxes, setBoxes] = useState([
    { weight: "", weightUnit: "g", length: "", breadth: "", height: "", count: "" },
  ]);

  // Handle input change for formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle input change for boxes
  const handleBoxChange = (index, e) => {
    const newBoxes = [...boxes];
    newBoxes[index][e.target.name] = e.target.value;
    setBoxes(newBoxes);
  };

  // Add a new box
  const addBox = () => {
    setBoxes([...boxes, { weight: "", weightUnit: "g", length: "", breadth: "", height: "", count: "" }]);
  };

  // Remove a box
  const removeBox = (index) => {
    const newBoxes = boxes.filter((_, i) => i !== index);
    setBoxes(newBoxes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, boxes });
  };

  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-6">Calculate Your Shipping Price</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Shipping Method & Status */}
          <div>
            <label className="block">Shipping Method</label>
            <select name="shippingMethod" value={formData.shippingMethod} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="Surface">Surface</option>
              <option value="Air">Air</option>
            </select>
          </div>
          <div>
            <label className="block">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="Forward">Forward</option>
              <option value="Return">Return</option>
            </select>
          </div>

          {/* Origin & Destination */}
          <input type="text" name="originPincode" placeholder="Origin Pincode" className="w-full p-2 border rounded" onChange={handleChange} />
          <input type="text" name="destinationPincode" placeholder="Destination Pincode" className="w-full p-2 border rounded" onChange={handleChange} />

          {/* COD & Payment Mode */}
          <input type="text" name="codAmount" placeholder="COD Amount" className="w-full p-2 border rounded" onChange={handleChange} />
          <select name="paymentMode" value={formData.paymentMode} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="COD">COD</option>
            <option value="Prepaid">Prepaid</option>
          </select>

          {/* Shipment Type & Invoice Amount */}
          <select name="shipmentType" value={formData.shipmentType} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="B2C">B2C</option>
            <option value="B2B">B2B</option>
          </select>
          <input type="text" name="invoiceAmount" placeholder="Invoice Amount" className="w-full p-2 border rounded" onChange={handleChange} />

          {/* Dynamic Box Fields */}
          <div className="col-span-2 space-y-4">
            {boxes.map((box, index) => (
              <div key={index} className="flex gap-2 items-center border p-3 rounded shadow-sm">
                <input type="text" name="weight" placeholder="Weight" className="w-1/5 p-2 border rounded" value={box.weight} onChange={(e) => handleBoxChange(index, e)} />
                <select name="weightUnit" value={box.weightUnit} onChange={(e) => handleBoxChange(index, e)} className="w-1/5 p-2 border rounded">
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                </select>
                <input type="text" name="length" placeholder="L (cm)" className="w-1/5 p-2 border rounded" value={box.length} onChange={(e) => handleBoxChange(index, e)} />
                <input type="text" name="breadth" placeholder="B (cm)" className="w-1/5 p-2 border rounded" value={box.breadth} onChange={(e) => handleBoxChange(index, e)} />
                <input type="text" name="height" placeholder="H (cm)" className="w-1/5 p-2 border rounded" value={box.height} onChange={(e) => handleBoxChange(index, e)} />
                <input type="text" name="count" placeholder="Count" className="w-1/5 p-2 border rounded" value={box.count} onChange={(e) => handleBoxChange(index, e)} />
                {index > 0 && (
                  <button type="button" className="bg-white text-white px-2 py-1 rounded" onClick={() => removeBox(index)}>
                    ❌
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-between mt-4">
            <button type="button" onClick={addBox} className="bg-green-400 text-green-800 px-4 py-2 rounded">
              ➕ Add More Boxes
            </button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Submit and Compare
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pricing;
