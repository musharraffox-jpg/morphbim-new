'use client'

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-pulse-500">Home</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-pulse-500">Services</a></li>
              <li><a href="/solutions" className="text-gray-600 hover:text-pulse-500">Solutions</a></li>
              <li><a href="/projects" className="text-gray-600 hover:text-pulse-500">Projects</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-pulse-500">Careers</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-pulse-500">About</a></li>
              <li><a href="#details" className="text-gray-600 hover:text-pulse-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services#design" className="text-gray-600 hover:text-pulse-500">Design & Engineering</a></li>
              <li><a href="/services#construction" className="text-gray-600 hover:text-pulse-500">Construction</a></li>
              <li><a href="/services#operations" className="text-gray-600 hover:text-pulse-500">Operations</a></li>
              <li><a href="/solutions" className="text-gray-600 hover:text-pulse-500">Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: info@morphvison.com</li>
              <li className="text-gray-600">Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Morphvison. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
