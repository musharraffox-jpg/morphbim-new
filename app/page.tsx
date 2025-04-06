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
      title: 'Pharmaceutical Clean Room',
      category: 'Pharmaceutical',
      description: 'Detailed BIM and engineering solutions for a state-of-the-art pharmaceutical manufacturing facility with clean room environments.',
      image: '/background-section1.png'
    },
    {
      title: 'Hospital Complex',
      category: 'Healthcare',
      description: 'Comprehensive modeling and coordination for a multi-specialty hospital with advanced medical facilities and patient-centered design.',
      image: '/background-section2.png'
    },
    {
      title: 'Industrial Manufacturing Plant',
      category: 'Industrial',
      description: 'Complete BIM implementation for a large-scale manufacturing facility, including production lines, utilities, and warehouse spaces.',
      image: '/background-section3.png'
    }
  ]
  
  const testimonials = [
    {
      quote: 'MorphVision\'s BIM expertise transformed our project delivery process. Their attention to detail and collaborative approach helped us avoid costly errors and complete on schedule.',
      author: 'Rajesh Patel',
      position: 'Project Director, AchieveConstruct Ltd.',
      image: '/background-section1.png'
    },
    {
      quote: 'The team at MorphVision delivered exceptional results for our pharmaceutical facility. Their understanding of clean room requirements and regulatory standards was invaluable.',
      author: 'Dr. Priya Sharma',
      position: 'Facility Manager, MediPharm Industries',
      image: '/background-section2.png'
    },
    {
      quote: 'Working with MorphVision on our hospital redevelopment was a seamless experience. Their VR presentations helped our stakeholders understand the design intent clearly.',
      author: 'Vikram Singh',
      position: 'CEO, Healthcare Development Group',
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
        
        {/* Services section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16 animate-on-scroll'>
              <div className='pulse-chip inline-flex mb-6'>
                <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2'>02</span>
                <span>Our Services</span>
              </div>
              <h2 className='text-3xl md:text-4xl font-display font-bold mb-6'>Comprehensive Solutions for Modern Industries</h2>
              <p className='text-gray-600 max-w-3xl mx-auto'>
                From detailed BIM modeling to turnkey project management, we provide end-to-end solutions that transform your vision into reality.
              </p>
            </div>
            
            <div className='grid md:grid-cols-3 gap-12'>
              <div className='col-span-1 animate-on-scroll'>
                <div className='sticky top-20'>
                  <h3 className='text-2xl font-semibold mb-6'>Our Expertise</h3>
                  <div className='space-y-4'>
                    {services.map((service, index) => (
                      <button
                        key={index}
                        className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center ${
                          activeService === index 
                            ? 'bg-pulse-500 text-white shadow-elegant' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                        onClick={() => setActiveService(index)}
                      >
                        <div className={`mr-3 ${activeService === index ? 'text-white' : 'text-pulse-500'}`}>
                          {service.icon}
                        </div>
                        <span className='font-medium'>{service.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className='col-span-2 animate-on-scroll'>
                <div className='bg-gray-50 rounded-2xl p-8 h-full'>
                  <h3 className='text-2xl font-semibold mb-4'>{services[activeService].title}</h3>
                  <p className='text-gray-600 mb-8'>{services[activeService].description}</p>
                  
                  <h4 className='text-lg font-medium mb-4'>Key Features</h4>
                  <ul className='space-y-3 mb-8'>
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className='flex items-start'>
                        <CheckCircle2 className='w-5 h-5 text-pulse-500 mr-3 flex-shrink-0 mt-0.5' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href='/contact'
                    className='inline-flex items-center justify-center px-6 py-3 bg-pulse-500 text-white font-medium rounded-full hover:bg-pulse-600 transition-colors duration-300'
                  >
                    Discuss Your Project
                    <ArrowRight className='ml-2 w-5 h-5' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
        
        {/* Featured projects section */}
        <section ref={featuredProjectsRef} className='py-20 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16 animate-on-scroll'>
              <div className='pulse-chip inline-flex mb-6'>
                <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2'>04</span>
                <span>Featured Projects</span>
              </div>
              <h2 className='text-3xl md:text-4xl font-display font-bold mb-6'>Showcasing Our Excellence</h2>
              <p className='text-gray-600 max-w-3xl mx-auto'>
                Explore some of our most impactful projects that demonstrate our expertise, innovation, and commitment to quality.
              </p>
            </div>
            
            <div className='grid md:grid-cols-3 gap-8'>
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className='group rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-300 animate-on-scroll'
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='h-64 relative'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end'>
                      <div className='p-6'>
                        <div className='text-sm font-medium text-pulse-50 mb-2'>{project.category}</div>
                        <h3 className='text-xl font-semibold text-white'>{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className='p-6 bg-white'>
                    <p className='text-gray-600 mb-4'>{project.description}</p>
                    <a href='#' className='inline-flex items-center text-pulse-500 font-medium'>
                      View Project Details
                      <ArrowRight className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1' />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className='text-center mt-12 animate-on-scroll'>
              <Link 
                href='/projects' 
                className='inline-flex items-center justify-center px-8 py-3 bg-pulse-500 text-white font-medium rounded-full hover:bg-pulse-600 transition-colors duration-300'
              >
                Explore All Projects
                <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className='py-20 bg-gray-50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16 animate-on-scroll'>
              <div className='pulse-chip inline-flex mb-6'>
                <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2'>05</span>
                <span>Client Testimonials</span>
              </div>
              <h2 className='text-3xl md:text-4xl font-display font-bold mb-6'>What Our Clients Say</h2>
              <p className='text-gray-600 max-w-3xl mx-auto'>
                Don't just take our word for it—hear from the clients who have experienced the MorphVision difference.
              </p>
            </div>
            
            <div className='grid md:grid-cols-3 gap-8'>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className='bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 animate-on-scroll'
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='mb-6'>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className='text-yellow-400 text-xl'>★</span>
                    ))}
                  </div>
                  <p className='text-gray-600 italic mb-6'>"{testimonial.quote}"</p>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 rounded-full overflow-hidden mr-4 relative'>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <div className='font-semibold'>{testimonial.author}</div>
                      <div className='text-sm text-gray-500'>{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='bg-pulse-500 rounded-2xl p-12 text-center text-white max-w-5xl mx-auto animate-on-scroll shadow-elegant'>
              <h2 className='text-3xl md:text-4xl font-display font-bold mb-6'>Ready to Transform Your Vision?</h2>
              <p className='text-xl opacity-90 mb-8 max-w-2xl mx-auto'>
                Partner with MorphVision to bring your projects to life with innovation, precision, and expertise.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link 
                  href='/contact' 
                  className='inline-flex items-center justify-center px-8 py-3 bg-white text-pulse-500 font-medium rounded-full hover:bg-gray-100 transition-colors duration-300'
                >
                  Contact Us Today
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Link>
                <button 
                  onClick={scrollToProjects}
                  className='inline-flex items-center justify-center px-8 py-3 bg-pulse-600 text-white font-medium rounded-full hover:bg-pulse-700 transition-colors duration-300'
                >
                  View Our Work
                  <ArrowDown className='ml-2 w-5 h-5' />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <MadeByHumans />
      </main>
      <Footer />
    </div>
  )
}
