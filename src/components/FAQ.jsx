import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Adya Express offer?",
    answer: "Adya Express offers domestic and international shipping, express deliveries, logistics solutions, and parcel tracking services.",
  },
  {
    question: "How can I track my shipment?",
    answer: "You can track your shipment using the tracking ID on our tracking page. Just enter the ID and get real-time updates.",
  },
  {
    question: "What is the estimated delivery time for shipments?",
    answer: "Delivery times vary based on destination. Local deliveries take 1-3 days, while international shipments can take 5-10 days.",
  },
  {
    question: "How do I schedule a shipment?",
    answer: "You can schedule a shipment through our website or mobile app by entering the package details and selecting a pickup date.",
  },
  {
    question: "What are your shipping rates?",
    answer: "Shipping rates depend on package weight, dimensions, destination, and shipping speed. Use our shipping calculator for estimates.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-3">
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-200 text-left font-medium text-lg rounded-lg shadow-md transition duration-300 hover:bg-gray-300"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            {openIndex === index ? <FaMinus className="text-gray-600" /> : <FaPlus className="text-gray-600" />}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-100 border border-gray-300 rounded-b-lg transition duration-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
