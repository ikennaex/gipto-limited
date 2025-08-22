import React from "react";
import {
  FaBroom,
  FaHome,
  FaTshirt,
  FaPumpSoap,
  FaTools,
  FaBuilding,
  FaTruckPickup,
  FaCouch,
  FaBiohazard,
  FaCalendarCheck,
} from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import FadeIn from "../../Components/fadein";

const services = [
  { name: "Employment Agency Services", icon: <FaBriefcase /> },
  { name: "General Cleaning of Buildings", icon: <FaBroom /> },
  { name: "Residential Care for the Elderly and Disabled", icon: <FaHome /> },
  { name: "Washing and Dry-Cleaning of Textile and Fur Products", icon: <FaTshirt /> },
  { name: "Deep Cleaning Services", icon: <FaPumpSoap /> },
  { name: "Post-Construction Cleaning", icon: <FaTools /> },
  { name: "Office and Commercial Space Cleaning", icon: <FaBuilding /> },
  { name: "Laundry Pickup and Delivery", icon: <FaTruckPickup /> },
  { name: "Carpet and Upholstery Cleaning", icon: <FaCouch /> },
  { name: "Specialized Disinfection Services", icon: <FaBiohazard /> },
  { name: "Routine Maintenance Cleaning", icon: <FaCalendarCheck /> },
];

const Services = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-customBlue to-indigo-900 text-white relative overflow-hidden">
      {/* Background Accent Circles */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-customIndigo opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight animate-fade-in-down">
          Our Services
        </h2>
        <p className="text-gray-200 text-lg mb-14 max-w-3xl mx-auto animate-fade-in-up">
          Gipto Limited offers a complete range of professional cleaning, residential care, and specialized maintenance services to keep your spaces pristine and your loved ones cared for.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} duration={200}>
              <div
                className="group flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl animate-slide-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="text-4xl text-yellow-400 mb-4 transition-transform duration-300 group-hover:scale-125">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {service.name}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
