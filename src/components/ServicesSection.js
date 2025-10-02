// ServicesSection.js
import React from "react";

const services = [
  {
    title: "Homeopathy",
    description:
      "Yash Homeopathy Clinic offers homeopathy services for holistic health and wellness.",
    image:
      "https://360homeocareclinic.com/wp-content/uploads/2024/09/meni-service-img-04.webp", // replace with actual image
  },
  {
    title: "Skin Care",
    description:
      "Yash Homeopathy Clinic provides natural treatments for healthy and radiant skin care.",
    image:
      "https://360homeocareclinic.com/wp-content/uploads/2024/09/meni-service-img-04.webp", // replace with actual image
  },
  {
    title: "Hair Care",
    description:
      "Yash Homeopathy Clinic offers effective solutions for healthy hair growth and care.",
    image:
      "https://360homeocareclinic.com/wp-content/uploads/2024/09/meni-service-img-04.webp", // replace with actual image
  },
  {
    title: "Medi Facial",
    description:
      "Yash Homeopathy Clinic provides rejuvenating medi facials for glowing, healthy, and youthful skin.",
    image:
      "https://360homeocareclinic.com/wp-content/uploads/2024/09/meni-service-img-04.webp", // replace with actual image
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wide text-gray-600">
          Homeopathy Care And Healthy Skin
        </p>
        <h2 className="text-3xl font-semibold text-gray-900">
          Treatments & Services
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start">
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-md"
            />

            {/* Title */}
            <h3 className="text-lg font-medium text-gray-900 mt-4">
              {service.title}
            </h3>

            {/* Underline */}
            <div className="w-20 h-[2px] bg-gray-400 my-2"></div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>

            {/* Button */}
            <button className="px-4 py-2 border border-gray-800 text-gray-800 text-sm rounded-md hover:bg-gray-800 hover:text-white transition">
              View Services
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
