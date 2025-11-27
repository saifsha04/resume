import React from "react";
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaComments, FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black to-[#3c2108] text-white font-sans overflow-hidden flex flex-col">
      <div className="max-w-5xl mx-auto px-4 py-10 flex-1">
        {/* Navbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-white text-2xl font-bold">
            <Link to="/">saif.</Link>
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <nav className="flex gap-4 text-white rounded-full">
              <Link to="/" className="hover:text-orange-500">Home</Link>
              <Link to="/skills" className="hover:text-orange-500">Skills</Link>
              <Link to="/experience" className="hover:text-orange-500">Projects</Link>
              <Link to="/contact" className="hover:text-orange-500">Contact</Link>
            </nav>
            <a
              href="/CV.pdf"
              download
              className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition text-sm"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>

        {/* Contact Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Contact our friendly team</h2>
          <p className="text-gray-300 text-lg">Let us know how we can help.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#2d2d2d] rounded-xl p-6 flex flex-col items-center text-center">
            <FaComments className="text-3xl mb-2 text-orange-400" />
            <h3 className="font-semibold mb-1">Chat to sales</h3>
            <p className="text-gray-400 mb-2 text-sm">Speak to our friendly team.</p>
            <a href="https://wa.me/qr/JQPKR75A3KT5M1" className="text-orange-400 hover:underline text-sm">Saif</a>
          </div>
          <div className="bg-[#2d2d2d] rounded-xl p-6 flex flex-col items-center text-center">
            <FaEnvelope className="text-3xl mb-2 text-orange-400" />
            <h3 className="font-semibold mb-1">Chat to support</h3>
            <p className="text-gray-400 mb-2 text-sm">We're here to help.</p>
            <a href="mailto:saifm9811@gmail.com" className="text-orange-400 hover:underline text-sm">saifm9811@gmail.com</a>
          </div>
          <div className="bg-[#2d2d2d] rounded-xl p-6 flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-3xl mb-2 text-orange-400" />
            <h3 className="font-semibold mb-1">Visit us</h3>
            <p className="text-gray-400 mb-2 text-sm">Visit our office HQ.</p>
            <a href="https://maps.app.goo.gl/bkZijnqnfPYdokLf6" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline text-sm">View on Google Maps</a>
          </div>
          <div className="bg-[#2d2d2d] rounded-xl p-6 flex flex-col items-center text-center">
            <FaPhone className="text-3xl mb-2 text-orange-400" />
            <h3 className="font-semibold mb-1">Call us</h3>
            <p className="text-gray-400 mb-2 text-sm">Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+91 7996479678" className="text-orange-400 hover:underline text-sm">Call</a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full py-8 bg-transparent flex justify-center">
        <div className="flex gap-6 text-3xl text-gray-200">
          <a href="https://www.linkedin.com/in/mohammed-saifulla-bava?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.facebook.com/share/1B6gqqcf1K/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://github.com/saifsha04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/11_saif_jr?igsh=MWNmaXRqMHhueDRwNA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </footer>
    </div>
  );
};
