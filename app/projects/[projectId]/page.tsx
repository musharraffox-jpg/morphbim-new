'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Check, CheckCircle2, Clock, Building, Building2, Landmark, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCTA from '@/components/ProjectCTA';
import Newsletter from '@/components/Newsletter';

// Project data (in a real app, this would come from a database or API)
const projectsData = [
  {
    id: 'hospital-complex',
    title: 'Modern Hospital Complex',
    category: 'Healthcare',
    location: 'Mumbai, India',
    date: '2022',
    duration: '18 months',
    client: 'HealthCare Innovations Ltd.',
    mainImage: '/background-section1.png',
    images: ['/background-section1.png', '/background-section2.png', '/background-section3.png'],
    overview: 'A state-of-the-art hospital complex featuring advanced BIM implementation for optimized healthcare delivery. The project showcased innovative space planning, MEP coordination, and compliance with international healthcare standards.',
    challenges: [
      'Complex MEP systems coordination for medical equipment',
      'Strict compliance with healthcare facility regulations',
      'Integration of specialized zones with varying requirements',
      'Coordination of multiple stakeholders and consultants'
    ],
    solutions: [
      'Advanced 3D modeling and clash detection for MEP systems',
      'Custom healthcare equipment family creation',
      'Real-time coordination meetings with stakeholders',
      'Phased implementation strategy for minimal disruption'
    ],
    services: ['3D BIM Modeling', 'MEP Coordination', 'Clash Detection', '4D Scheduling', 'As-built Documentation'],
    results: 'The project was completed on schedule and within budget, resulting in a 20% reduction in construction errors and a 15% improvement in project coordination efficiency. The client was able to open the facility ahead of schedule, with minimal post-construction issues.'
  },
  {
    id: 'pharma-cleanroom',
    title: 'Pharmaceutical Clean Room Facility',
    category: 'Pharmaceutical',
    location: 'Nashik, India',
    date: '2021',
    duration: '12 months',
    client: 'MediPharma Group',
    mainImage: '/background-section2.png',
    images: ['/background-section2.png', '/background-section3.png', '/background-section1.png'],
    overview: 'A cutting-edge pharmaceutical manufacturing facility with cleanroom environments requiring precise BIM modeling and coordination. The project involved complex HVAC systems, stringent material specifications, and regulatory compliance.',
    challenges: [
      'Maintaining cleanroom classification requirements',
      'Integration of specialized pharmaceutical equipment',
      'Balancing energy efficiency with cleanroom standards',
      'Compliance with FDA and other regulatory requirements'
    ],
    solutions: [
      'Detailed 3D modeling of cleanroom components',
      'Custom parametric families for specialized equipment',
      'Rigorous clash detection for all building systems',
      'Documentation packages for regulatory submissions'
    ],
    services: ['Detailed Cleanroom Modeling', 'System Coordination', 'Regulatory Documentation', 'Construction Support'],
    results: 'The facility received certification on first inspection with zero critical observations. Construction was completed with minimal RFIs due to comprehensive BIM coordination, saving an estimated 8% in construction costs.'
  },
  {
    id: 'manufacturing-plant',
    title: 'Industrial Manufacturing Plant',
    category: 'Industrial',
    location: 'Nagpur, India',
    date: '2022',
    duration: '24 months',
    client: 'Industrial Innovations Corp.',
    mainImage: '/background-section3.png',
    images: ['/background-section3.png', '/background-section1.png', '/background-section2.png'],
    overview: 'A large-scale manufacturing facility with complex production lines, material handling systems, and support facilities. The project required comprehensive BIM implementation to coordinate industrial equipment, utilities, and building systems.',
    challenges: [
      'Integration of large industrial equipment with building systems',
      'Coordination of overhead services with production requirements',
      'Phased construction while maintaining operations',
      'Future expansion planning and flexibility'
    ],
    solutions: [
      'Detailed 3D modeling of production equipment and systems',
      'Comprehensive clash detection across all disciplines',
      '4D scheduling for phased implementation',
      'Modular design approach for future expansion'
    ],
    services: ['Industrial BIM Modeling', 'Equipment Layout Optimization', 'Facility Planning', 'Construction Phasing'],
    results: 'The manufacturing plant was completed with zero productivity impact during construction. The BIM implementation resulted in a 25% reduction in RFIs and a 30% improvement in construction coordination.'
  }
];

