import React from "react";
import { img12 } from "../../imports";
import {
  SparklesIcon,
  HomeIcon,
  UserGroupIcon,
  HeartIcon,
  PhoneIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const services = [
  { icon: <SparklesIcon className="w-5 h-5 text-customIndigo" />, text: "General Cleaning of Buildings" },
  { icon: <UserGroupIcon className="w-5 h-5 text-customIndigo" />, text: "Residential Care for Elderly & Disabled" },
  { icon: <HeartIcon className="w-5 h-5 text-customIndigo" />, text: "Specialist Cleaning for Sensitive Environments" },
  { icon: <HomeIcon className="w-5 h-5 text-customIndigo" />, text: "Domestic & Commercial Cleaning" },
  { icon: <SparklesIcon className="w-5 h-5 text-customIndigo" />, text: "Washing & Dry-Cleaning of Textiles" },
  { icon: <SparklesIcon className="w-5 h-5 text-customIndigo" />, text: "Fur Product Cleaning & Care" },
];

const About = () => {
  return (
    <div className="bg-customBlue py-14">
      <div className="container mx-auto px-4 fade-in-bottom">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
              src={img12}
              alt="Gipto Limited Cleaning Service"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-white">Who We Are</h2>

            <p className="text-base leading-relaxed mb-6">
              Gipto Limited is a professional cleaning and care services company based in Newbury, United Kingdom. 
              We are committed to keeping homes, offices, and care facilities spotless while ensuring the highest 
              standards of hygiene and customer satisfaction.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <MapPinIcon className="w-5 h-5 text-customIndigo" />
              <p className="text-sm">Proudly serving Newbury and surrounding areas in the UK.</p>
            </div>

            <p className="text-base mb-4">
              From general building cleaning to specialised care for the elderly and disabled, 
              we handle every task with professionalism, compassion, and attention to detail.
            </p>

            <h3 className="text-2xl font-semibold text-customIndigo mb-4">Our Services:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-6">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  {service.icon}
                  {service.text}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-customIndigo" />
              <a href="tel:+447859272275">Call Us
              <p className="text-sm">
                +44 7859 272275
              </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
