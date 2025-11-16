'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Filter, Search, Layers, Clock, Sparkles, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import ProjectCTA from '@/components/ProjectCTA';
import { services } from '@/app/data/services'; // Import services data

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2, ease: 'easeOut' }
  }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     
      {/* Hero Section */}
      <section className="w-full bg-white py-0">
        <div className="section-container pb-2">
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-4 sm:mt-8">
            <div
              className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[400px] flex flex-col"
              style={{
                backgroundImage: "url('/pattern-2.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >
              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl"
              >
                <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20">
                  We don't just design we build ease
                </Badge>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                  <span className="block">Complete BIM Solutions</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    From Design to Construction
                  </span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                  From architectural modeling and MEP coordination to scan-to-BIM and 4D/5D planning, we deliver 
                  end-to-end BIM services that transform how you design, construct, and manage projects from 
                  concept to completion.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#service-grid"
                    className="flex items-center justify-center group px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all shadow-lg"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center group px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-all"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </motion.div>

              {/* White box at the bottom with overflow - Hidden on mobile */}
              <div className="hidden sm:block w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Accordion Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Our Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Comprehensive BIM Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our range of specialized services through interactive showcases of our work and capabilities.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">Architectural Modeling</h3>
                      <p className="text-sm text-gray-600">High-precision 3D models and detailed documentation</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Architectural Modeling"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-gray-700">
                    Our architectural BIM services deliver comprehensive 3D models with detailed documentation, 
                    ensuring seamless coordination between design intent and construction reality.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">MEP Coordination</h3>
                      <p className="text-sm text-gray-600">Integrated systems design and clash detection</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="MEP Coordination"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-gray-700">
                    Advanced MEP coordination services that integrate mechanical, electrical, and plumbing systems 
                    with precision, eliminating conflicts before construction begins.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">Scan to BIM</h3>
                      <p className="text-sm text-gray-600">Point cloud to intelligent model conversion</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Scan to BIM"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-gray-700">
                    Transform existing structures into accurate BIM models using advanced laser scanning technology, 
                    enabling precise renovation and retrofit planning.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-4" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">4D/5D BIM</h3>
                      <p className="text-sm text-gray-600">Construction sequencing and cost integration</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="4D/5D BIM"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-gray-700">
                    Advanced 4D scheduling and 5D cost integration services that visualize construction sequences 
                    and provide real-time budget tracking throughout project lifecycle.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">Industrial Design</h3>
                      <p className="text-sm text-gray-600">Specialized pharma and industrial facilities</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Industrial Design"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-gray-700">
                    Specialized BIM solutions for pharmaceutical and industrial facilities, ensuring compliance 
                    with regulatory standards while optimizing operational efficiency.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-xl overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">Outsourcing Services</h3>
                      <p className="text-sm text-gray-600">Scale your BIM operations with our global team</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Outsourcing Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-gray-700 mb-4">
                    Extend your BIM capabilities with our comprehensive outsourcing services. We work as an 
                    extension of your team, delivering quality results on time and within budget.
                  </p>
                  <Link 
                    href="/services/outsourcing"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Explore Outsourcing Services
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Inspired by the Axion design */}
      <section id="service-grid" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Our Expertise
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                BIM Solutions for AEC
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                We offer comprehensive BIM and digital design services tailored to the diverse needs of architecture, engineering, and construction projects.
              </p>
            </div>
            
          </div>

          {/* Main Services Grid - 2x1 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* First two services */}
            {services.slice(0, 2).map((service) => (
              <motion.div 
                key={service.id}
                className="relative overflow-hidden rounded-2xl group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariant}
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                <Image
                  src={service.image || "/placeholder.png"}
                  alt={service.title}
                  width={600}
                  height={350}
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-white hover:text-blue-200 transition-all group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Services Grid - 3x1 Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Next three services */}
            {services.slice(2, 5).map((service) => (
              <motion.div 
                key={service.id}
                className="relative overflow-hidden rounded-2xl group"
                variants={cardVariant}
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                <Image
                  src={service.image || "/placeholder.png"}
                  alt={service.title}
                  width={600}
                  height={350}
                  className="w-full h-[250px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-white hover:text-blue-200 transition-all group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section - Inspired by the Axion design */}
    

      {/* Industries Section - Inspired by the Axion design */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Industries We Serve
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Tailored Solutions for Every Sector
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                At MorphVision, we understand that every industry has unique BIM and design challenges. That's why we offer customized solutions for a wide range of sectors.
              </p>
            </div>
            <div className="flex gap-2 mt-6 md:mt-0">
              <Button variant="ghost" size="icon" className="rounded-full border border-gray-200">
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full border border-gray-200">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Industry 1 */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              variants={cardVariant}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Healthcare & Pharma</h3>
              <p className="text-gray-600 text-sm">
                Specialized BIM solutions for complex healthcare facilities with strict regulatory requirements.
              </p>
            </motion.div>
            
            {/* Industry 2 */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              variants={cardVariant}
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Commercial & Office</h3>
              <p className="text-gray-600 text-sm">
                Optimize your commercial spaces with efficient design and coordination services.
              </p>
            </motion.div>
            
            {/* Industry 3 */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              variants={cardVariant}
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Residential & Mixed-Use</h3>
              <p className="text-gray-600 text-sm">
                Create efficient, beautiful living spaces with our comprehensive BIM services.
              </p>
            </motion.div>
            
            {/* Industry 4 */}
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              variants={cardVariant}
            >
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Industrial & Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Optimize complex industrial facilities with precise modeling and coordination.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80"
            alt="Architecture background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
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
              Ready to Transform Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
              Let's discuss how our services can elevate your next project and deliver exceptional results.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg">
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link href="/projects">
                  View Our Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
      </section>

    </div>
  );
}