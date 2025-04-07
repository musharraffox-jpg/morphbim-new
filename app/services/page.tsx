'use client'

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsSection from "@/components/SpecsSection";
import Features from "@/components/Features";
import DetailsSection from "@/components/DetailsSection";
import MadeByHumans from "@/components/MadeByHumans";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCTA from '@/components/ProjectCTA';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
    steps: string[];
  };
  tools: {
    title: string;
    description: string;
    list: string[];
  };
  caseStudies: {
    title: string;
    description: string;
    projects: {
      id: string;
      title: string;
      description: string;
      image: string;
    }[];
  };
  faq: {
    title: string;
    description: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
}

const servicesData: Service[] = [
  {
    id: 'bim-modeling-coordination',
    title: 'BIM Modeling & Coordination',
    description: 'Our comprehensive BIM modeling and coordination services help you create accurate, detailed 3D models that facilitate better decision-making and collaboration throughout your project lifecycle.',
    icon: '/images/services/bim-modeling.svg',
    image: '/images/services/bim-modeling-bg.jpg',
    features: [
      '3D modeling of architectural, structural, and MEP systems',
      'Clash detection and resolution',
      '4D and 5D BIM integration',
      'As-built modeling and documentation',
      'BIM standards development and implementation',
      'Model quality assurance and validation'
    ],
    benefits: [
      'Improved project coordination and collaboration',
      'Reduced rework and construction delays',
      'Better cost estimation and control',
      'Enhanced visualization and communication',
      'Streamlined project delivery',
      'Increased efficiency and productivity'
    ],
    process: {
      title: 'Our BIM Process',
      description: 'We follow a systematic approach to ensure the highest quality of BIM deliverables.',
      steps: [
        'Initial consultation and requirements gathering',
        'BIM execution plan development',
        'Model creation and development',
        'Coordination and clash detection',
        'Review and quality assurance',
        'Documentation and delivery'
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      description: 'We use industry-leading software and tools to deliver exceptional BIM services.',
      list: [
        'Autodesk Revit',
        'Navisworks',
        'BIM 360',
        'Dynamo',
        'Tekla Structures',
        'Solibri Model Checker'
      ]
    },
    caseStudies: {
      title: 'Case Studies',
      description: 'Explore how our BIM services have helped clients achieve their project goals.',
      projects: [
        {
          id: 'hospital-complex',
          title: 'Hospital Complex',
          description: 'BIM modeling and coordination for a 500-bed hospital complex.',
          image: '/images/projects/hospital-complex.jpg'
        },
        {
          id: 'pharmaceutical-clean-room',
          title: 'Pharmaceutical Clean Room',
          description: 'Detailed MEP modeling for a pharmaceutical manufacturing facility.',
          image: '/images/projects/pharmaceutical-clean-room.jpg'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about our BIM services.',
      questions: [
        {
          question: 'What is BIM and why is it important?',
          answer: 'Building Information Modeling (BIM) is a digital representation of physical and functional characteristics of a facility. It serves as a shared knowledge resource for information about a facility, forming a reliable basis for decisions during its lifecycle. BIM is important because it enables better coordination, reduces errors, improves efficiency, and facilitates better decision-making throughout the project lifecycle.'
        },
        {
          question: 'How long does it take to create a BIM model?',
          answer: 'The time required to create a BIM model depends on various factors such as the size and complexity of the project, the level of detail required, and the availability of information. A simple model might take a few days, while a complex project could take several weeks or months.'
        },
        {
          question: 'What software do you use for BIM modeling?',
          answer: 'We use industry-leading software including Autodesk Revit, Navisworks, BIM 360, and other specialized tools depending on the project requirements. Our team is proficient in multiple BIM platforms and can adapt to your preferred software.'
        }
      ]
    }
  }
];

export default function ServicesPage() {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    // Check if we're in the browser environment
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="bg-gradient-to-r from-[#20133d] to-[#512888] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="pulse-chip mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
                <span>Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our Services
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                Comprehensive BIM solutions to enhance your construction projects.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: 'pharmaceutical',
                    title: 'Pharmaceutical Cleanrooms and Manufacturing Units',
                    description: 'Specialized BIM solutions for pharmaceutical facilities, ensuring compliance with GMP standards and cleanroom requirements.',
                    icon: (
                      <svg className="w-6 h-6 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )
                  },
                  {
                    id: 'industrial',
                    title: 'Industrial Plants and Utility Systems',
                    description: 'Comprehensive BIM modeling and coordination for complex industrial facilities and utility infrastructure.',
                    icon: (
                      <svg className="w-6 h-6 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )
                  },
                  {
                    id: 'infrastructure',
                    title: 'Redevelopment of Urban Infrastructure',
                    description: 'Smart city solutions and infrastructure redevelopment using advanced BIM technologies.',
                    icon: (
                      <svg className="w-6 h-6 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    )
                  }
                ].map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-pulse-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-lg bg-pulse-500/10 flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-pulse-500 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-pulse-500 group-hover:translate-x-2 transition-transform">
                      <span className="font-medium mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Approach section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Our Approach to BIM Excellence</h2>
                <p className="text-gray-700 mb-8">
                  At MorphVision, we believe that effective Building Information Modeling goes beyond just creating 3D models. Our comprehensive approach integrates people, processes, and technology to deliver exceptional results.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: 'Collaborative Workflow',
                      description: 'We work closely with all project stakeholders to ensure seamless integration of BIM into your existing processes.'
                    },
                    {
                      title: 'Technical Excellence',
                      description: 'Our team stays at the forefront of BIM technology, implementing best practices and innovative solutions.'
                    },
                    {
                      title: 'Tailored Solutions',
                      description: 'We customize our approach to meet your specific project requirements and business objectives.'
                    },
                    {
                      title: 'Continuous Improvement',
                      description: 'We constantly refine our methods and processes based on project feedback and industry developments.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-pulse-500 text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <Image 
                    src="/background-section2.png" 
                    alt="Our BIM Approach" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg max-w-xs">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-pulse-50 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">ISO 19650 Compliant</h4>
                      <p className="text-sm text-gray-600">Our processes follow international BIM standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Industries section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Industries We Serve</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our BIM services cater to a wide range of sectors, each with their unique requirements and challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                {
                  name: 'Commercial',
                  icon: '/images/services/default-icon.svg'
                },
                {
                  name: 'Residential',
                  icon: '/images/services/default-icon.svg'
                },
                {
                  name: 'Healthcare',
                  icon: '/images/services/default-icon.svg'
                },
                {
                  name: 'Education',
                  icon: '/images/services/default-icon.svg'
                },
                {
                  name: 'Infrastructure',
                  icon: '/images/services/default-icon.svg'
                },
                {
                  name: 'Industrial',
                  icon: '/images/services/default-icon.svg'
                }
              ].map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-pulse-50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                    <Image 
                      src={industry.icon} 
                      alt={industry.name} 
                      width={32} 
                      height={32}
                    />
                  </div>
                  <h3 className="font-medium">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <svg className="w-12 h-12 text-pulse-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <blockquote className="text-2xl font-display mb-8">
                "MorphVision's BIM services transformed our project delivery approach. Their team's expertise helped us reduce coordination issues by 70% and achieve substantial cost savings throughout construction."
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src="/images/testimonials/client-1.jpg" 
                    alt="Client" 
                    width={48} 
                    height={48}
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rajiv Sharma</div>
                  <div className="text-gray-600 text-sm">Project Director, Megastructures Ltd</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section with updated styling */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">
                  Get answers to common questions about our BIM services, process, and capabilities
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What types of projects does MorphVision specialize in?",
                    answer: "MorphVision specializes in a wide range of projects including pharmaceutical cleanrooms, manufacturing units, industrial plants, utility systems, urban infrastructure redevelopment, pre-engineered buildings, hospitals, data centers, and commercial & residential projects. We have expertise in BIM modeling, detailed designing, scanning, redevelopment, and turnkey project solutions."
                  },
                  {
                    question: "How does the project process work with MorphVision?",
                    answer: "Our project process follows a systematic approach: Initial consultation and requirements gathering, followed by BIM execution plan development, model creation, coordination and clash detection, quality assurance, and final documentation delivery. We maintain clear communication throughout the project lifecycle."
                  },
                  {
                    question: "What software and technologies does MorphVision use?",
                    answer: "We utilize industry-leading software including Autodesk Revit, Navisworks, BIM 360, Dynamo, Tekla Structures, and Solibri Model Checker. Our team stays updated with the latest BIM technologies to deliver optimal solutions."
                  },
                  {
                    question: "How long does a typical project take?",
                    answer: "Project duration varies based on scope, complexity, and requirements. A typical project can range from a few weeks to several months. We provide detailed timelines during the initial consultation phase."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project CTA with gradient background */}
        <section className="py-20 bg-gradient-to-r from-[#20133d] to-[#512888] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Projects?</h2>
              <p className="text-xl text-white/90 mb-8">
                Get in touch with our team to explore how our BIM solutions can elevate your construction projects.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-[#20133d] font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <ProjectCTA />
      </main>
      <Footer />
    </div>
  );
} 