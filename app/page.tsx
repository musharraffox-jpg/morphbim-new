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
import { projects as allProjects } from '@/app/data/projects'

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

  // Only show projects explicitly marked as featured
  const featuredProjects = allProjects.filter(p => p.featured)

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
                  <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2'>02</span>
                  <span>About Us</span>
                </div>
                <h2 className='text-3xl md:text-4xl font-display font-bold mb-6'>Committed Professionals Delivering Cutting-Edge Engineering Solutions</h2>
                <p className='text-gray-600 mb-6'>
                  Morph Vision LLP is a group of committed professionals passionate about delivering cutting-edge engineering solutions. We specialize in providing comprehensive BIM (Building Information Modeling) services to assist our clients in achieving optimized project outcomes through strategic design, modeling, and coordination.
                </p>
                <p className='text-gray-600 mb-8'>
                  With a global footprint spanning countries like Canada, USA, Qatar, Saudi Arabia, UAE, Bahrain, Benin, Sri Lanka, Singapore, Uzbekistan, and India, we are dedicated to excellence and innovation in the AEC industry.
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
            <div className='mb-16 animate-on-scroll'>
              <div className='pulse-chip inline-flex mb-6'>
                <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2'>04</span>
                <span>Industries We Serve</span>
              </div>
              <h2 className='text-3xl md:text-4xl font-display font-bold mb-6'>Specialized Solutions for Diverse Sectors</h2>
              <p className='text-gray-600 max-w-3xl'>
                Our diverse portfolio encompasses a wide range of industries. We deliver tailored BIM and engineering solutions ensuring compliance and optimized project outcomes.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Healthcare & Pharma',
                  description: 'Advanced BIM for hospitals, labs, and pharmaceutical facilities, ensuring compliance and efficiency.',
                  icon: <Hospital className='w-8 h-8 text-pulse-500' />
                },
                {
                  title: 'Hotel & Residency',
                  description: 'Comprehensive modeling and coordination for luxury hotels and residential complexes.',
                  icon: <Building2 className='w-8 h-8 text-pulse-500' /> 
                },
                {
                  title: 'Industrial',
                  description: 'Solutions for manufacturing plants, substations, and complex industrial processes.',
                  icon: <Factory className='w-8 h-8 text-pulse-500' />
                },
                {
                  title: 'Commercial',
                  description: 'BIM for airports, data centers, office buildings, and large-scale commercial developments.',
                  icon: <Building2 className='w-8 h-8 text-pulse-500' />
                },
                {
                  title: 'Scan to BIM',
                  description: 'Accurate conversion of laser scans into detailed 3D models for renovation and retrofits.',
                  icon: <Landmark className='w-8 h-8 text-pulse-500' />
                },
                {
                  title: 'Family Creation',
                  description: 'Custom parametric and non-parametric BIM families tailored to specific project needs.',
                  icon: <Sparkles className='w-8 h-8 text-pulse-500' />
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
            <div className='pulse-chip inline-flex mb-6'>
              <span className='inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2'>05</span>
              <span>Featured Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Showcasing Our Expertise</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl">From complex healthcare facilities to large-scale industrial plants, our portfolio highlights our capability to deliver excellence across diverse sectors.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group bg-white rounded-xl shadow-elegant overflow-hidden hover:shadow-elegant-hover transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-60">
                    <Image
                      src={project.image || '/placeholder.png'}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-pulse-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-pulse-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials section - using new Testimonials component */}
        <Testimonials />

        {/* FAQ Section */}
        {/* <FaqSection /> */}

        {/* Newsletter Section */}
        <Newsletter />

        {/* Project CTA section - using new ProjectCTA component */}
        <ProjectCTA />

      </main>
    </div>
  )
}
