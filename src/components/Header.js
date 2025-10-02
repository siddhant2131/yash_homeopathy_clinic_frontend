import React from 'react';
import { Calendar, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          
          {/* Section 1: Logo & Clinic Name */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start">
              {/* Logo with Tree & Sun */}
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-16 h-16">
                  {/* Sun Rays */}
                  <div className="absolute -top-2 left-1/2 w-0.5 h-3 bg-yellow-500 transform -translate-x-1/2"></div>
                  <div className="absolute -top-1 -right-2 w-3 h-0.5 bg-yellow-500 rotate-45"></div>
                  <div className="absolute top-1/2 -right-3 w-3 h-0.5 bg-yellow-500 -translate-y-1/2"></div>
                  <div className="absolute -bottom-1 -right-2 w-3 h-0.5 bg-yellow-500 -rotate-45"></div>
                  
                  {/* Tree/Plant */}
                  <div className="absolute bottom-0 left-1/2 w-2 h-8 bg-yellow-700 -translate-x-1/2"></div>
                  <div className="absolute top-2 left-1 w-3 h-4 bg-green-600 rounded-full"></div>
                  <div className="absolute top-0 left-1/2 w-3 h-4 bg-green-700 rounded-full -translate-x-1/2"></div>
                  <div className="absolute top-2 right-1 w-3 h-4 bg-green-600 rounded-full"></div>
                  <div className="absolute top-4 left-2 w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="absolute top-5 right-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>

                {/* Clinic Text */}
                <div>
                  <h1 className="flex items-baseline gap-1">
                    <span className="text-green-600 text-2xl font-bold">Yash</span>
                    <span className="text-orange-500 text-xl font-bold">Homeopathy Clinic</span>
                  </h1>
                  <div className="flex gap-2 text-xs font-semibold text-gray-700 mt-1">
                    <span className="text-green-600">SKIN</span>
                    <span>|</span>
                    <span className="text-orange-500">HAIR</span>
                    <span>|</span>
                    <span className="text-red-500">LASER</span>
                    <span>|</span>
                    <span className="text-blue-600">HOMEOPATHY</span>
                  </div>
                </div>
              </div>

              {/* Branches */}
              <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600 text-center lg:text-left">
                <span>KURLA</span>•<span>NERUL</span>•<span>MAHAD</span>•<span>TEMPLE</span>•<span>MORBA</span>
              </div>
            </div>
          </div>

          {/* Section 2: Dr. Farha Meer */}
          <div className="border-l-2 border-r-2 border-gray-200 px-6 py-2">
            <h3 className="text-lg font-bold text-gray-800 mb-3">DR. FARHA MEER</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-sm">8850335581</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-sm">farhameer@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Section 3: Dr. Nabeel Alsulkar */}
          <div className="border-r-2 border-gray-200 px-6 py-2">
            <h3 className="text-lg font-bold text-gray-800 mb-3">DR. NABEEL ALSULKAR</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-sm">8779064557</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-sm">nabeelalsulkar@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Section 4: Appointment Button & Social Icons */}
          <div className="flex flex-col items-center gap-4">
            <Link to="/appointment">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 shadow transition duration-300">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </button>
            </Link>

            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
