// HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Background Image with Mobile Optimization */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://360homeocareclinic.com/wp-content/uploads/2025/02/Frame-1597881193-7-scaled.webp')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "scroll"
        }}
      >
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

        {/* Optional: Different background for mobile if needed */}
        {/* <div className="md:hidden absolute inset-0 bg-cover bg-center" 
             style={{backgroundImage: "url('mobile-optimized-image-url')"}}>
        </div> */}

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-3xl px-4 md:px-6 w-full">
          {/* Add your content here */}
          {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Title Here
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            Your subtitle or description
          </p> */}
          
          {/* Button */}
          {/* <button className="mt-4 md:mt-6 px-6 py-3 bg-white text-black font-medium rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-105 text-sm md:text-base">
            Consult Now
          </button> */}
        </div>
      </div>

      {/* One Line Form */}
      <div className="w-full bg-[#e5d6c7] py-4 md:py-6 flex justify-center">
        <form className="flex flex-col sm:flex-row gap-3 md:gap-4 w-[95%] sm:w-[90%] max-w-4xl bg-white p-4 md:p-6 rounded-xl shadow-lg mx-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full sm:flex-1 px-4 py-3 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6f54] focus:border-transparent transition text-base"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:flex-1 px-4 py-3 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6f54] focus:border-transparent transition text-base"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full sm:flex-1 px-4 py-3 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b6f54] focus:border-transparent transition text-base"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 md:py-2 bg-[#8b6f54] text-white font-semibold rounded-lg shadow hover:bg-[#6b5642] transition duration-300 transform hover:scale-105 text-base md:text-base mt-2 sm:mt-0"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;