import React, { useEffect, useRef } from 'react';

const BeforeAfterGallery = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= marquee.scrollWidth / 2) {
        scrollAmount = 0;
      }
      marquee.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const galleries = [
    {
      before: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=600&fit=crop"
    },
    {
      before: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=600&fit=crop"
    },
    {
      before: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=600&fit=crop",
      after: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-gray-600 text-lg mb-2">Desired Procedure to Begin</p>
        <h1 className="text-5xl font-bold text-gray-800">Before After Gallery</h1>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex gap-6 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* First Set */}
          {galleries.map((gallery, index) => (
            <div key={`first-${index}`} className="flex gap-6 flex-shrink-0">
              {/* Before Image */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${gallery.before})`,
                    filter: 'brightness(0.7)'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-4xl font-bold tracking-wider">BEFORE</h3>
                </div>
              </div>

              {/* After Image */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${gallery.after})`,
                    filter: 'brightness(0.7)'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-4xl font-bold tracking-wider">AFTER</h3>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate Set for Seamless Loop */}
          {galleries.map((gallery, index) => (
            <div key={`second-${index}`} className="flex gap-6 flex-shrink-0">
              {/* Before Image */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${gallery.before})`,
                    filter: 'brightness(0.7)'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-4xl font-bold tracking-wider">BEFORE</h3>
                </div>
              </div>

              {/* After Image */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${gallery.after})`,
                    filter: 'brightness(0.7)'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-4xl font-bold tracking-wider">AFTER</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition duration-300">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;