// import React, { useState } from "react";

// const Blog = () => {
//   // Sample blog data
//   const blogPosts = [
//     {
//       id: 1,
//       title: "How to Optimize Shipping Routes for Maximum Efficiency",
//       date: "january 10 ,2025",
//       excerpt: "Learn advanced strategies to optimize your shipping routes, reduce operational costs, and enhance delivery speed for a seamless logistics experience.",
//       image: "https://source.unsplash.com/600x400/?logistics,truck", 
//       link: "#"
//     },
//     {
//       id: 2,
//       title: "The Future of Logistics: AI, Automation & Smart Solutions",
//       date: "March 5, 2025",
//       excerpt: "Discover how artificial intelligence, automation, and real-time data analytics are transforming the logistics industry, making deliveries smarter and more efficient.",
//       image: "https://source.unsplash.com/600x400/?warehouse,automation", 
//       link: "#"
//     },
//     {
//       id: 3,
//       title: "Sustainable Logistics: Eco-Friendly Delivery Solutions",
//       date: "July 15, 2024",
//       excerpt: "Explore innovative green logistics solutions that minimize environmental impact while maintaining efficiency in supply chain management.",
//       image: "https://source.unsplash.com/600x400/?sustainable,delivery",
//       link: "#"
//     }
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 2;

//   // Pagination logic
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
//   const totalPages = Math.ceil(blogPosts.length / postsPerPage);

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-12">
//       <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
      
//       {/* Blog Cards */}
//       <div className="grid md:grid-cols-2 gap-6">
//         {currentPosts.map((post) => (
//           <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold">{post.title}</h3>
//               <p className="text-gray-500 text-sm">{post.date}</p>
//               <p className="mt-2 text-gray-700">{post.excerpt}</p>
             
             
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex items-center justify-between mt-8">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 text-gray-600 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
//         >
//           Previous
//         </button>
        
//         <span className="text-gray-700">Page {currentPage} of {totalPages}</span>

//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 text-gray-600 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Blog;
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "How to Optimize Shipping Routes for Efficiency",
    date: "September 10, 2024",
    excerpt: "Learn how to optimize your shipping routes to reduce costs and improve delivery times.",
    image: "https://source.unsplash.com/600x400/?logistics,truck", 
    link: "#"
  },
  {
    id: 2,
    title: "The Future of Logistics with AI and Automation",
    date: "August 25, 2024",
    excerpt: "Discover how AI and automation are revolutionizing the logistics industry.",
    image: "https://source.unsplash.com/600x400/?warehouse,automation", 
    link: "#"
  }
];

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Blog Header */}
      <div className="relative bg-gray-800 text-white text-center py-16 rounded-lg mb-8">
        <img
          src="https://source.unsplash.com/1200x400/?delivery,shipping"
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h2 className="relative text-4xl font-bold">Our Blogs</h2>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
              <p className="mt-3 text-gray-700">{post.excerpt}</p>
              <a href={post.link} className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
