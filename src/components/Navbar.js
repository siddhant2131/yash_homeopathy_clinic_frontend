import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { 
      name: 'Homeopathy', 
      href: '/',
      hasDropdown: true,
      dropdownItems: ['Treatment Options', 'Conditions Treated', 'Success Stories']
    },
    { 
      name: 'Hair', 
      href: '/',
      hasDropdown: true,
      dropdownItems: ['Hair Loss Treatment', 'Hair Transplant', 'PRP Therapy']
    },
    { 
      name: 'Laser', 
      href: '/',
      hasDropdown: true,
      dropdownItems: ['Laser Hair Removal', 'Skin Rejuvenation', 'Tattoo Removal']
    },
    { 
      name: 'Skin', 
      href: '/',
      hasDropdown: true,
      dropdownItems: ['Acne Treatment', 'Anti-Aging', 'Skin Brightening']
    },
    { 
      name: 'Facial', 
      href: '/',
      hasDropdown: true,
      dropdownItems: ['Deep Cleansing', 'Hydrafacial', 'Chemical Peel']
    },
    { name: 'Blog', href: '/' },
    { name: 'Contact Us', href: '/' }
  ];

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="bg-stone-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center w-full space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="px-4 py-2 text-gray-800 font-medium text-sm hover:text-gray-600 transition duration-200 flex items-center gap-1"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div
                    className={`absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-200 ${
                      openDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <a
                        key={index}
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-stone-100 transition duration-200"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="text-gray-800 font-semibold">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 font-medium hover:bg-stone-200 transition duration-200"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="px-4 py-2"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.hasDropdown && openDropdown === item.name && (
                  <div className="bg-stone-200 py-2">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <a
                        key={index}
                        href="/"
                        className="block px-8 py-2 text-sm text-gray-700 hover:bg-stone-300 transition duration-200"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;