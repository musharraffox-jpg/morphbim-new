import React from 'react';
import { Mail, Phone, MessageSquare, User, Building2 } from 'lucide-react';

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-shadow"
              placeholder="John Smith"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Work Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-shadow"
              placeholder="john@company.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="relative">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-shadow"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        {/* Company Field */}
        <div className="relative">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Building2 className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="company"
              className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-shadow"
              placeholder="Your Company"
            />
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div className="relative">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          How can we help?
        </label>
        <div className="relative">
          <div className="absolute top-4 left-4 flex items-start pointer-events-none">
            <MessageSquare className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="message"
            rows={6}
            className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-shadow resize-none"
            placeholder="Tell us about your project requirements..."
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pulse-500 to-pulse-600 text-white py-4 px-8 rounded-xl font-medium hover:shadow-lg hover:shadow-pulse-500/20 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm; 