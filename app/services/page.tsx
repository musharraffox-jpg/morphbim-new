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
import { services } from '@/app/data/services'; // Import services data


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
      <main>
        <section className=" ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="pulse-chip mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
                <span>Our Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Comprehensive Engineering & BIM Solutions
              </h1>
              
              <p className="text-xl mb-8">
                We offer a variety of specialized services across different sectors, leveraging cutting-edge technology and deep expertise to deliver optimized project outcomes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services overview grid (Updated to use data from services.ts) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-pulse-500 transition-all duration-300 hover:shadow-lg animate-on-scroll"
                  >
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-lg bg-pulse-500/10 flex items-center justify-center mb-4">
                         {/* Placeholder Icon - Can be improved later */}
                         <svg className="w-6 h-6 text-pulse-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
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

        {/* Detailed BIM Services Section (from PDF) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-16 animate-on-scroll">
              <div className="pulse-chip inline-flex mb-6">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
                  <span>BIM Specialization</span>
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Comprehensive BIM Solutions</h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive BIM solutions tailored to client needs, covering the entire project lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
              {[
                {
                  title: "BIM Implementation & Strategy",
                  description: "Tailored solutions for adopting and strategizing BIM implementation on projects."
                },
                {
                  title: "Design Modeling & Clash Detection",
                  description: "Creating detailed 3D visualizations to identify and resolve design conflicts early."
                },
                {
                  title: "4D Scheduling & 5D Cost Estimation",
                  description: "Integrating time and cost into the BIM model for efficient project management."
                },
                {
                  title: "Facility Management with As-Built Models",
                  description: "Delivering accurate as-built documentation for efficient facility operations and maintenance."
                },
                {
                  title: "Data Analytics & Software Integration",
                  description: "Customizing solutions and integrating software to optimize project outcomes through data insights."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-lg font-semibold mb-2 text-pulse-600">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Approach section - Kept for context */}
        <section className="py-20 bg-white"> 
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <div className="pulse-chip inline-flex mb-6">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
                    <span>Our Approach</span>
                </div>
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
              
              <div className="relative animate-on-scroll" style={{ animationDelay: "0.1s" }}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
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
        
        {/* Industries section - Simplified */}
        <section className="py-20 bg-gray-50"> 
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 animate-on-scroll">
               <div className="pulse-chip inline-flex mb-6">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
                    <span>Industries Served</span>
                </div>
              <h2 className="text-3xl font-display font-bold mb-4">Industries We Empower</h2>
              <p className="text-gray-600 max-w-3xl">
                Our versatile BIM services cater to a wide spectrum of sectors, adapting to the unique demands and challenges of each.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-on-scroll">
              {[
                "Healthcare & Pharma",
                "Hotel & Residency",
                "Industrial",
                "Commercial",
                "Infrastructure", // Added based on general capabilities
                "Scan to BIM Projects"
              ].map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-gray-700">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Removed Testimonial Section - Assuming it exists elsewhere or can be added later */}
        
        {/* FAQ section - Simplified for main services page */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-on-scroll">
                 <div className="pulse-chip inline-flex mb-6">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
                    <span>Common Questions</span>
                </div>
                <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">
                  Answers to common inquiries about our general BIM services and processes.
                </p>
              </div>
              
              <div className="space-y-4 animate-on-scroll">
                {[
                  {
                    question: "What makes MorphVision different in the BIM space?",
                    answer: "Our key differentiators include our multidisciplinary team of 40+ experts, a proven track record of 190+ projects, commitment to global standards, a client-first approach, and continuous focus on innovation using tools like Revit, Navisworks, and Unreal Engine."
                  },
                  {
                    question: "How do you ensure quality in your BIM models and services?",
                    answer: "We employ rigorous quality assurance processes, adhere to international standards like ISO 19650, use advanced clash detection techniques, and maintain clear communication protocols throughout the project lifecycle to ensure high-quality deliverables."
                  },
                  {
                    question: "Can you handle projects of different sizes and complexities?",
                    answer: "Yes, our team has experience across a wide range of project scales, from specific component modeling (like Family Creation or Scan to BIM) to large-scale, complex projects involving architectural, structural, and MEPF coordination for sectors like healthcare, industrial, and commercial developments."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project CTA */}
        <ProjectCTA />

      </main>
    </div>
  );
} 