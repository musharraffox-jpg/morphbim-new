'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Briefcase, CheckCircle2, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { jobs } from '@/app/data/jobs'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
}

export default function CareersPage() {
  // Group jobs by department
  const departments: Record<string, typeof jobs> = {}
  jobs.forEach(job => {
    if (!departments[job.department]) {
      departments[job.department] = []
    }
    departments[job.department].push(job)
  })

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
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="text-center"
              >
                <motion.div variants={fadeInUp}>
                  <Badge
                    className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    Join Our Team
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-display text-4xl md:text-6xl font-bold mb-6 text-white"
                >
                  <span className="block">Build Your Career</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                    With MorphBIM
                  </span>
                </motion.h1>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto"
                >
                  Be part of a talented team that's reshaping the future of architecture and construction through innovative BIM solutions.
                </motion.p>
                
                <motion.div 
                  variants={fadeInUp}
                  className="flex justify-center gap-4"
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-blue-900 hover:bg-gray-100 group"
                  >
                    <a href="#open-positions">
                      View Open Positions
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </section>

      {/* About Our Company */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
                  Why Join MorphBIM?
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At MorphBIM, we're not just building software; we're revolutionizing how buildings are designed, constructed, and maintained. Our team consists of passionate professionals who are dedicated to pushing the boundaries of what's possible in the AEC industry.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We believe in creating an environment where innovation thrives, ideas are valued, and every team member has the opportunity to make a meaningful impact on our products and the industry as a whole.
                </p>
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="bg-white rounded-lg border border-gray-100 p-8">
              <h3 className="text-xl font-display font-bold mb-6 text-gray-900">
                Our Values
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Innovation</h4>
                    <p className="text-gray-700">We embrace new ideas and technologies to solve complex challenges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Collaboration</h4>
                    <p className="text-gray-700">We believe great results come from teamwork and diverse perspectives.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Excellence</h4>
                    <p className="text-gray-700">We strive for the highest quality in everything we do.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Inclusivity</h4>
                    <p className="text-gray-700">We create an environment where everyone feels valued and heard.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Comprehensive Benefits Package
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We offer a competitive benefits package designed to support your personal and professional growth.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Health & Wellness",
                items: ["Comprehensive health insurance", "Dental and vision coverage", "Mental health resources", "Wellness programs"]
              },
              {
                title: "Professional Growth",
                items: ["Continuous learning opportunities", "Conference attendance", "Professional certifications", "Mentorship programs"]
              },
              {
                title: "Work-Life Balance",
                items: ["Flexible work hours", "Remote work options", "Generous PTO", "Paid parental leave"]
              },
              {
                title: "Financial Benefits",
                items: ["Competitive salary", "Performance bonuses", "401(k) matching", "Stock options"]
              },
              {
                title: "Team Environment",
                items: ["Collaborative workspace", "Regular team events", "Recognition programs", "Inclusive culture"]
              },
              {
                title: "Additional Perks",
                items: ["Education reimbursement", "Equipment allowance", "Transportation benefits", "Snacks and refreshments"]
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 border border-gray-100 rounded-lg p-6"
              >
                <h3 className="text-xl font-display font-bold mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span className="ml-2 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Our Hiring Process */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              How We Hire
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We've designed a straightforward recruitment process to help you showcase your skills and learn more about our company culture.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: "1",
                title: "Application Review",
                description: "Our team reviews your application to assess your qualifications and experience."
              },
              {
                step: "2",
                title: "Initial Interview",
                description: "A conversation to get to know you better and discuss your background and interest in the role."
              },
              {
                step: "3",
                title: "Technical Assessment",
                description: "Depending on the role, you may be asked to complete a skills assessment or technical interview."
              },
              {
                step: "4",
                title: "Final Interview & Offer",
                description: "Meet with the team and leadership. If there's a good fit, we'll extend an offer."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white border border-gray-100 rounded-lg p-6 relative"
              >
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-gray-900 mt-6">
                  {step.title}
                </h3>
                <p className="text-gray-700">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Open Positions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Explore our current job openings and find the perfect role for your skills and career goals.
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search positions..."
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="space-y-10"
          >
            {Object.entries(departments).map(([department, departmentJobs]) => (
              <div key={department}>
                <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
                  {department}
                </h3>
                <div className="space-y-4">
                  {departmentJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      variants={fadeInUp}
                      className="bg-gray-50 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors group"
                    >
                      <Link 
                        href={`/careers/${job.id}`} 
                        className="block p-6"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="mb-4 md:mb-0">
                            <h4 className="text-xl font-display font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                              {job.title}
                            </h4>
                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1 text-gray-500" />
                                <span>{job.type}</span>
                              </div>
                            </div>
                          </div>
                          <Button 
                            variant="outline"
                            className="text-blue-600 border-blue-600 hover:bg-blue-50 group-hover:bg-blue-50"
                          >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              <a href="mailto:careers@morphbim.com">
                Send Us Your Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}