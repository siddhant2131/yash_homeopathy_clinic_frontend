import React from 'react';

export default function DoctorProfiles() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dr. Farha Meer Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              DR. FARHA MEER
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              B.H.M.S, M.D. (Hom.), M.Sc. (D.F.S.M.), C.F.N.
            </p>
            <p className="text-base md:text-lg text-gray-700 font-medium mb-6">
              Are you seeking a natural and gentle approach to healing?
            </p>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                Dr. Farha is a compassionate homeopathic doctor who takes time to understand your unique health concerns and develops a personalized treatment plan to address the root cause of your illness with 15 years of experience in homeopathic practice.Dr. Farha specializes in treating PCOS, Infertility and skin disorders. Her expertise and dedication have helped countless patients find relief and restore their health.
              </p>
              <p>
                Dr. Farha is a dynamic homeopath, graduated from TNTHMC Mumbai and has done MD from SBHMC. She is involved in active Global Practice.
              </p>
              <p>
                Dr. Farha has successfully completed her Diploma course in Trichology.2011. She has hands on training for all types of Dermatological procedures like Skin Analysis, Trichometry, Chemical Peels basic and advanced lasers, Diode, Q Switch, ND Yag, Micro needling, IPL Pigmentary, Electrocautery, Radio Frequency, Mesotherapy and become specialised in Homeopathic Skin Specialist in Navi Mumbai.
              </p>
              <p>
                She is expert in HPRF, CFC and helping in hair regrowth by discovering the root cause of the hair fall.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://360homeocareclinic.com/wp-content/uploads/2024/09/Meni-Home-video-poster-img-1.jpg"
                alt="Dr. Farha Meer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Nabeel Alsulkar Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Image */}
            <div>
              <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://360homeocareclinic.com/wp-content/uploads/2024/09/Meni-Home-video-poster-img-1.jpg"
                  alt="Dr. Nabeel Alsulkar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                DR. NABEEL ALSULKAR
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                B.H.M.S, M.D. (Hom.)
              </p>
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  Dr. Nabeel (Al-Dhameer) is deeply involved in treating emotional and psychological homeopathic physician dedicated to providing individualized, holistic care to patients of all ages. With a deep understanding of homeopathic principles and a passion for natural healing Dr. Nabeel strives to empower patients to achieve optimal health and well-being.
                </p>
                <p>
                  Dr. Nabeel presents a modern and scientific face of homeopathy patients from all over the world visit his global clinic in Mumbai. He is empathetic, compassionate in treating his patients giving sound advice and support to the patients. His hard work, professional commitment, sincerity and dedication drew them closer to help patients.
                </p>
                <p>
                  Dr. Nabeel is pragmatic homeopath, graduated from TNTHMC, Mumbai and has done his M.D. from SBHMC. He specialises in treating Orthopaedic Joint, Kidney, Alonus, Computers, Skin diseases, PCOS, Thyroid Cases and Gastric complaints.
                </p>
                <p className="font-semibold text-gray-800 mt-6">
                  Both Dr. Nabeel and Dr. Farha aim to bring homeopathy close to mainstream medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}