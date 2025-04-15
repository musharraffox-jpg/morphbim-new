'use client'

import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Hospital, Building2, Factory, Landmark, Scan, Users, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

// PulseChip component for consistent number+label chips
const PulseChip = ({ number, label }: { number: string; label: string }) => (
  <div className="pulse-chip inline-flex mb-6 flex items-center">
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">{number}</span>
    <span>{label}</span>
  </div>
);


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

  // Memoize reasons data to avoid re-creation on every render
  const reasons = useMemo(() => [
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
  ], []);

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero/About Section – Flipped Layout */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Text Left */}
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <PulseChip number="01" label="About Us" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">About Morph Vision LLP</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Morph Vision LLP is a group of committed professionals passionate about delivering cutting-edge engineering solutions. We specialize in providing comprehensive BIM (Building Information Modeling) services to assist our clients in achieving optimized project outcomes through strategic design, modeling, and coordination.
                </p>
              </motion.div>
              {/* Image Right */}
              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-video order-1 md:order-2"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image 
                  src="/og.jpg" 
                  alt="MorphVision Team" 
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* Our Story Section */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <PulseChip number="02" label="Company History" />
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded by committed professionals passionate about engineering solutions, Morph Vision LLP has grown into a multidisciplinary team specializing in BIM services.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team includes experts in Architecture, Structural, MEPF, Civil, Electrical, and Mechanical Engineering. We leverage expertise in detailed design, BIM modeling, AR/VR rendering, and custom platforms to deliver successful projects across diverse domains.
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="animate-on-scroll">
                <PulseChip number="03" label="Our Mission" />
                
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
                <PulseChip number="04" label="Our Vision" />
                
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 animate-on-scroll">
              <PulseChip number="05" label="Our Expertise" />
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Our Expertise</h2>
              
              <p className="text-lg text-gray-600">
                We offer a variety of specialized services across different sectors:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Architectural & Structural Engineering",
                  description: "Comprehensive architectural and structural design and modeling.",
                  icon: "🏗️"
                },
                {
                  title: "MEP Engineering",
                  description: "Design and modeling of Mechanical, Electrical & Plumbing systems. MEP coordination and clash detection.",
                  icon: "🔧"
                },
                {
                  title: "Industrial & Pharma Design",
                  description: "Expertise in designing industrial plants and pharmaceutical machinery setups.",
                  icon: "🏭"
                },
                {
                  title: "Scan to BIM",
                  description: "Converting laser scans into detailed 3D BIM models for accurate renovations and retrofits.",
                  icon: "🔍"
                },
                {
                  title: "AR/VR Solutions",
                  description: "Immersive Augmented Reality & Virtual Reality solutions to enhance design visualizations.",
                  icon: "🥽"
                },
                {
                  title: "Family Creation",
                  description: "Developing custom BIM families (parametric and non-parametric) for project needs.",
                  icon: "🧩"
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
        
        {/* Diverse Portfolio Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 animate-on-scroll">
              <PulseChip number="06" label="Diverse Portfolio" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Index of Projects</h2>
              <p className="text-lg text-gray-600">
                Our diverse portfolio encompasses a wide range of industries, including:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Portfolio Items with icons and animation */}
              {[
                {
                  icon: <Hospital className="w-8 h-8 text-pulse-500" />, label: "Healthcare & Pharma"
                },
                {
                  icon: <Landmark className="w-8 h-8 text-pulse-500" />, label: "Hotel & Residency"
                },
                {
                  icon: <Factory className="w-8 h-8 text-pulse-500" />, label: "Industrial"
                },
                {
                  icon: <Building2 className="w-8 h-8 text-pulse-500" />, label: "Commercial"
                },
                {
                  icon: <Scan className="w-8 h-8 text-pulse-500" />, label: "Scan to BIM"
                },
                {
                  icon: <Users className="w-8 h-8 text-pulse-500" />, label: "Family Creation"
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  className="bg-gray-50 rounded-xl border-t-4 border-pulse-500 p-6 flex flex-col items-center shadow-md hover:shadow-xl transition-all duration-300 relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-pulse-500">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-pulse-500 mb-1">{idx + 1}</span>
                  <span className="text-lg font-medium text-gray-700 text-center">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Global Footprint Section (Enhanced Visualization) */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <PulseChip number="07" label="Global Footprint" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-gray-900">
                Engineering Without Boundaries
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From North America to Asia, our innovative BIM solutions bridge geographical gaps. 
                We transform complex engineering challenges into seamless, precision-driven projects across continents.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative max-w-5xl mx-auto group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* World Map with Enhanced Styling */}
              <div className="relative">
                <Image
                  src="/world.svg" 
                  alt="Global Presence Map of MorphVision"
                  width={1200} 
                  height={600}
                  className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Animated Country Markers */}
                {[
                  { name: 'CANADA', left: '19%', top: '17%', description: 'North American Operations' },
                  { name: 'USA', left: '22%', top: '37%', description: 'Strategic Midwest Hub' },
                  { name: 'BENIN', left: '48%', top: '68%', description: 'African Market Expansion' },
                  { name: 'BAHRAIN', left: '55%', top: '30%', description: 'Middle Eastern Engineering Center' },
                  { name: 'QATAR', left: '57%', top: '38%', description: 'Gulf Region Innovations' },
                  { name: 'SAUDI ARABIA', left: '56%', top: '52%', description: 'Infrastructure Development' },
                  { name: 'UAE', left: '61%', top: '57%', description: 'Regional Technology Hub' },
                  { name: 'UZBEKISTAN', left: '69%', top: '27%', description: 'Central Asian Partnerships' },
                  { name: 'INDIA', left: '68%', top: '48%', description: 'Technology & Engineering Powerhouse' },
                  { name: 'SRI LANKA', left: '76%', top: '68%', description: 'South Asian Collaboration' },
                  { name: 'SINGAPORE', left: '86%', top: '54%', description: 'Southeast Asian Innovation Center' },
                ].map((country, index) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.5, 
                      type: "spring", 
                      stiffness: 200 
                    }}
                    className="absolute z-10 group"
                    style={{ left: country.left, top: country.top }}
                  >
                    <div className="relative flex flex-col items-center">
                      {/* Pulsing Pin */}
                      <span className="absolute h-5 w-5 rounded-full bg-pulse-500 opacity-50 animate-ping"></span>
                      <span className="relative h-3.5 w-3.5 rounded-full bg-pulse-500 ring-2 ring-white shadow-md"></span>
                      
                      {/* Tooltip */}
                      <div className="
                        absolute bottom-full mb-2 
                        hidden group-hover:block 
                        bg-white rounded-lg shadow-lg p-3 
                        text-center w-48 
                        border border-gray-200
                        transition-all duration-300
                      ">
                        <p className="text-sm font-semibold text-gray-800">{country.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{country.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Leadership Team Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16 animate-on-scroll">
              <PulseChip number="08" label="Leadership" />
              
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
                  image: "/images/person/musharraf.jpeg"
                },
                {
                  name: "Shaibaz Shaikh",
                  role: "Director of Operations",
                  description: "An industry Innovator Overseeing Technical Development and Execution across all Projects.",
                  image: "/images/person/shaibaz.jpeg"
                },
                {
                  name: "Shaoib Shaikh",
                  role: "CEO",
                  description: "Driving Operational Excellence with a Focus on Efficiency, Team Management, and Client Satisfaction.",
                  image: "/images/person/shoaib.webp"
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <PulseChip number="09" label="Why Choose Us" />
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">The Morph Promise</h2>
              
              <p className="text-lg text-gray-600">
                Collaborating with us means choosing a partner that offers:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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