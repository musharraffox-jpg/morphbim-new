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
                backgroundImage: "url('/background-section2.png')",
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
                <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                  Professional Services
                </Badge>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">
                  <span className="block">Transforming the Built Environment</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                    Through Digital Innovation
                  </span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-3xl">
                  Comprehensive digital design solutions that elevate architecture, engineering, and construction projects.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#service-grid"
                    className="flex items-center justify-center group px-6 py-3 bg-white text-[#20133d] font-medium rounded-full hover:bg-opacity-90 transition-all"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Our Technology
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Innovation that Moves Your Project
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We leverage the latest technology to improve the way we design, coordinate, and deliver your projects.
              </p>
              <div className="relative h-80 md:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/images/services/technology.jpeg"
                  alt="BIM Technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 gap-8">
                {/* Feature 1 */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold mb-4">Real-Time Collaboration</h3>
                  <p className="text-gray-600 mb-4">
                    Stay up-to-date with your project's progress through our cloud-based collaboration tools.
                  </p>
                  <Link 
                    href="/technology"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-all group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                {/* Feature 2 */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold mb-4">Data Analytics</h3>
                  <p className="text-gray-600 mb-4">
                    Gain insights into your project's performance, identify bottlenecks, and make data-driven decisions.
                  </p>
                  <Link 
                    href="/technology"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-all group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                {/* Feature 3 */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold mb-4">Automated Updates</h3>
                  <p className="text-gray-600 mb-4">
                    Receive timely notifications about your project, including model updates and coordination issues.
                  </p>
                  <Link 
                    href="/technology"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-all group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                {/* Feature 4 */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold mb-4">Secure Portal</h3>
                  <p className="text-gray-600 mb-4">
                    Access your project information anytime with our secure online portal for reviewing, managing, and tracking progress.
                  </p>
                  <Link 
                    href="/technology"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-all group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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