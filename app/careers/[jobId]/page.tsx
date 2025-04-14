'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Home, ChevronRight, Briefcase, Building, MapPin, Clock, ArrowRight, CheckCircle2, Calendar, Send, User, Mail, Phone, ChevronDown, Award, Heart, DollarSign, Globe, Users, ChevronUp } from 'lucide-react'
import { LayoutWrapper, SectionWrapper } from '@/components/LayoutWrapper'
import { jobs } from '@/app/data/jobs'

// Define a Job interface to fix TypeScript errors
interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export default function JobPage({ params }: { params: Promise<{ jobId: string }> }) {
  // Unwrap params with React.use()
  const unwrappedParams = React.use(params)
  const job = jobs.find(j => j.id === unwrappedParams.jobId) as Job
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>('applicationForm')
  
  if (!job) {
    notFound()
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    setFormSubmitted(true)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null,
    })
  }

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with premium styling */}
      <div className="relative w-full bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/background-section2.png"
            alt={job.title}
            fill
            sizes="100vw"
            className="object-cover opacity-25 scale-105"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/80 to-purple-900/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(30,30,50,0.8)_0%,rgba(0,0,0,0.5)_70%)]" />
          <div className="absolute inset-0 bg-[url('/city.png')] opacity-5 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Breadcrumbs with improved spacing */}
          <nav className="flex items-center text-sm mb-6 text-gray-400">
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <Home size={14} className="mr-1" />
              <span>Home</span>
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-500" />
            <Link href="/careers" className="hover:text-white transition-colors">
              <span>Careers</span>
            </Link>
            <ChevronRight size={14} className="mx-2 text-gray-500" />
            <span className="text-white font-medium truncate">{job.title}</span>
          </nav>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white mb-4">
              {job.department}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {job.title}
            </h1>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-10">
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Department</p>
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 text-gray-300" />
                  <span className="text-white font-medium">{job.department}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Location</p>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-300" />
                  <span className="text-white font-medium">{job.location}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-sm">Employment Type</p>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-gray-300" />
                  <span className="text-white font-medium">{job.type}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="#apply-now"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pulse-500 hover:bg-pulse-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pulse-500"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link 
                href="/careers" 
                className="ml-4 inline-flex items-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-200 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pulse-500"
              >
                View All Positions
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Apply floating button (mobile only) */}
      <div className="md:hidden fixed bottom-0 right-0 left-0 z-30 bg-white border-t border-gray-200 p-4 shadow-lg">
        <a 
          href="#apply-now"
          className="block w-full text-center bg-pulse-500 hover:bg-pulse-600 text-white py-3 px-6 rounded-md font-medium shadow-sm"
        >
          Quick Apply
        </a>
      </div>

      {/* Job content section with mobile-first approach */}
      <div className="mt-8 mb-24 md:mb-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex-1 space-y-8">
              {/* Overview Section */}
              <SectionWrapper className="bg-white p-6 rounded-lg shadow-sm border border-gray-100" id="overview">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  Job Overview
                </h2>
                <p className="text-gray-600">{job.about}</p>
              </SectionWrapper>

              {/* Responsibilities Section */}
              <SectionWrapper className="bg-white p-6 rounded-lg shadow-sm border border-gray-100" id="responsibilities">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionWrapper>

              {/* Requirements Section */}
              <SectionWrapper className="bg-white p-6 rounded-lg shadow-sm border border-gray-100" id="requirements">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionWrapper>

              {/* Benefits Section */}
              <SectionWrapper className="bg-white p-6 rounded-lg shadow-sm border border-gray-100" id="benefits">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-blue-600" />
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionWrapper>

              {/* Application Section - Desktop */}
              <div className="hidden lg:block">
                <SectionWrapper className="bg-white p-6 rounded-lg shadow-sm border border-gray-100" id="desktop-application">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Send className="h-5 w-5 text-blue-600" />
                    Apply for this position
                  </h2>
                  {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="johndoe@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="+1 (123) 456-7890"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          onChange={handleFileChange}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          accept=".pdf,.doc,.docx"
                          required
                        />
                        <p className="mt-1 text-xs text-gray-500">PDF, DOC or DOCX (max 5MB)</p>
                      </div>
                      <div>
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (Optional)</label>
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows={4}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell us why you're a good fit for this position..."
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full flex justify-center items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 gap-2"
                      >
                        Submit Application
                        <Send className="h-4 w-4" />
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Application Submitted!</h3>
                      <p className="text-gray-600 mb-4">Thank you for your interest in joining our team. We'll review your application and get back to you soon.</p>
                      <button 
                        onClick={() => setFormSubmitted(false)} 
                        className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-300 gap-2"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  )}
                </SectionWrapper>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              {/* Apply Button - Desktop */}
              <div className="hidden lg:block">
                <SectionWrapper className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-6" id="quick-apply">
                  <h2 className="text-xl font-semibold mb-4">Quick Apply</h2>
                  <button 
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="w-full flex justify-center items-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 gap-2"
                  >
                    Apply Now
                    <Send className="h-4 w-4" />
                  </button>
                </SectionWrapper>
              </div>

              {/* Job Details */}
              <SectionWrapper className="bg-white p-6 rounded-lg shadow-sm border border-gray-100" id="job-details">
                <h2 className="text-xl font-semibold mb-4">Job Details</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Building className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500">Department</div>
                      <div className="text-gray-800">{job.department}</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="text-gray-800">{job.location}</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500">Job Type</div>
                      <div className="text-gray-800">{job.type}</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Calendar className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-500">Posted On</div>
                      <div className="text-gray-800">May 15, 2023</div>
                    </div>
                  </li>
                </ul>
              </SectionWrapper>

              {/* Company Info */}
              <SectionWrapper className="bg-white p-6 rounded-lg shadow-sm border border-gray-100" id="company-info">
                <h2 className="text-xl font-semibold mb-4">About Us</h2>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">MorphBIM</h3>
                    <p className="text-sm text-gray-500">Building Information Modeling</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  We're a forward-thinking BIM consulting firm specializing in innovative solutions for AEC professionals.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-2 items-center text-sm">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a href="#" className="text-blue-600 hover:underline">morphbim.com</a>
                  </div>
                  <div className="flex gap-2 items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">New York, NY</span>
                  </div>
                  <div className="flex gap-2 items-center text-sm">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">50-100 employees</span>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>

          {/* Application Section - Mobile */}
          <div className="block lg:hidden mt-8" id="application-form">
            <SectionWrapper className="bg-white p-6 rounded-lg shadow-sm border border-gray-100" id="apply-now">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Send className="h-5 w-5 text-blue-600" />
                Apply for this position
              </h2>
                
              {/* Mobile accordion toggle */}
              <button 
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-300 mb-4"
                onClick={() => toggleSection('applicationForm')}
              >
                <span className="font-medium">Toggle Application Form</span>
                {activeSection === 'applicationForm' ? 
                  <ChevronUp className="h-5 w-5" /> : 
                  <ChevronDown className="h-5 w-5" />
                }
              </button>
                
              {activeSection === 'applicationForm' && (
                !formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Form fields - same as desktop version */}
                    <div>
                      <label htmlFor="mobile-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="mobile-name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    {/* ... other form fields ... */}
                    <button 
                      type="submit" 
                      className="w-full flex justify-center items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 gap-2"
                    >
                      Submit Application
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Application Submitted!</h3>
                    <p className="text-gray-600 mb-4">Thank you for your interest in joining our team. We'll review your application and get back to you soon.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)} 
                      className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-300 gap-2"
                    >
                      Submit Another Application
                    </button>
                  </div>
                )
              )}
            </SectionWrapper>
          </div>
        </div>
      </div>
      
      {/* Quick Apply button for mobile users */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden shadow-md">
        <button 
          onClick={() => {
            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
            setActiveSection('applicationForm')
          }} 
          className="w-full flex justify-center items-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 gap-2"
        >
          Apply Now
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
} 