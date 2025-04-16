'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Briefcase, MapPin, 
  ArrowRight, CheckCircle2, Send, User, Mail, Phone, 
  FileText, Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { jobs } from '@/app/data/jobs'

// Define a Job interface to match jobs.ts
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

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

  return (
    <div className="bg-white min-h-screen pt-8">
      {/* Hero Section */}
      <section className='section-container pb-2'>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-4 sm:mt-8"
        >
          <div
            className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[400px] flex flex-col relative flex-grow"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.9))`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            {/* Dark overlay with backdrop filter */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 mix-blend-multiply"
              style={{ backdropFilter: 'blur(0px) brightness(0.8)' }}
            />
            
            {/* Content Section */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.div variants={fadeInUp}>
                  <Badge
                    className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    {job.department}
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-display text-4xl md:text-6xl font-bold mb-6 text-white"
                >
                  <span className="block">{job.title}</span>
                </motion.h1>
                
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap gap-5 mb-8"
                >
                  <div className="flex items-center text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                    <MapPin className="h-4 w-4 mr-2 text-white/70" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                    <Briefcase className="h-4 w-4 mr-2 text-white/70" />
                    <span>{job.type}</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <Button 
                    onClick={() => {
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                    }} 
                    className="bg-white text-blue-900 hover:bg-gray-100 group"
                  >
                    Apply Now
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Link href="/careers">
                      View All Jobs
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Job Details (2/3 width) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white rounded-lg p-8 border border-gray-100">
                <motion.div variants={fadeInUp} className="mb-8">
                  <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
                    Job Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {job.about}
                  </p>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-display font-bold mb-4 text-gray-900">
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <span className="ml-3 text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-display font-bold mb-4 text-gray-900">
                    Requirements
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <span className="ml-3 text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl font-display font-bold mb-4 text-gray-900">
                    Benefits
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <span className="ml-3 text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Similar Jobs */}
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
                  Similar Positions
                </h2>
                
                <div className="space-y-4">
                  {jobs
                    .filter(j => j.id !== job.id && j.department === job.department)
                    .slice(0, 3)
                    .map((similarJob) => (
                      <Link 
                        key={similarJob.id} 
                        href={`/careers/${similarJob.id}`}
                        className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-blue-50 border border-gray-200 transition-colors group"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                            {similarJob.title}
                          </h3>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                            <span className="mr-3">{similarJob.location}</span>
                            <Briefcase className="h-3.5 w-3.5 mr-1 text-gray-400" />
                            <span>{similarJob.type}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  
                  {jobs.filter(j => j.id !== job.id && j.department === job.department).length === 0 && (
                    <p className="text-sm text-gray-500 italic">No similar positions available at this time.</p>
                  )}
                  
                  <Link 
                    href="/careers"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-2"
                  >
                    View all open positions
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Application Form (1/3 width) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="lg:col-span-1"
            >
              <div id="application-form" className="bg-white rounded-lg p-8 border border-gray-100 sticky top-24">
                <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
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
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+1 (123) 456-7890"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
                      <div className="relative">
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors">
                          <div className="space-y-1 text-center">
                            <div className="flex justify-center">
                              <FileText className="mx-auto h-12 w-12 text-gray-400" />
                            </div>
                            <div className="flex text-sm text-gray-600">
                              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                                <span>Upload a file</span>
                                <input 
                                  id="file-upload" 
                                  name="resume" 
                                  type="file" 
                                  className="sr-only"
                                  onChange={handleFileChange}
                                  accept=".pdf,.doc,.docx"
                                  required
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PDF, DOC, DOCX up to 10MB
                            </p>
                            {formData.resume && (
                              <p className="text-sm text-green-600 font-medium">
                                {formData.resume.name} ({Math.round(formData.resume.size / 1024)} KB)
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (Optional)</label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={4}
                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Submit Application
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">Application Submitted!</h3>
                    <p className="text-gray-600 mb-6">Thank you for your interest in joining our team. We'll review your application and get back to you soon.</p>
                    <Button 
                      onClick={() => setFormSubmitted(false)} 
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center justify-center gap-2 mx-auto"
                    >
                      Submit Another Application
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Join our talented team</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mobile apply button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden z-50">
        <Button 
          onClick={() => {
            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
          }} 
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Apply Now
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}