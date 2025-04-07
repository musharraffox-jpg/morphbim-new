'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, ArrowDown, CheckCircle2, Building2, Landmark, Hospital, Factory, Sparkles } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import MadeByHumans from '@/components/MadeByHumans'
import HumanoidSection from '@/components/HumanoidSection'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import ProjectCTA from '@/components/ProjectCTA'
import FaqSection from '@/components/FaqSection'

export default function Home() {
  const featuredProjectsRef = useRef<HTMLDivElement>(null)
  const [activeService, setActiveService] = useState(0)

  // Initialize intersection observer for animations
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))
    
    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const scrollToProjects = () => {
    featuredProjectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const services = [
    {
      title: 'BIM Modeling & Design',
      description: 'Comprehensive 3D modeling and coordination for construction projects. Our team uses the latest BIM tools to create detailed models that enhance planning, reduce errors, and streamline construction.',
      features: [
        '3D & 4D BIM Modeling',
        'Clash Detection & Resolution',
        'Construction Documentation',
        'As-Built Documentation'
      ],
      icon: <Building2 className='w-6 h-6' />
    },
    {
      title: 'Redevelopment & Scanning',
      description: 'Transform existing structures into modern, efficient facilities. Our scanning technology creates precise digital representations of physical spaces, enabling accurate redevelopment planning.',
      features: [
        '3D Laser Scanning',
        'Point Cloud Processing',
        'Facility Modernization',
        'Retrofitting Solutions'
      ],
      icon: <Landmark className='w-6 h-6' />
    },
    {
      title: 'AR/VR Solutions',
      description: 'Immersive visualization experiences that bring your projects to life before construction begins. Our AR/VR solutions provide stakeholders with an interactive understanding of the finished project.',
      features: [
        'Virtual Walkthroughs',
        'Interactive 3D Models',
        'Augmented Reality Overlays',
        'Presentation Tools'
      ],
      icon: <Sparkles className='w-6 h-6' />
    },
    {
      title: 'Turnkey Project Solutions',
      description: 'End-to-end project management from concept to completion. Our turnkey solutions handle every aspect of your project, ensuring seamless execution and quality results.',
      features: [
        'Project Planning & Design',
        'Procurement & Construction',
        'Quality Assurance',
        'Handover & Documentation'
      ],
      icon: <Factory className='w-6 h-6' />
    }
  ]

  const projects = [
    {
      id: 'hospital-complex',
      title: 'Hospital Complex',
      category: 'Healthcare',
      description: 'Comprehensive modeling and coordination for a multi-specialty hospital with advanced medical facilities and patient-centered design.',
      image: '/background-section2.png'
    },
    {
      id: 'pharma-cleanroom',
      title: 'Pharmaceutical Clean Room',
      category: 'Pharmaceutical',
      description: 'Detailed BIM and engineering solutions for a state-of-the-art pharmaceutical manufacturing facility with clean room environments.',
      image: '/background-section1.png'
    },
    {
      id: 'manufacturing-plant',
      title: 'Industrial Manufacturing Plant',
      category: 'Industrial',
      description: 'Complete BIM implementation for a large-scale manufacturing facility, including production lines, utilities, and warehouse spaces.',
      image: '/background-section3.png'
    }
  ]

  return (
    <div className='min-h-screen'>
      <Navbar />
      <main>
        <Hero />
        
        {/* Key metrics section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
              {[
                { value: '190+', label: 'Projects Completed' },
                { value: '40+', label: 'Team Members' },
                { value: '3+', label: 'Years of Excellence' },
                { value: '3', label: 'Office Locations' }
              ].map((stat, index) => (
                <div key={index} className='animate-on-scroll' style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className='text-4xl md:text-5xl font-bold text-pulse-500 mb-2'>{stat.value}</div>
                  <div className='text-gray-600 font-medium'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About section */}
        <section className='py-20 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='animate-on-scroll'>
                <div className='pulse-chip mb-6'>
                  <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2'>01</span>
                  <span>About Us</span>
                </div>
                <h2 className='text-3xl md:text-4xl font-display font-bold mb-6'>India\'s Leading BIM & Design Innovation Specialists</h2>
                <p className='text-gray-600 mb-6'>
                  Founded in 2020, MorphVision LLP has rapidly grown into a trusted name in BIM, Detailed Designing, Scanning, Redevelopment, and Turnkey Project Solutions. Our 40+ skilled professionals have completed over 190 successful projects across various industries.
                </p>
                <p className='text-gray-600 mb-8'>
                  Based in India with offices in Nagpur, Nashik, and Mumbai, we\'re committed to delivering cutting-edge solutions that combine innovation, technology, and a client-centric approach to transform industries.
                </p>
                <Link 
                  href='/about' 
                  className='inline-flex items-center text-pulse-500 font-medium group'
                >
                  Learn more about our journey
                  <ArrowRight className='ml-2 w-5 h-5 transition-transform group-hover:translate-x-1' />
                </Link>
              </div>
              <div className='relative h-[400px] animate-on-scroll'>
                <Image
                  src='/og.jpg'
                  alt='MorphVision Team'
                  fill
                  className='object-cover rounded-2xl shadow-elegant'
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section - Using the new HumanoidSection */}
        <HumanoidSection />
        
        {/* Industries section */}
        <section className='py-20 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16 animate-on-scroll'>
              <div className='pulse-chip inline-flex mb-6'>
                <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2'>03</span>
                <span>Industries We Serve</span>
              </div>
              <h2 className='text-3xl md:text-4xl font-display font-bold mb-6'>Specialized Solutions for Diverse Sectors</h2>
              <p className='text-gray-600 max-w-3xl mx-auto'>
                We deliver tailored BIM and engineering solutions for a wide range of industries, ensuring compliance with specific requirements and standards.
              </p>
            </div>
            
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Pharmaceutical',
                  description: 'Clean room design, manufacturing facilities, and compliance with pharmaceutical regulations.',
                  icon: <Hospital className='w-8 h-8 text-pulse-500' />
                },
                {
                  title: 'Industrial & Manufacturing',
                  description: 'Factory layouts, production lines, utility systems, and warehouse facilities.',
                  icon: <Factory className='w-8 h-8 text-pulse-500' />
                },
                {
                  title: 'Commercial & Residential',
                  description: 'Office buildings, shopping complexes, residential developments, and mixed-use projects.',
                  icon: <Building2 className='w-8 h-8 text-pulse-500' />
                },
                {
                  title: 'Healthcare',
                  description: 'Hospitals, clinics, laboratories, and specialized medical facilities.',
                  icon: <Hospital className='w-8 h-8 text-pulse-500' />
                },
                {
                  title: 'Data Centers & Tech',
                  description: 'Data center facilities, server rooms, and technology infrastructure.',
                  icon: <Sparkles className='w-8 h-8 text-pulse-500' />
                },
                {
                  title: 'Infrastructure',
                  description: 'Urban development, transportation facilities, and civic structures.',
                  icon: <Landmark className='w-8 h-8 text-pulse-500' />
                }
              ].map((industry, index) => (
                <div 
                  key={index} 
                  className='bg-white rounded-xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 p-6 animate-on-scroll'
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='mb-4'>{industry.icon}</div>
                  <h3 className='text-xl font-semibold mb-3'>{industry.title}</h3>
                  <p className='text-gray-600'>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Projects Section */}
        <section id="projects" className="py-24 bg-gray-50">
          <div className="container px-6 mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our BIM solutions have delivered measurable results for clients across diverse industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  id: "hospital-complex",
                  title: "Hospital Complex",
                  description: "State-of-the-art healthcare facility with integrated BIM systems for optimal patient care.",
                  category: "Healthcare"
                },
                {
                  id: "pharma-cleanroom",
                  title: "Pharmaceutical Clean Room",
                  description: "Precision-engineered clean room designed to meet strict pharmaceutical manufacturing standards.",
                  category: "Pharmaceutical"
                },
                {
                  id: "manufacturing-plant",
                  title: "Industrial Manufacturing Plant",
                  description: "Advanced manufacturing facility with optimized production flows and integrated systems.",
                  category: "Industrial"
                }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative h-60">
                    <Image 
                      src={`/background-section${index + 1}.png`} 
                      alt={project.title} 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm mb-2 inline-block">{project.category}</span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <a href={`/projects/${project.id}`} className="text-primary font-medium inline-flex items-center">
                      View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials section - using new Testimonials component */}
        <Testimonials />
        
        {/* FAQ Section */}
        <FaqSection />
        
        {/* Newsletter Section */}
        <Newsletter />
        
        {/* Project CTA section - using new ProjectCTA component */}
        <ProjectCTA />
        
        <MadeByHumans />
      </main>
      <Footer />
    </div>
  )
}
