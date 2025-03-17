import React from 'react';

const BlogCard = ({ image, title, date, description, link }) => {
    return (
        <div className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <img src={image} alt="Blog Image" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-2">{date}</p>
                <p className="text-gray-700 mb-4">{description}</p>
              
            </div>
        </div>
    );
};

const BlogCardSection = () => {
    const blogs = [
        {
            image: "/assets/blog1.jpg", 
            title: "How to Optimize Shipping Routes for Efficiency",
            date: "September 10, 2024",
            description: "Learn how to optimize your shipping routes to reduce costs and improve delivery times.",
            link: "#"
        },
        {
            image: "/assets/blog2.jpg", 
            title: "The Future of Logistics with AI and Automation",
            date: "August 25, 2024",
            description: "Discover how AI and automation are revolutionizing the logistics industry.",
            link: "#"
        }
    ];

    return (
        <div className="p-8 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6 mt-16 text-center">Our Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogCardSection;

