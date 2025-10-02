import React from 'react';

export default function FeaturedBlog() {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
      category: "Blog",
      title: "Homeopathy vs. Conventional Medicine: What You Need to Know",
      author: "360homeocare",
      excerpt: "Homeopathy vs. Conventional Medicine: What You Need to Know When...",
      link: "#"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop",
      category: "Blog",
      title: "5 Essential Skincare Tips for Healthy, Glowing Skin",
      author: "360homeocare",
      excerpt: "5 Essential Skincare Tips for Healthy, Glowing Skin Achieving healthy,...",
      link: "#"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
      category: "Blog",
      title: "How Often Should You Get a Facial? Expert Advice",
      author: "360homeocare",
      excerpt: "How Often Should You Get a Facial? Expert Advice Facials...",
      link: "#"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm md:text-base uppercase tracking-wider mb-2">
            Featured Post
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            From Our Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-4 py-1 text-sm text-gray-700 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                
                {/* Author */}
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {post.author}
                </div>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm md:text-base mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button className="border-2 border-gray-800 text-gray-800 px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}