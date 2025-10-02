// AboutSection.js
import React, { useState, useEffect } from "react";

const images = [
  "https://360homeocareclinic.com/wp-content/uploads/2024/09/meni-service-img-04.webp",
  "https://360homeocareclinic.com/wp-content/uploads/2024/09/meni-service-img-04.webp",
  "https://360homeocareclinic.com/wp-content/uploads/2024/09/meni-service-img-04.webp",
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#e5d6c7] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left - Auto Image Slider */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt="Clinic Service"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <p className="text-sm text-gray-600 mb-2">Yash Homeopathy Clinic</p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Your Destination for Holistic Homeopathy, Skin Care, and Hair Care Solutions
          </h2>
          <p className="text-gray-700 mb-2">
            Yash Homeopathy Clinic offers holistic health solutions through personalized
            homeopathy, skin care and hair care treatments.
          </p>
          <p className="text-gray-700 mb-2">
            Specializing in natural, non-invasive therapies, the clinic addresses the root
            causes of chronic conditions and beauty concerns.
          </p>
          <p className="text-gray-700 mb-4">
            With expert care, we provide tailored treatments for long-lasting results,
            including medi facials for vibrant skin.
          </p>

          <button className="px-5 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition">
            Read Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