export default function ProjectDetail({ params }: { params: { projectId: string }}) {
  const { projectId } = params;
  const project = projectsData.find(p => p.id === projectId);
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
            <Link 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 bg-pulse-500 text-white font-medium rounded-full hover:bg-pulse-600 transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Projects
            </Link>
          </div>
        </main>
      </div>
    );
  }
  
  // Find related projects (excluding current one)
  const relatedProjects = projectsData
    .filter(p => p.id !== project.id)
    .slice(0, 2);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative">
          <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh]">
            <Image 
              src={project.mainImage} 
              alt={project.title} 
              fill 
              className="object-cover" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl">
                  <div className="text-white text-sm font-medium mb-3">{project.category}</div>
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{project.title}</h1>
                  <div className="flex flex-wrap gap-4 text-white/80">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      <span>{project.client}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project details tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto whitespace-nowrap pb-px">
              {['overview', 'challenges', 'solutions', 'results', 'gallery'].map((tab) => (
                <button 
                  key={tab}
                  className={`py-3 px-5 font-medium capitalize -mb-px ${
                    activeTab === tab 
                      ? 'text-pulse-500 border-b-2 border-pulse-500' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
                    <p className="text-gray-700 mb-8 leading-relaxed">{project.overview}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">Services Provided</h3>
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {project.services.map((service, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-pulse-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'challenges' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Project Challenges</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      This project presented several unique challenges that required innovative solutions and expert coordination:
                    </p>
                    <ul className="space-y-4 mb-8">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                          <span className="w-6 h-6 rounded-full bg-pulse-500/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="font-medium text-pulse-500">{index + 1}</span>
                          </span>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'solutions' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Our Solutions</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      MorphVision developed tailored solutions to address each challenge faced in this project:
                    </p>
                    <ul className="space-y-4 mb-8">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pulse-500 to-purple-600 flex items-center justify-center text-white mr-3 flex-shrink-0">
                            <Check className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-gray-700">{solution}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'results' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Project Results</h2>
                    <div className="bg-gradient-to-r from-[#20133d]/5 to-pulse-500/5 p-6 rounded-xl mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        {project.results}
                      </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                      {[
                        { value: '15%', label: 'Cost Reduction' },
                        { value: '20%', label: 'Time Saved' },
                        { value: '95%', label: 'Client Satisfaction' }
                      ].map((stat, index) => (
                        <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center">
                          <div className="text-3xl font-bold text-pulse-500 mb-1">{stat.value}</div>
                          <div className="text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'gallery' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {project.images.map((image, index) => (
                        <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                          <Image 
                            src={image} 
                            alt={`${project.title} - Image ${index + 1}`} 
                            fill 
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Client</div>
                      <div className="font-medium">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="font-medium">{project.location}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Completion Date</div>
                      <div className="font-medium">{project.date}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Project Duration</div>
                      <div className="font-medium">{project.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Category</div>
                      <div className="font-medium">{project.category}</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#20133d] rounded-xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Need Similar Solutions?</h3>
                  <p className="text-white/80 mb-6">
                    Contact us to discuss how we can deliver similar results for your project.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center w-full bg-white text-[#20133d] font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related projects */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-8">Related Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link 
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-56">
                    <Image 
                      src={relatedProject.mainImage} 
                      alt={relatedProject.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <div className="text-white text-sm font-medium mb-1">{relatedProject.category}</div>
                        <h3 className="text-xl font-semibold text-white">{relatedProject.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-pulse-500 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="font-medium mr-2">View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <ProjectCTA />
        <Newsletter />
      </main>
    </div>
  );
} 