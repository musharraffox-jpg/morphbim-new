'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase, Search, Filter, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCTA from '@/components/ProjectCTA';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  deadline: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

const jobsData: Job[] = [
  {
    id: 'senior-bim-manager',
    title: 'Senior BIM Manager',
    department: 'Engineering',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '5+ years',
    posted: '2024-03-15',
    deadline: '2024-04-15',
    overview: 'We are seeking an experienced Senior BIM Manager to lead our BIM team in delivering high-quality projects and implementing BIM standards across the organization.',
    responsibilities: [
      'Lead and manage BIM projects from inception to completion',
      'Develop and maintain BIM standards and protocols',
      'Coordinate with project stakeholders to ensure BIM requirements are met',
      'Mentor and train team members on BIM best practices',
      'Review and validate BIM deliverables for quality assurance',
      'Implement new BIM technologies and workflows'
    ],
    qualifications: [
      'Bachelor\'s degree in Architecture, Engineering, or related field',
      'Minimum 5 years of experience in BIM management',
      'Advanced proficiency in Autodesk Revit and other BIM software',
      'Strong understanding of construction processes and methodologies',
      'Excellent communication and leadership skills',
      'BIM certification (preferred)'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Professional development opportunities',
      'Flexible work arrangements',
      'Annual performance bonus',
      'Paid time off and holidays'
    ]
  },
  {
    id: 'bim-coordinator',
    title: 'BIM Coordinator',
    department: 'Engineering',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '3+ years',
    posted: '2024-03-15',
    deadline: '2024-04-15',
    overview: 'We are looking for a skilled BIM Coordinator to support our projects by ensuring effective coordination between different disciplines and maintaining high-quality BIM deliverables.',
    responsibilities: [
      'Coordinate BIM models across different disciplines',
      'Perform clash detection and resolution',
      'Generate coordination reports and documentation',
      'Support project teams in implementing BIM workflows',
      'Maintain model quality and standards compliance',
      'Assist in developing BIM execution plans'
    ],
    qualifications: [
      'Bachelor\'s degree in Architecture, Engineering, or related field',
      'Minimum 3 years of experience in BIM coordination',
      'Proficiency in Autodesk Revit and Navisworks',
      'Knowledge of construction processes and MEP systems',
      'Strong problem-solving and analytical skills',
      'Excellent teamwork and communication abilities'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Professional development opportunities',
      'Flexible work arrangements',
      'Annual performance bonus',
      'Paid time off and holidays'
    ]
  },
  {
    id: 'bim-modeler',
    title: 'BIM Modeler',
    department: 'Engineering',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '1+ years',
    posted: '2024-03-15',
    deadline: '2024-04-15',
    overview: 'We are seeking a detail-oriented BIM Modeler to create and maintain high-quality BIM models for our construction projects.',
    responsibilities: [
      'Create detailed 3D BIM models',
      'Update and maintain existing models',
      'Generate 2D drawings from BIM models',
      'Follow BIM standards and protocols',
      'Collaborate with project team members',
      'Participate in coordination meetings'
    ],
    qualifications: [
      'Bachelor\'s degree in Architecture, Engineering, or related field',
      'Minimum 1 year of experience in BIM modeling',
      'Proficiency in Autodesk Revit',
      'Basic understanding of construction processes',
      'Attention to detail and accuracy',
      'Good communication skills'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Professional development opportunities',
      'Flexible work arrangements',
      'Annual performance bonus',
      'Paid time off and holidays'
    ]
  },
  {
    id: 'bim-developer',
    title: 'BIM Developer',
    department: 'Engineering',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '3-6 years',
    posted: '2023-09-30',
    deadline: '2023-10-30',
    overview: 'We are looking for a skilled BIM Developer to create custom tools and solutions that enhance our BIM workflows. The ideal candidate will have strong programming skills and BIM expertise.',
    responsibilities: [
      'Develop custom BIM tools and scripts',
      'Create and maintain BIM automation solutions',
      'Integrate BIM with other software systems',
      'Optimize BIM workflows and processes',
      'Provide technical support for BIM tools',
      'Document developed solutions',
      'Collaborate with BIM teams on custom requirements',
      'Stay updated with latest BIM technologies'
    ],
    qualifications: [
      'Bachelor\'s degree in Computer Science, Engineering, or related field',
      '3+ years of experience in BIM development',
      'Proficiency in programming languages (Python, C#, etc.)',
      'Experience with BIM APIs and SDKs',
      'Strong understanding of BIM processes',
      'Knowledge of Revit, Navisworks, and other BIM software',
      'Excellent problem-solving skills'
    ],
    benefits: [
      'Competitive salary and benefits package',
      'Professional development opportunities',
      'Work with cutting-edge BIM technologies',
      'Collaborative and innovative work environment',
      'Health insurance and wellness programs',
      'Paid time off and flexible work arrangements',
      'Retirement savings plan'
    ]
  },
  {
    id: '3d-scanning-specialist',
    title: '3D Scanning Specialist',
    department: 'Technical Services',
    location: 'Nashik, India',
    type: 'Full-time',
    experience: '2-4 years',
    posted: '2023-09-05',
    deadline: '2023-10-05',
    overview: 'We are seeking a 3D Scanning Specialist to capture and process accurate 3D scan data for existing buildings and infrastructure. The ideal candidate will have experience with laser scanning equipment and processing software.',
    responsibilities: [
      'Operate 3D laser scanning equipment',
      'Process point cloud data',
      'Create accurate as-built models',
      'Perform quality control checks',
      'Document scanning procedures',
      'Coordinate with project teams'
    ],
    qualifications: [
      'Bachelor\'s degree in Engineering, Architecture, or related field',
      'Experience with laser scanning equipment',
      'Proficiency in point cloud processing software',
      'Knowledge of BIM software and workflows',
      'Strong attention to detail',
      'Valid driver\'s license'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Professional development opportunities',
      'Flexible work arrangements',
      'Annual performance bonus',
      'Paid time off and holidays'
    ]
  },
  {
    id: 'revit-specialist',
    title: 'Revit Specialist',
    department: 'Design',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '2-4 years',
    posted: '2023-09-01',
    deadline: '2023-10-01',
    overview: 'We are looking for a Revit Specialist with strong experience in architectural and engineering modeling. The successful candidate will create detailed BIM models, develop custom families, and support project teams.',
    responsibilities: [
      'Create and modify Revit models',
      'Develop custom Revit families',
      'Generate construction documentation',
      'Maintain BIM content libraries',
      'Support project teams',
      'Train team members on Revit best practices'
    ],
    qualifications: [
      'Bachelor\'s degree in Architecture, Engineering, or related field',
      'Advanced proficiency in Autodesk Revit',
      'Experience with custom family creation',
      'Knowledge of construction documentation',
      'Strong problem-solving skills',
      'Team player with good communication abilities'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Professional development opportunities',
      'Flexible work arrangements',
      'Annual performance bonus',
      'Paid time off and holidays'
    ]
  },
  {
    id: 'project-manager',
    title: 'BIM Project Manager',
    department: 'Project Management',
    location: 'Nagpur, India',
    type: 'Full-time',
    experience: '4-6 years',
    posted: '2023-08-25',
    deadline: '2023-09-25',
    overview: 'We are seeking an experienced BIM Project Manager to oversee multiple projects from initiation to completion. The ideal candidate will have a strong background in both BIM technology and project management principles.',
    responsibilities: [
      'Manage multiple BIM projects',
      'Develop project schedules and budgets',
      'Coordinate with stakeholders',
      'Monitor project progress',
      'Ensure quality standards',
      'Lead project team meetings'
    ],
    qualifications: [
      'Bachelor\'s degree in Architecture, Engineering, or related field',
      'PMP certification preferred',
      'Experience with BIM project management',
      'Strong leadership and communication skills',
      'Knowledge of construction processes',
      'Proficiency in project management software'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Professional development opportunities',
      'Flexible work arrangements',
      'Annual performance bonus',
      'Paid time off and holidays'
    ]
  }
];

