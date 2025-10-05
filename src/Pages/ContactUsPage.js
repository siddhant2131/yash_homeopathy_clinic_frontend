import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    serviceType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const serviceTypes = [
    'General Consultation',
    'Chronic Disease Treatment',
    'Skin Diseases',
    'Respiratory Issues',
    'Digestive Problems',
    'Women Health Issues',
    'Child Health Care',
    'Mental Health',
    'Allergy Treatment',
    'Other Health Issues'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.email || !formData.number || !formData.serviceType) {
      setSubmitMessage('Please fill in all required fields');
      setMessageType('error');
      return;
    }

    if (formData.name.length < 2) {
      setSubmitMessage('Name must be at least 2 characters long');
      setMessageType('error');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setSubmitMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }

    if (formData.number.length < 10) {
      setSubmitMessage('Phone number must be at least 10 digits');
      setMessageType('error');
      return;
    }

    setLoading(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('Form submitted successfully! We will contact you soon.');
        setMessageType('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          number: '',
          serviceType: '',
          message: ''
        });
      } else {
        setSubmitMessage(data.message || 'Failed to book appointment. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Network error. Please check if backend server is running.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
            <p className="text-gray-600">
              We encourage your feedback, please feel free to send us a<br />
              message using the following contact form.
            </p>
          </div>

          {/* Success/Error Message */}
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg text-center border ${
              messageType === 'success' 
                ? 'bg-green-50 text-green-800 border-green-200' 
                : 'bg-red-50 text-red-800 border-red-200'
            }`}>
              <div className="flex items-center justify-center">
                {messageType === 'success' ? (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                {submitMessage}
              </div>
            </div>
          )}

          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white"
                  required
                />
                {formData.name && formData.name.length < 2 && (
                  <p className="text-red-500 text-sm mt-1">Name must be at least 2 characters</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white"
                  required
                />
                {formData.email && !/^\S+@\S+\.\S+$/.test(formData.email) && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
                )}
              </div>
            </div>

            {/* Number and Service Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  name="number"
                  placeholder="Phone Number *"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white"
                  required
                />
                {formData.number && formData.number.length < 10 && (
                  <p className="text-red-500 text-sm mt-1">Phone must be at least 10 digits</p>
                )}
              </div>
              <div>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select Service Type *</option>
                  {serviceTypes.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {!formData.serviceType && (
                  <p className="text-red-500 text-sm mt-1">Please select a service type</p>
                )}
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                placeholder="Additional Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-400 bg-white resize-none"
              ></textarea>
              <p className="text-gray-500 text-sm mt-1">
                {formData.message.length}/500 characters
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`px-8 py-4 border-2 font-medium tracking-wider uppercase transition-all duration-300 min-w-[200px] ${
                  loading 
                    ? 'bg-gray-400 text-white border-gray-400 cursor-not-allowed' 
                    : 'border-gray-400 text-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-800'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Booking...
                  </div>
                ) : (
                  'Book Appointment'
                )}
              </button>
              
              {/* Required fields note */}
              <p className="text-gray-500 text-sm mt-4">* Required fields</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}