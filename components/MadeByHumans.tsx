import React from "react";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-4 sm:mt-8">
          <div 
            className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 md:p-12 min-h-[400px] sm:min-h-[500px] flex flex-col" 
            style={{
              backgroundImage: "url('/background-section3.png')",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            {/* Logo Section */}
            <div className="flex items-center text-white mb-6 sm:mb-8">
              <img src="/logo.png" alt="Morphvison Logo" className="h-8 sm:h-12 w-auto mr-3 invert" />
            </div>
            
            <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 text-white max-w-3xl">
              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-medium mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <p>
                    <a href="tel:+919156888827" className="text-base sm:text-lg hover:text-[#20133d] transition-colors">
                      +91 9156888827
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@morphbim.com" className="text-base sm:text-lg hover:text-[#20133d] transition-colors">
                      info@morphbim.com
                    </a>
                  </p>
                  <p className="text-base sm:text-lg">
                    Plot No.13 First Floor, Bhande Plot Square
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-medium mb-4">Connect With Us</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <a 
                    href="https://www.linkedin.com/company/morphvison" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-white hover:text-[#20133d] transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a 
                    href="https://instagram.com/morphvison" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-white hover:text-[#20133d] transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-lg"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a 
                    href="https://youtube.com/@morphvison" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-white hover:text-[#20133d] transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-lg"
                  >
                    <Youtube className="w-5 h-5" />
                    <span className="text-sm">YouTube</span>
                  </a>
                  <a 
                    href="https://twitter.com/morphvison" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-white hover:text-[#20133d] transition-colors bg-white/10 backdrop-blur-sm p-2 rounded-lg"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="text-sm">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* White box at the bottom with overflow - Hidden on mobile */}
            <div className="hidden sm:block w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
