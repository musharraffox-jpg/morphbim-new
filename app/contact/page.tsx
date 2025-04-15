'use client'

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MadeByHumans from '@/components/MadeByHumans';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Here you would typically send the form data to your backend
      // For demo purposes, we're just simulating a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (err) {
      setError('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="pulse-chip inline-flex mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
                <span>Contact Us</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">Let's Build the Future Together</h1>
              
              <p className="text-xl text-gray-600 mb-8 mx-auto max-w-3xl">
                Ready to transform your vision into reality? Connect with MorphVision and discover how our innovative solutions can take your projects to the next level.
              </p>
              
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="#contactForm" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-pulse-500 text-white font-medium">
                  Get in Touch
                </a>
                <a href="tel:+918999805769" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Information Section */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Phone */}
                <div className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-pulse-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-500 mb-4">We're available from 9 AM to 6 PM IST</p>
                  <a href="tel:+918999805769" className="text-lg font-medium text-pulse-500 hover:underline">
                    +91 8999805769
                  </a>
                </div>
                
                {/* Email */}
                <div className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-pulse-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-500 mb-4">We typically respond within 24 hours</p>
                  <a href="mailto:info@morphbim.com" className="text-lg font-medium text-pulse-500 hover:underline">
                    info@morphbim.com
                  </a>
                </div>
                
                {/* Visit */}
                <div className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-pulse-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Locations</h3>
                  <p className="text-gray-500 mb-4">Our offices across India</p>
                  <p className="text-lg font-medium text-pulse-500">
                    NAGPUR | NASHIK | MUMBAI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section id="contactForm" className="w-full bg-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="pulse-chip mb-6">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                    <span>Get in Touch</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Ready to Start Your Project?</h2>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    Fill in the form below, and our team will get back to you soon to discuss how we can help bring your vision to life.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                    <div className="flex items-center gap-4">
                      <a 
                        href="https://www.linkedin.com/company/morphvision-llp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center hover:bg-pulse-100 transition-colors"
                      >
                        <Linkedin className="w-6 h-6 text-pulse-500" />
                      </a>
                      <a 
                        href="https://www.instagram.com/morphvision_llp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center hover:bg-pulse-100 transition-colors"
                      >
                        <Instagram className="w-6 h-6 text-pulse-500" />
                      </a>
                      <a 
                        href="https://www.youtube.com/@morphvision"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center hover:bg-pulse-100 transition-colors"
                      >
                        <Youtube className="w-6 h-6 text-pulse-500" />
                      </a>
                      <a 
                        href="https://twitter.com/morphvision"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-pulse-50 rounded-full flex items-center justify-center hover:bg-pulse-100 transition-colors"
                      >
                        <Twitter className="w-6 h-6 text-pulse-500" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-pulse-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3">Our Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Architectural & Structural Engineering</li>
                      <li>MEP Engineering</li>
                      <li>Industrial & Pharma Design</li>
                      <li>Scan to BIM</li>
                      <li>AR/VR Solutions</li>
                      <li>Family Creation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-elegant p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-3">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out to MorphVision. One of our team members will get back to you shortly.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-pulse-500 text-white font-medium"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name*
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address*
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                            placeholder="+91 1234567890"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Message*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                          placeholder="Tell us about your project and requirements..."
                        ></textarea>
                      </div>
                      
                      {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg">
                          {error}
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-pulse-500 text-white font-medium ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-pulse-600'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Locations Section */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="pulse-chip inline-flex mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
                <span>Our Offices</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Visit MorphVision in India</h2>
              
              <p className="text-lg text-gray-600">
                With offices in key cities across India, we're strategically positioned to serve clients nationwide and internationally.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  city: "Nagpur",
                  image: "/background-section1.png",
                  description: "Our main headquarters, where our leadership team and core operations are based."
                },
                {
                  city: "Nashik",
                  image: "/background-section2.png",
                  description: "Our development center focused on innovation and technology advancement."
                },
                {
                  city: "Mumbai",
                  image: "/background-section3.png",
                  description: "Our business development office serving clients in India's financial capital."
                }
              ].map((location, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                  <div className="h-48 relative">
                    <Image 
                      src={location.image} 
                      alt={`MorphVision ${location.city} Office`} 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <h3 className="text-2xl font-semibold text-white p-6">{location.city}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="pulse-chip inline-flex mb-6">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
                  <span>FAQs</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Frequently Asked Questions</h2>
                
                <p className="text-lg text-gray-600">
                  Find answers to common questions about working with MorphVision
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "What types of projects does MorphVision specialize in?",
                    answer: "MorphVision specializes in a wide range of projects including pharmaceutical cleanrooms, manufacturing units, industrial plants, utility systems, urban infrastructure redevelopment, pre-engineered buildings, hospitals, data centers, and commercial & residential projects. We have expertise in BIM modeling, detailed designing, scanning, redevelopment, and turnkey project solutions."
                  },
                  {
                    question: "How does the project process work with MorphVision?",
                    answer: "Our process typically begins with an initial consultation to understand your requirements, followed by a proposal outlining scope, timeline, and investment. Once approved, we proceed with design and modeling, incorporating your feedback at various milestones. We provide regular progress updates and deliver the final outputs according to the agreed specifications."
                  },
                  {
                    question: "What software and technologies does MorphVision use?",
                    answer: "We utilize industry-leading tools like Revit, Navisworks, and Unreal Engine to deliver accurate designs, immersive AR/VR experiences, and efficient project coordination. Our team is proficient in various software platforms that enable high-quality BIM modeling, scanning, and detailed designing."
                  },
                  {
                    question: "How long does a typical project take?",
                    answer: "Project timelines vary significantly based on scope, complexity, and requirements. Small-scale BIM modeling projects might take a few weeks, while comprehensive turnkey solutions could span several months. We provide detailed timelines during the proposal phase and keep you updated throughout the process."
                  },
                  {
                    question: "Does MorphVision work with international clients?",
                    answer: "Yes, MorphVision works with clients globally. With our expertise and technological capabilities, we can collaborate effectively across time zones and deliver projects to international standards and specifications."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <MadeByHumans />
      </main>
    </div>
  );
} 