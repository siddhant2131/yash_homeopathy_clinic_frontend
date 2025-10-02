import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ClinicFooter() {
  const addresses = [
    {
      title: "NERUL",
      address: "360° Homeo Care Clinic Shop No. 3, Ganpati Complex, Plot No. 105, Opp. Fire Brigade, Sector 27, Nerul East, Navi Mumbai 400706."
    },
    {
      title: "KURLA",
      address: "360° Homeo Care Clinic Menezes Building, Opp. Thakur Tyres, Near Sheetal Cinema, L.B.S. Marg, Kurla (West), Mumbai 400070."
    },
    {
      title: "MAHAD",
      address: "DESHMUKHA HOSPITAL Kharkand Mohalla, Saliwada Naka, Mahad, Maharashtra 402301."
    },
    {
      title: "MORBA",
      address: "At Post Morba, Masjid Mohalla, Taluka Mangaon, District Raigad, Maharashtra 402117."
    }
  ];

  const doctors = [
    {
      name: "DR. FARHA MEER",
      credentials: "B.H.M.S., M.D. (Hom.), M.Sc. (D.F.S.M.), C.F.N.",
      phone: "8850335581",
      email: "farhameer@gmail.com"
    },
    {
      name: "DR. NABEEL ALSULKAR",
      credentials: "B.H.M.S., M.D. (Hom.)",
      phone: "8779064557",
      email: "nabeelalsulkar@gmail.com"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#d4c5b0] to-[#e8dcc8]">
      {/* Main Footer Content */}
      <div className="grid lg:grid-cols-2">
        {/* Left Section - Addresses */}
        <div className="p-8 md:p-12 border-r border-gray-400">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 pb-4 border-b-2 border-gray-800">
            Address
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {addresses.map((location, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {location.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {location.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Logo & Doctor Info */}
        <div className="p-8 md:p-12">
          {/* Logo */}
          <div className="mb-8">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=300&fit=crop"
                alt="360° Homeo Care Clinic"
                className="w-full h-auto"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Yash Homeopathy Clinic
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  SKIN | HAIR | LASER | HOMEOPATHY
                </p>
                <div className="flex justify-center gap-4 mt-3 text-xs font-semibold text-gray-700">
                  <span>• KURLA</span>
                  <span>• NERUL</span>
                  <span>• MAHAD</span>
                  <span>• TEMPLE</span>
                  <span>• MORBA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Doctors Info */}
          <div className="grid md:grid-cols-2 gap-6">
            {doctors.map((doctor, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {doctor.credentials}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="w-4 h-4" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Mail className="w-4 h-4" />
                    <span className="break-all">{doctor.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white py-4 px-8 relative">
        <p className="text-center text-sm">
          © 2023 Yash Homeopathy Clinic All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}