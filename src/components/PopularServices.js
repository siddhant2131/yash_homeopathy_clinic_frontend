
const PopularServices = () => {
  const services = [
    {
      title: "Homeopathy Treatment at Yash Homeopathy Clinic: Healing for a Healthier You",
      description: "At Yash Homeopathy Clinic, homeopathy treatment focuses on holistic healing by addressing the root causes of various health conditions. We offer personalized treatments for ailments like chronic pain, allergies, skin issues and digestive disorders. With an emphasis on strengthening the body's immune system, the homeopathy experts at Yash Homeopathy Clinic create tailored plans that promote long-term health and balance.",
      buttons: [
        "Allergic Rhinitis Treatment",
        "Bones and Joints",
        "Corn Treatment",
        "GIT Disorders",
        "Pediatrics",
        "Skin Diseases",
        "Kidney Disease"
      ],
      cards: [
        { icon: "🫀", label: "Thyroid\nTreatment" },
        { icon: "🔥", label: "Acidity\nTreatment" },
        { icon: "🫘", label: "Kidney\nDisease" },
        { icon: "😰", label: "Anxiety / Stress\nTreatment" },
        { icon: "🦴", label: "Back Pain\nTreatment" },
        { icon: "🫁", label: "Respiratory\nTreatments" }
      ]
    },
    {
      title: "Skin Care Treatments at Yash Homeopathy Clinic: Radiant Skin, Holistic Healing",
      description: "At Yash Homeopathy Clinic, we understand that healthy skin is a reflection of overall well-being. Our holistic approach to skin care combines homeopathic remedies with personalized treatment plans to address various skin concerns naturally and effectively.",
      buttons: [
        "Acne Treatment",
        "Eczema Care",
        "Psoriasis Treatment",
        "Pigmentation",
        "Anti-aging Solutions",
        "Skin Allergies",
        "Vitiligo Treatment"
      ],
      cards: [
        { icon: "✨", label: "Acne\nTreatment" },
        { icon: "🌊", label: "Eczema\nCare" },
        { icon: "👤", label: "Psoriasis\nTreatment" },
        { icon: "🔆", label: "Pigmentation\nTreatment" },
        { icon: "🌟", label: "Anti-aging\nSolutions" },
        { icon: "🌸", label: "Skin\nAllergies" }
      ]
    },
    {
      title: "Hair Care Solutions at Yash Homeopathy Clinic: Healthy Scalp, Stronger Hair",
      description: "At Yash Homeopathy Clinic, we recognize that hair health is deeply connected to overall wellness. Our specialized hair care treatments use homeopathic principles to address the root causes of hair problems, promoting natural growth and vitality.",
      buttons: [
        "Hair Loss Treatment",
        "Dandruff Care",
        "Male Pattern Baldness",
        "Alopecia Treatment",
        "Premature Graying",
        "Scalp Conditions",
        "Hair Thinning"
      ],
      cards: [
        { icon: "💇", label: "Hair Loss\nTreatment" },
        { icon: "💫", label: "Dandruff\nCare" },
        { icon: "👨", label: "Male Pattern\nBaldness" },
        { icon: "🌿", label: "Alopecia\nTreatment" },
        { icon: "✂️", label: "Premature\nGraying" },
        { icon: "🌺", label: "Scalp\nConditions" }
      ]
    },
    {
      title: "Mind Fitness at Yash Homeopathy Clinic: Revitalize Your Skin and Mind",
      description: "At Yash Homeopathy Clinic, we understand that true wellness encompasses both physical and mental health. Our Mind Fitness program integrates holistic treatments to rejuvenate your skin while nurturing your mental well-being, helping you achieve balance and vitality from the inside out.",
      buttons: [
        "Stress Management",
        "Anxiety Treatment",
        "Depression Care",
        "PTSD Support",
        "Insomnia Treatment",
        "OCD Care",
        "Behavioral Issues"
      ],
      cards: [
        { icon: "😊", label: "Stress\nManagement" },
        { icon: "😢", label: "Anxiety\nTreatment" },
        { icon: "😔", label: "Depression\nCare" },
        { icon: "😰", label: "PTSD\nSupport" },
        { icon: "😴", label: "Insomnia\nTreatment" },
        { icon: "🧠", label: "OCD\nCare" },
        { icon: "🎭", label: "Behavioral\nIssues" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-center text-gray-700">
          Popular Services
        </h1>
      </div>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {services.map((service, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side - Description & Buttons */}
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.buttons.map((button, btnIndex) => (
                  <button
                    key={btnIndex}
                    className="px-4 py-3 border border-gray-300 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-50 transition duration-200"
                  >
                    {button}
                  </button>
                ))}
              </div>

              {/* View Services Button */}
              <div className="flex justify-center">
                <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition duration-200 flex items-center gap-2">
                  View Services
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Side - Service Cards Grid */}
            <div className="bg-stone-200 p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                {service.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition duration-300"
                  >
                    <div className="text-5xl mb-3 filter grayscale">
                      {card.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700 whitespace-pre-line">
                      {card.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp Button */}
      {/* <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center gap-2 transition duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="text-sm font-medium">Need Help?</span>
        </button>
      </div> */}
    </div>
  );
};

export default PopularServices;