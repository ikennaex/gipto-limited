import React from 'react'
import { logo } from '../../imports'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <Link to="/">
              {/* <img className="h-14 mb-5" src={logo} alt="Gipto Limited logo" /> */}
              Gipto Limited
            </Link>
            <p className="text-sm leading-relaxed text-gray-300">
              Gipto Limited is a trusted cleaning and care service provider based in Newbury, United Kingdom. We specialise in the general cleaning of buildings, providing fresh and hygienic environments for homes and businesses.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>📍 69 Windsor Court, Newbury, United Kingdom</li>
              <li>📧 info@giptolimited.co.uk</li>
              {/* <li>📞 +2348139096910, +2348123173582.</li> */}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex gap-5">
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={20} className="hover:text-blue-500 transition" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} className="hover:text-pink-500 transition" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={20} className="hover:text-blue-300 transition" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaXTwitter size={20} className="hover:text-blue-300 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {year} Gipto Limited. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
