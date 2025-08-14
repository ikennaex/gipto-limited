import React from "react";
import { FaBroom, FaHome, FaTshirt, FaPumpSoap, FaTools, FaBuilding, FaTruckPickup, FaCouch, FaBiohazard, FaCalendarCheck } from "react-icons/fa";
import FadeIn from "../fadein";
import { Link } from "react-router-dom"; // corrected import

const services = [
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
    <section className="px-7 py-16 bg-customBlue text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in-down">
          Our Services
        </h2>
        <p className="text-gray-200 mb-12 animate-fade-in-up">
          Gipto Limited offers a complete range of professional cleaning, residential care, and specialized maintenance services to keep your spaces pristine and your loved ones cared for.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => (
            <FadeIn key={index} duration={100}>
              <div
                className="flex items-start gap-4 bg-white bg-opacity-5 p-5 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-10 animate-slide-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="text-customYellow text-xl mt-1">{service.icon}</div>
                <span className="text-left">{service.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <Link to="/services">
          <button
            className="mt-6 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-yellow-400 transition duration-300 shadow-md"
          >
            View More Details
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
