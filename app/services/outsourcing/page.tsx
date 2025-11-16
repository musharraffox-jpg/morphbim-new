'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, CheckCircle, Clock, Users2, Target, ShieldCheck,
  Building2, Layers3, Wrench, Globe, TrendingUp, Award,
  FileText, Scan, Calendar, DollarSign,
  Star, Briefcase, Headphones
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.2 } }
}

export default function OutsourcingPage() {

  const services = [
    {
      icon: Building2,
      title: 'Architectural BIM Outsourcing',
      description: 'Development of LOD-specific architectural BIM models, detailed drawings, and coordinated documentation.',
      features: ['LOD 100-500 Models', 'Construction Documents', 'Coordination Drawings', 'As-Built Documentation']
    },
    {
      icon: Layers3,
      title: 'Structural BIM Outsourcing',
      description: 'Structural modeling, rebar detailing, clash-free drawings, and shop-drawing support.',
      features: ['3D Structural Models', 'Rebar Detailing', 'Shop Drawings', 'Clash-Free Coordination']
    },
    {
      icon: Wrench,
      title: 'MEPF BIM Outsourcing',
      description: 'HVAC, Electrical, Plumbing, and Firefighting modeling with clash detection and coordination reports.',
      features: ['MEP System Modeling', 'Clash Detection', 'Coordination Reports', 'Equipment Scheduling']
    },
    {
      icon: Scan,
      title: 'Scan-to-BIM Outsourcing',
      description: 'Converting point cloud data into high-accuracy BIM models for architectural, structural, and MEP requirements.',
      features: ['Point Cloud Processing', 'As-Built Modeling', 'Deviation Analysis', 'Multi-Discipline Models']
    },
    {
      icon: Calendar,
      title: '4D/5D BIM Support',
      description: 'Construction sequencing, scheduling, quantity take-offs, and cost integration.',
      features: ['4D Scheduling', '5D Cost Integration', 'Quantity Take-offs', 'Progress Visualization']
    },
    {
      icon: FileText,
      title: 'BIM Documentation & Drafting',
      description: 'CAD to BIM conversion, sheet preparation, BOQs, and tender documentation.',
      features: ['CAD to BIM Conversion', 'Sheet Preparation', 'BOQ Generation', 'Tender Documentation']
    }
  ]

  const industries = [
    { name: 'Healthcare & Pharma', icon: Building2, color: 'blue' },
    { name: 'Industrial', icon: Building2, color: 'purple' },
    { name: 'Commercial & Residential', icon: Building2, color: 'green' },
    { name: 'Hospitality', icon: Building2, color: 'amber' },
    { name: 'Infrastructure', icon: Building2, color: 'indigo' }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Understanding Project Scope',
      description: 'We conduct comprehensive discovery sessions to understand your project requirements, standards, and delivery expectations.'
    },
    {
      step: '02',
      title: 'Resource Allocation',
      description: 'Our project managers assign specialized team members based on project complexity, timeline, and technical requirements.'
    },
    {
      step: '03',
      title: 'Modeling and Coordination',
      description: 'Expert BIM modelers develop accurate models while maintaining continuous coordination with your team throughout the process.'
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'Rigorous multi-level quality assurance processes ensure model accuracy, compliance, and adherence to your standards.'
    },
    {
      step: '05',
      title: 'Delivery and Ongoing Support',
      description: 'Timely delivery of deliverables with comprehensive documentation, followed by ongoing support and revisions as needed.'
    }
  ]

  const benefits = [
    { icon: TrendingUp, title: 'Cost-Effective', description: 'Reduce operational costs by up to 40% without compromising quality' },
    { icon: Clock, title: 'Faster Time-to-Market', description: 'Accelerate project delivery with 24/7 global delivery capability' },
    { icon: Users2, title: 'Scalable Resources', description: 'Scale your team up or down based on project demands' },
    { icon: ShieldCheck, title: 'Quality Assurance', description: 'Multi-tier QC processes ensuring 99%+ accuracy rates' },
    { icon: Globe, title: 'Global Reach', description: 'Seamless collaboration across time zones and geographies' },
    { icon: Target, title: 'Flexible Engagement', description: 'Choose from project-based, hourly, or dedicated team models' }
  ]

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
            className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 md:p-12 min-h-[400px] sm:min-h-[500px] flex flex-col relative"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl"
            >
              <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                BIM Outsourcing Services
              </Badge>
              
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">
                <span className="block">Scale Without Limits.</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  Deliver Without Compromise.
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                At MorphVision LLP, we support global AEC firms by providing end-to-end BIM Outsourcing Services 
                with accuracy, reliability, and timely delivery. Our team works as an extension of your in-house 
                BIM department, helping you scale quickly without increasing overhead costs.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="#services"
                className="flex items-center justify-center group px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all shadow-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center group px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all"
              >
                Request a Proposal
              </Link>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">99%+</div>
                  <div className="text-sm text-white/80">Quality Score</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">40%</div>
                  <div className="text-sm text-white/80">Cost Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-white/80">Global Delivery</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-white/80">Projects Delivered</div>
                </div>
              </div>
            </motion.div>

            <div className="hidden sm:block w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </motion.section>
      </section>

      {/* Strategic Value Proposition */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Strategic Advantage
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Why Outsource to MorphVision LLP?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with operational excellence to deliver measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Comprehensive Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end BIM outsourcing solutions across all disciplines and project phases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Industry Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team specializes in delivering BIM solutions across diverse sectors with deep 
              understanding of industry-specific requirements and regulatory standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                purple: 'bg-purple-100 text-purple-600',
                green: 'bg-green-100 text-green-600',
                amber: 'bg-amber-100 text-amber-600',
                indigo: 'bg-indigo-100 text-indigo-600'
              }
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className={`w-14 h-14 rounded-full ${colorClasses[industry.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-gray-900">{industry.name}</h3>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How We Work - Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven, systematic approach ensuring seamless integration with your workflows and consistent delivery excellence.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 lg:w-1/2">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-12 h-12 rounded-full bg-white border-4 border-blue-600 z-10 flex-shrink-0" />
                  
                  <div className="flex-1 lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Competitive Advantages
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Why Choose MorphVision LLP?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Users2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Experienced Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specializing in hospitals, pharma, industrial, and commercial projects with proven track record 
                  across diverse project types and scales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Skilled Professionals</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert proficiency in Autodesk Revit, Navisworks, Recap, AutoCAD, and BIM 360 with continuous 
                  training on latest industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Flexible Engagement Models</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose from project-based, hourly, or dedicated team models tailored to your specific needs 
                  and budget requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">Cost-Effective Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Achieve significant cost savings without compromising on quality or detail, enabling you to 
                  invest in growth initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Strict QC Processes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Multi-tier quality assurance processes ensuring model accuracy, consistency, and compliance 
                  with your standards and specifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">Global Delivery Capability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seamless collaboration across time zones, aligned with client timelines and international 
                  standards for consistent delivery excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Outsourcing background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-blue-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center"
          >
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Get Started</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Ready to Scale Your BIM Operations?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our outsourcing services can transform your project delivery capabilities 
              and drive measurable business outcomes. Schedule a consultation to explore tailored solutions 
              for your organization.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg">
                <Link href="/contact">
                  Request a Proposal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link href="/projects">
                  View Case Studies
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Headphones className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-sm text-white/80">Round-the-clock assistance for your projects</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Briefcase className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Flexible Models</h3>
                <p className="text-sm text-white/80">Choose the engagement model that fits your needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Star className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="font-bold text-white mb-2">Proven Excellence</h3>
                <p className="text-sm text-white/80">99%+ client satisfaction across 500+ projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

