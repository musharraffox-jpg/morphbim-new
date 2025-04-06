import React from 'react';
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="w-full py-20 bg-white" id="contact">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Contact</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Main Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Let's Build Something Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your construction projects with cutting-edge BIM solutions? Our team of experts is here to help you achieve your goals.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pulse-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      123 BIM Street, Suite 456<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pulse-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a 
                      href="mailto:contact@morphvison.com" 
                      className="text-pulse-500 hover:text-pulse-600 transition-colors text-sm inline-flex items-center gap-1"
                    >
                      contact@morphvison.com
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pulse-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a 
                      href="tel:+1-555-123-4567" 
                      className="text-pulse-500 hover:text-pulse-600 transition-colors text-sm inline-flex items-center gap-1"
                    >
                      +1 (555) 123-4567
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pulse-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-2xl overflow-hidden h-[400px] relative">
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Map placeholder - Add your preferred map integration here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 