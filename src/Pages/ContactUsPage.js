import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Appointment booked successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span>Contact Us</span>
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Form</h2>
            <p className="text-gray-600">
              We encourage your feedback, please feel free to send us a<br />
              message using the following contact form.
            </p>
          </div>

          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white"
              />
            </div>

            {/* Number and Service Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white"
              />
              <input
                type="text"
                name="serviceType"
                placeholder="ServiceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white resize-none"
            ></textarea>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 border-2 border-gray-400 text-gray-700 font-medium tracking-wider hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 uppercase"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}