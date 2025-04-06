'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <Image 
                src="/logo.png" 
                alt="MorphVision Logo" 
                width={150} 
                height={60} 
                className="h-10 w-auto" 
              />
            </div>
            <p className="text-gray-600 mb-4">
              Your trusted partner for BIM, Detailed Designing, Scanning, Redevelopment, and Turnkey Project Solutions.
            </p>
            <p className="text-gray-600 font-medium italic">
              "YOUR VISION, OUR INNOVATION"
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-pulse-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-pulse-500 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-pulse-500 transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-600 hover:text-pulse-500 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-pulse-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#bim" className="text-gray-600 hover:text-pulse-500 transition-colors">BIM Modeling</Link></li>
              <li><Link href="/services#scanning" className="text-gray-600 hover:text-pulse-500 transition-colors">3D Scanning</Link></li>
              <li><Link href="/services#redevelopment" className="text-gray-600 hover:text-pulse-500 transition-colors">Redevelopment</Link></li>
              <li><Link href="/services#turnkey" className="text-gray-600 hover:text-pulse-500 transition-colors">Turnkey Solutions</Link></li>
              <li><Link href="/services#vr" className="text-gray-600 hover:text-pulse-500 transition-colors">AR/VR Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 text-pulse-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">+91 8999805769</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 text-pulse-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">info@morphbim.com</span>
              </li>
              <li className="flex items-start">
                <Globe className="w-5 h-5 mr-2 text-pulse-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">www.morphbim.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-pulse-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-600">
                  <p>INDIA</p>
                  <p>NAGPUR | NASHIK | MUMBAI</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} MorphVision LLP. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-gray-600 text-sm hover:text-pulse-500 transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-600 text-sm hover:text-pulse-500 transition-colors">Terms of Service</a>
              <a href="/sitemap" className="text-gray-600 text-sm hover:text-pulse-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
