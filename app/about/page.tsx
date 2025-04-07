'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  // Initialize intersection observer for animations
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="pulse-chip mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
                <span>About Us</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">Redefining Industries through Innovation</h1>
              
              <p className="text-xl text-gray-600 mb-12">
                Morph is an Indian-based Company Renowned for its Expertise in BIM, Detailed Designing, Scanning, Redevelopment, and Turnkey Project Solutions. Since our Inception, we have been Reshaping Industries by Combining Innovation, Technology, and a Client-Centric approach.
              </p>
              
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-12">
                <Image 
                  src="/og.jpg" 
                  alt="MorphVision Team" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden aspect-square relative animate-on-scroll">
                <Image 
                  src="/background-section1.png" 
                  alt="MorphVision Story" 
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="animate-on-scroll">
                <div className="pulse-chip mb-6">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                  <span>Company History</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">From Vision to Industry Leader</h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2020 by a Team of Three Passionate Individuals, Morph Officially Registered in 2023. Starting as a small Venture, the Company has Grown into a Multidisciplinary Powerhouse with 40+ Skilled Professionals.
                </p>
                
                <p className="text-lg text-gray-600 mb-6">
                  Our team specializes in Architecture, Structural, MEPF, Civil, Electrical, and Mechanical Engineering. With Expertise in Detailed Design, BIM modeling, AR/VR Rendering, and Innovative Industry Platforms, MorphVision has Successfully Delivered 190+ Projects across Various Domains.
                </p>
                
                <p className="text-lg text-gray-600">
                  Today, Morph stands as a Trusted name in the AEC industry, Committed to Innovation and Excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="animate-on-scroll">
                <div className="pulse-chip mb-6">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
                  <span>Our Mission</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Empowering Industries with Excellence</h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  Our Mission is to Deliver Projects that not only align with but Surpass Global Standards of Excellence. Morph is Driving Transformative change across the Construction, Pharmaceutical, Commercial, Industrial and Engineering sectors.
                </p>
                
                <div className="bg-pulse-50 rounded-xl p-6 border-l-4 border-pulse-500">
                  <p className="text-lg font-medium text-gray-800 italic">
                    "Empowering Industries with Innovation, Precision, and Sustainable Solutions."
                  </p>
                </div>
              </div>
              
              {/* Vision */}
              <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
                <div className="pulse-chip mb-6">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
                  <span>Our Vision</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Building the Future</h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  To be a Global Leader in Innovative Design and Technology, Transforming Industries Through Cutting-edge Solutions in BIM, AR/VR, and AI.
                </p>
                
                <p className="text-lg text-gray-600 mb-6">
                  We aspire to set new Benchmarks in Efficiency, Precision, and Sustainability, Driving Progress across Construction, Pharmaceuticals, and Engineering While fostering a Future built on Excellence and Innovation.
                </p>
                
                <div className="bg-pulse-50 rounded-xl p-6 border-l-4 border-pulse-500">
                  <p className="text-lg font-medium text-gray-800 italic">
                    "Redefining Industries through Innovation, Technology, and Sustainable Excellence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Expertise Section */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="pulse-chip inline-flex mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
                <span>Our Expertise</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Building Innovation, Modeling the Future</h2>
              
              <p className="text-lg text-gray-600">
                With a Strong Commitment to Innovation and Precision, MorphVision LLP Specializes in:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Building Information Modeling (BIM)",
                  description: "Using Advanced tools like Revit, Navisworks, and Unreal Engine to Deliver Seamless Project Designs and Walkthroughs.",
                  icon: "🏗️"
                },
                {
                  title: "Redevelopment & Scanning Projects",
                  description: "Revamping Outdated Facilities Into Modern, Sustainable Infrastructures.",
                  icon: "🔍"
                },
                {
                  title: "AR/VR-Driven Engineering",
                  description: "Interactive Walkthroughs and Immersive Project Visualizations for Better Decision-Making.",
                  icon: "🥽"
                },
                {
                  title: "Turnkey Project Solutions",
                  description: "Managing all Phases of a Project — from Conceptual Design to Execution — with Unparalleled Efficiency.",
                  icon: "🔑"
                }
              ].map((expertise, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-4">{expertise.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{expertise.title}</h3>
                  <p className="text-gray-600">{expertise.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Portfolio Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="pulse-chip inline-flex mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
                <span>Diverse Portfolio</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Our 190+ Projects</h2>
              
              <p className="text-lg text-gray-600">
                Our projects reflect our commitment to innovation and excellence across industries like:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Pharmaceutical Cleanrooms and Manufacturing Units",
                "Industrial Plants and Utility Systems",
                "Redevelopment of Urban Infrastructure",
                "Pre-engineered Buildings and Civil Construction",
                "Hospitals, SemiCon, Data-Center",
                "Commercial & Residential Projects"
              ].map((project, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-pulse-500 transition-colors duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-pulse-50 rounded-full flex items-center justify-center mb-4 text-pulse-500 font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-lg font-medium">{project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team Section */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="pulse-chip inline-flex mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">07</span>
                <span>Leadership</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Founders & Directors</h2>
              
              <p className="text-lg text-gray-600">
                Our Leadership Team brings Vision, Experience, and Expertise to Ensure MorphVision remains a Trusted Partner Globally
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mohammad Musharraf",
                  role: "Director of Sales & Marketing",
                  description: "Spearheading Business Development and Fostering Partnerships Worldwide.",
                  image: "/background-section1.png"
                },
                {
                  name: "Shaibaz Shaikh",
                  role: "Director of Operations",
                  description: "An industry Innovator Overseeing Technical Development and Execution across all Projects.",
                  image: "/background-section2.png"
                },
                {
                  name: "Shaoib Shaikh",
                  role: "CEO",
                  description: "Driving Operational Excellence with a Focus on Efficiency, Team Management, and Client Satisfaction.",
                  image: "/background-section3.png"
                }
              ].map((member, index) => (
                <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-elegant">
                    <div className="h-64 relative">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-pulse-500 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <div className="pulse-chip inline-flex mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">08</span>
                <span>Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">The Morph Promise</h2>
              
              <p className="text-lg text-gray-600">
                Collaborating with us means choosing a partner that offers:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Skilled and Diverse Team",
                  description: "Our 40+ Professionals Specialize in Architecture, Structural, Civil, MEPF, Electrical, and Mechanical Engineering, Ensuring a Seamless, Multidisciplinary approach to Every Project."
                },
                {
                  title: "Technology at the Core",
                  description: "We use Industry-leading tools like Revit, Navisworks, and Unreal Engine to Deliver accurate Designs, Immersive AR/VR Experiences, and Efficient Project Coordination."
                },
                {
                  title: "Proven Experience",
                  description: "With over 190+ Projects Successfully Completed, We've built a Reputation for Delivering Quality Solutions across Sectors such as Pharmaceuticals, Infrastructure, Industrial and Commercial Developments."
                },
                {
                  title: "Focus on Innovation",
                  description: "From Cutting-edge BIM Solutions to Developing Interactive Platforms for Industries, Innovation Drives Everything We do."
                },
                {
                  title: "Client-First Approach",
                  description: "We Work Closely with Clients, Ensuring Clear Communication, on-time Delivery, and Solutions Tailored to their Needs."
                },
                {
                  title: "Global Standards",
                  description: "Meeting Stringent International Regulations to Deliver World-class Quality in every project."
                }
              ].map((reason, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-xl p-6 border-t-4 border-pulse-500 hover:shadow-elegant transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-xl font-medium text-gray-800 italic animate-on-scroll">
                "Delivering precision, innovation, and excellence in every project, every time."
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="bg-pulse-500 rounded-2xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Ready to Transform Your Projects?</h2>
              <p className="text-xl mb-8 opacity-90">Get in touch with our team to explore how our BIM solutions can elevate your construction projects.</p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-pulse-500 font-medium group"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
} 