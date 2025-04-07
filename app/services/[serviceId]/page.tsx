'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectCTA from '@/components/ProjectCTA'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
  features: string[]
  benefits: string[]
  process: {
    title: string
    description: string
    steps: string[]
  }
  tools: {
    title: string
    description: string
    list: string[]
  }
  caseStudies: {
    title: string
    description: string
    projects: {
      id: string
      title: string
      description: string
      image: string
    }[]
  }
  faq: {
    title: string
    description: string
    questions: {
      question: string
      answer: string
    }[]
  }
}

const servicesData: Service[] = [
  {
    id: 'bim-modeling-coordination',
    title: 'BIM Modeling & Coordination',
    description: 'Our comprehensive BIM modeling and coordination services help you create accurate, detailed 3D models that facilitate better decision-making and collaboration throughout your project lifecycle.',
    icon: '/images/services/bim-modeling.svg',
    image: '/images/services/bim-modeling-bg.jpg',
    features: [
      '3D modeling of architectural, structural, and MEP systems',
      'Clash detection and resolution',
      '4D and 5D BIM integration',
      'As-built modeling and documentation',
      'BIM standards development and implementation',
      'Model quality assurance and validation'
    ],
    benefits: [
      'Improved project coordination and collaboration',
      'Reduced rework and construction delays',
      'Better cost estimation and control',
      'Enhanced visualization and communication',
      'Streamlined project delivery',
      'Increased efficiency and productivity'
    ],
    process: {
      title: 'Our BIM Process',
      description: 'We follow a systematic approach to ensure the highest quality of BIM deliverables.',
      steps: [
        'Initial consultation and requirements gathering',
        'BIM execution plan development',
        'Model creation and development',
        'Coordination and clash detection',
        'Review and quality assurance',
        'Documentation and delivery'
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      description: 'We use industry-leading software and tools to deliver exceptional BIM services.',
      list: [
        'Autodesk Revit',
        'Navisworks',
        'BIM 360',
        'Dynamo',
        'Tekla Structures',
        'Solibri Model Checker'
      ]
    },
    caseStudies: {
      title: 'Case Studies',
      description: 'Explore how our BIM services have helped clients achieve their project goals.',
      projects: [
        {
          id: 'hospital-complex-project',
          title: 'Hospital Complex',
          description: 'BIM modeling and coordination for a 500-bed hospital complex.',
          image: '/images/projects/hospital-complex.jpg'
        },
        {
          id: 'pharmaceutical-clean-room-project',
          title: 'Pharmaceutical Clean Room',
          description: 'Detailed MEP modeling for a pharmaceutical manufacturing facility.',
          image: '/images/projects/pharmaceutical-clean-room.jpg'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about our BIM services.',
      questions: [
        {
          question: 'What is BIM and why is it important?',
          answer: 'Building Information Modeling (BIM) is a digital representation of physical and functional characteristics of a facility. It serves as a shared knowledge resource for information about a facility, forming a reliable basis for decisions during its lifecycle. BIM is important because it enables better coordination, reduces errors, improves efficiency, and facilitates better decision-making throughout the project lifecycle.'
        },
        {
          question: 'How long does it take to create a BIM model?',
          answer: 'The time required to create a BIM model depends on various factors such as the size and complexity of the project, the level of detail required, and the availability of information. A simple model might take a few days, while a complex project could take several weeks or months.'
        },
        {
          question: 'What software do you use for BIM modeling?',
          answer: 'We use industry-leading software including Autodesk Revit, Navisworks, BIM 360, and other specialized tools depending on the project requirements. Our team is proficient in multiple BIM platforms and can adapt to your preferred software.'
        }
      ]
    }
  }
]

export default function ServiceDetail({ params }: { params: { serviceId: string } }) {
  const service = servicesData.find(s => s.id === params.serviceId)

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
            <Link
              href="/services"
              className="inline-flex items-center text-pulse-500 hover:text-pulse-600"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Services
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
                <span>Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                {service.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                {service.description}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-pulse-500/10 flex items-center justify-center mr-4 mt-1">
                          <Check className="w-4 h-4 text-pulse-500" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4">{service.process.title}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  {service.process.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.process.steps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-pulse-500/10 flex items-center justify-center mb-4">
                      <span className="text-pulse-500 font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4">{service.tools.title}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  {service.tools.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {service.tools.list.map((tool, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-gray-600">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4">{service.caseStudies.title}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  {service.caseStudies.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.caseStudies.projects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group bg-white rounded-xl overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-pulse-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4">{service.faq.title}</h2>
                <p className="text-gray-600">
                  {service.faq.description}
                </p>
              </div>
              
              <div className="space-y-6">
                {service.faq.questions.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
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