const departments = ['All Departments', 'Engineering', 'Design', 'Technical Services', 'Project Management'];
const locations = ['All Locations', 'Mumbai, India', 'Nagpur, India', 'Nashik, India'];

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  
  // Filter jobs based on search and filters
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.overview.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesDepartment = 
      selectedDepartment === 'All Departments' || 
      job.department === selectedDepartment;
      
    const matchesLocation = 
      selectedLocation === 'All Locations' || 
      job.location === selectedLocation;
      
    return matchesSearch && matchesDepartment && matchesLocation;
  });
  
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
                <span>Careers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Join Our Team of BIM Innovators
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Discover exciting career opportunities where you can make an impact in the world of Building Information Modeling and digital construction.
              </p>
              
              <a 
                href="#open-positions" 
                className="px-8 py-3 bg-white text-[#20133d] font-medium rounded-full hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative -bottom-16 bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search for positions..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 md:w-[60%]">
                  <div>
                    <select 
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-select-arrow bg-no-repeat bg-[center_right_1rem]"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")' }}
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <select 
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none bg-select-arrow bg-no-repeat bg-[center_right_1rem]"
                      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")' }}
                    >
                      {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job listings */}
        <section id="open-positions" className="py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                {filteredJobs.length > 0 ? (
                  <>
                    Showing {filteredJobs.length} Open Position{filteredJobs.length !== 1 && 's'}
                  </>
                ) : (
                  'No matching positions found'
                )}
              </h2>
              
              {(searchTerm || selectedDepartment !== 'All Departments' || selectedLocation !== 'All Locations') && (
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDepartment('All Departments');
                    setSelectedLocation('All Locations');
                  }}
                  className="text-pulse-500 hover:text-pulse-600 font-medium"
                >
                  Clear Filters
                </button>
              )}
            </div>
            
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Link 
                  key={job.id}
                  href={`/careers/${job.id}`}
                  className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="mb-2">
                          <span className="inline-block px-3 py-1 bg-pulse-500/10 text-pulse-500 text-sm font-medium rounded-full">
                            {job.department}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-pulse-500 transition-colors">
                          {job.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Posted: {new Date(job.posted).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4 line-clamp-2">{job.overview}</p>
                        
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="mr-2">Apply by:</span>
                          <span className="font-medium">{new Date(job.deadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-pulse-500 group-hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              
              {filteredJobs.length === 0 && (
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <Filter className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No matching positions found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search filters or check back later for new opportunities.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedDepartment('All Departments');
                      setSelectedLocation('All Locations');
                    }}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Why join us section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Why Join MorphVision?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We're more than just a BIM company—we're a team of innovators passionate about transforming the built environment through technology and collaboration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation & Growth',
                  description: 'Work with cutting-edge BIM technologies and methodologies, with continuous learning opportunities and professional development support.',
                  icon: (
                    <svg className="w-12 h-12 text-pulse-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20 7L12 12L4 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )
                },
                {
                  title: 'Collaborative Culture',
                  description: 'Join a diverse, inclusive team that values collaboration, open communication, and mutual respect. We succeed together.',
                  icon: (
                    <svg className="w-12 h-12 text-pulse-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13C16.8604 3.35031 17.6232 3.85071 18.1676 4.55232C18.712 5.25392 19.0051 6.11683 19.0051 7.005C19.0051 7.89318 18.7112 8.75608 18.1676 9.45769C17.6232 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )
                },
                {
                  title: 'Impactful Projects',
                  description: 'Work on diverse, high-impact projects that shape the future of infrastructure and leave a lasting legacy in the built environment.',
                  icon: (
                    <svg className="w-12 h-12 text-pulse-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 21V12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 15V15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                  <div className="mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">Our Application Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We've designed a straightforward yet thorough hiring process to find the right talent and ensure a good mutual fit.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: 'Application Review',
                  description: 'Our team reviews your application, resume, and portfolio to assess your skills and experience.'
                },
                {
                  step: 2,
                  title: 'Initial Interview',
                  description: 'A conversation with our HR team to discuss your background, skills, and career aspirations.'
                },
                {
                  step: 3,
                  title: 'Technical Assessment',
                  description: 'Depending on the role, you may be asked to complete a technical assessment or showcase your portfolio.'
                },
                {
                  step: 4,
                  title: 'Team Interview',
                  description: 'Meet with potential team members and managers to discuss technical skills and cultural fit.'
                },
                {
                  step: 5,
                  title: 'Offer & Onboarding',
                  description: 'Upon selection, we\'ll present an offer and work with you on a smooth onboarding process.'
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-pulse-500 text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    {index < 4 && (
                      <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ProjectCTA />
      </main>
    </div>
  );
} 