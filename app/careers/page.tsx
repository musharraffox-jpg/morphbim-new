'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase, Search, Filter, Calendar, CheckCircle, Users, Rocket, Heart } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col pt-16">
      <main className="flex-grow bg-gray-50 pt-16 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header with Gradient Background */}
          <div className="bg-gradient-to-br from-dark-800 to-pulse-700 rounded-3xl p-8 md:p-12 shadow-xl mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 backdrop-blur-sm mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
              <span>Careers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              Build the Future with MorphVision
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-3xl">
              Explore exciting opportunities to shape the world of BIM and digital construction with a passionate and innovative team.
            </p>
          </div>

          {/* Open Positions Section - Revert to white background */}
          <section id="open-positions" className="mb-20">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Current Openings</h2>
              <div className="space-y-6">
                {jobsData.map((job) => (
                  <Link 
                    key={job.id}
                    href={`/careers/${job.id}`}
                    /* Use standard card styling */
                    className="block bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100 transition-all duration-300 group border border-gray-200 hover:border-gray-300"
                  >
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2 flex flex-wrap gap-2">
                            {/* Use standard tag styling */}
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                              {job.department}
                            </span>
                             <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                              {job.type}
                            </span>
                             <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                              {job.location}
                            </span>
                          </div>
                          
                          {/* Use standard text colors */}
                          <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-pulse-700 transition-colors">
                            {job.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{job.overview}</p>
                          
                          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1.5" />
                              <span>Posted: {new Date(job.posted).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1.5" />
                              <span>Apply by: {new Date(job.deadline).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Use standard arrow styling */}
                        <div className="flex-shrink-0 mt-4 sm:mt-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-pulse-500 group-hover:text-white text-gray-600 transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          
          {/* Why join us section - Revert to white background */}
          <section className="mb-20">
             <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Why Join MorphVision?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mb-10">
                  We're more than just a BIM company—we're a team of innovators passionate about transforming the built environment through technology and collaboration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Keep internal card styling as is */}
                {[ 
                   // ... (icon data) ...
                  {
                    title: 'Innovation & Growth',
                    description: 'Work on cutting-edge BIM projects and access ongoing professional development opportunities to enhance your skills and career trajectory.',
                    icon: Rocket
                  },
                  {
                    title: 'Collaborative Culture',
                    description: 'Join a diverse team that values your input and works together to solve complex challenges in the built environment.',
                    icon: Users
                  },
                  {
                    title: 'Work-Life Balance',
                    description: 'Enjoy flexible work arrangements, competitive benefits, and a company culture that prioritizes your wellbeing alongside project success.',
                    icon: Heart
                  },
                 ].map((item, index) => (
                   <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                      <div className="w-12 h-12 rounded-lg bg-pulse-100 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-pulse-600" />
                      </div>
                     <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                     <p className="text-gray-600 text-sm">{item.description}</p>
                   </div>
                 ))}
               </div>
             </div>
           </section>
          
          {/* Application process - Already white background */}
          <section className="mb-20">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
             {/* Keep content as is */}
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">How We Hire</h2>
               <p className="text-lg text-gray-600 max-w-3xl mb-10">
                  We've designed a straightforward recruitment process to help you showcase your skills and learn more about our company culture.
                </p>
              <div className="max-w-3xl mx-auto">
                 {/* Keep steps list as is */}
                {[
                   // ... (step data) ...
                  {
                    step: 1,
                    title: 'Application Submission',
                    description: 'Submit your resume and cover letter through our online application form.'
                  },
                  {
                    step: 2,
                    title: 'Initial Screening',
                    description: 'Our recruitment team will review your application and reach out to qualified candidates.'
                  },
                  {
                    step: 3,
                    title: 'Technical Assessment',
                    description: 'Complete a skills assessment relevant to the position you are applying for.'
                  },
                  {
                    step: 4,
                    title: 'Interview Process',
                    description: 'Meet with potential team members and managers to discuss technical skills and cultural fit.'
                  },
                  {
                    step: 5,
                    title: 'Offer & Onboarding',
                    description: 'Upon selection, we\'ll present an offer and work with you on a smooth onboarding process.'
                  }
                ].map((stepItem, index, arr) => (
                  <div key={index} className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                       <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-pulse-500 text-white flex items-center justify-center font-bold text-sm">
                            {stepItem.step}
                          </div>
                       </div>
                       {index < arr.length - 1 && (
                          <div className="w-px h-full bg-gray-200 mt-2"></div>
                        )}
                    </div>
                    <div className="pb-8 flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{stepItem.title}</h3>
                      <p className="text-gray-600 text-sm">{stepItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        
          <ProjectCTA />
        </div>
      </main>
    </div>
  );
} 