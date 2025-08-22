import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kf80s0g", "template_waassmf", form.current, {
        publicKey: "nK6b5sNutEBmb4Jfn",
      })
      .then(
        () => {
          alert(
            "Your message has been sent successfully. We’ll get back to you shortly."
          );
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="bg-[#f5faf8] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-customBlue mb-6">
          Contact Gipto Limited
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you need a one-off clean, ongoing care services, or specialist
          laundry, we’re here to help. Reach out to our friendly team today.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8">
            <h3 className="text-3xl font-bold text-customIndigo">
              We’d Love to Hear From You
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Let’s make your space shine. Contact us for bookings, quotes, or
              any questions about our services.
            </p>

            <div className="space-y-6">
              {/* Email Section */}
              <div className="flex items-start gap-4 bg-zinc-100 p-4 rounded-lg">
                <div className="flex-shrink-0">
                  <FaEnvelope className="text-customIndigo text-2xl" />
                </div>
                <a href="#contact-form">
                <div>
                  <p className="font-medium text-gray-900">Submit a Request</p>
                  <p className="text-sm text-gray-500">
                    Reply by the end of the next working day
                  </p>
                  {/* <span className="text-sm text-customIndigo">info@giptolimited.co.uk</span> */}
                </div>
                </a>
              </div>

              {/* Phone Section */}
              <div className="flex items-start gap-4 bg-zinc-100 p-4 rounded-lg">
                <div className="flex-shrink-0">
                  <FaPhoneAlt className="text-customIndigo text-2xl" />
                </div>
                  <a href="tel:+44 7859 272275">
                <div>
                  <p className="font-medium text-gray-900">+44 7859 272275</p>
                  <p className="text-sm text-gray-500">
                    24 Hrs (Mon - Fri) / 8am - 8pm (Weekends)
                  </p>
                </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <form id="contact-form" ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customIndigo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customIndigo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder="Tell us what you need help with..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customIndigo"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-customIndigo text-white font-semibold px-6 py-3 rounded-xl hover:bg-customIndigo transition-all w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
