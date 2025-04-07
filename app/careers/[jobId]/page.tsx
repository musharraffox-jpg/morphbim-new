'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Briefcase, Calendar, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCTA from '@/components/ProjectCTA'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  posted: string
  deadline: string
  overview: string
  responsibilities?: string[]
  qualifications?: string[]
  benefits?: string[]
}

const jobsData: Job[] = [
  {
    id: 'senior-bim-manager',
    title: 'Senior BIM Manager',
    department: 'Engineering',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '5-8 years',
    posted: '2023-09-15',
    deadline: '2023-10-15',
    overview: 'We are seeking an experienced Senior BIM Manager to lead our Building Information Modeling (BIM) team. The ideal candidate will have extensive experience in managing BIM projects and teams, with a strong technical background in architecture, engineering, or construction.',
    responsibilities: [
      'Lead and manage a team of BIM specialists and coordinators',
      'Develop and implement BIM standards and workflows',
      'Oversee the creation and maintenance of BIM models',
      'Coordinate with project teams to ensure BIM integration',
      'Manage BIM software and technology infrastructure',
      'Provide training and support to team members',
      'Review and approve BIM deliverables',
      'Ensure compliance with industry standards and best practices'
    ],
    qualifications: [
      'Bachelor\'s degree in Architecture, Engineering, or related field',
      '5+ years of experience in BIM management',
      'Proficiency in Revit, Navisworks, and other BIM tools',
      'Strong project management skills',
      'Excellent communication and leadership abilities',
      'Experience with BIM standards and protocols',
      'Knowledge of construction processes and methodologies'
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
  }
]

export default function JobDetail({ params }: { params: { jobId: string } }) {
  const { jobId } = params
  const job = jobsData.find(j => j.id === jobId)

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-8">The job you are looking for does not exist or has been filled.</p>
            <Link 
              href="/careers" 
              className="inline-flex items-center text-pulse-500 hover:text-pulse-600 font-medium"
            >
              Back to Careers
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="bg-gradient-to-r from-[#20133d] to-[#512888] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="pulse-chip mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
                <span>Careers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-white/90 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Posted: {new Date(job.posted).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Apply by: {new Date(job.deadline).toLocaleDateString()}</span>
                </div>
              </div>
              
              <Link 
                href="#apply-now" 
                className="px-8 py-3 bg-white text-[#20133d] font-medium rounded-full hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Job Overview</h2>
                    <p className="text-gray-700">{job.overview}</p>
                  </div>
                  
                  {job.responsibilities && (
                    <div className="mb-12">
                      <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
                      <ul className="space-y-3">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-pulse-500 mt-2 mr-3"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {job.qualifications && (
                    <div className="mb-12">
                      <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
                      <ul className="space-y-3">
                        {job.qualifications.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-pulse-500 mt-2 mr-3"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-8 sticky top-24">
                    {job.benefits && (
                      <>
                        <h3 className="text-xl font-semibold mb-6">Benefits</h3>
                        <ul className="space-y-3 mb-8">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-pulse-500 mt-2 mr-3"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-xl font-semibold mb-4">Ready to Apply?</h3>
                      <p className="text-gray-600 mb-6">
                        Join our team and help shape the future of BIM technology.
                      </p>
                      
                      <Link 
                        href="/contact" 
                        className="w-full block text-center px-6 py-3 bg-pulse-500 text-white font-medium rounded-lg hover:bg-pulse-600 transition-colors"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ProjectCTA />
      </main>
      <Footer />
    </div>
  )
} 