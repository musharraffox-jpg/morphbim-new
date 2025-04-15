'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Filter, Search } from 'lucide-react';
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

// Service categories for filtering
const categories = [
  "All",
  "BIM",
  "Architectural",
  "Structural",
  "Visualization",
  "Facilities"
];

// Service tags for more detailed filtering
const serviceTags = [
  "Modeling",
  "Coordination",
  "Design",
  "Engineering",
  "VR/AR",
  "Family Creation",
  "Documentation"
];

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [filteredServices, setFilteredServices] = useState(services);

  // Filter services based on search, category, and tags
  useEffect(() => {
    let result = services;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter(service => {
        // Map service IDs to categories
        const serviceCategories: Record<string, string[]> = {
          "BIM": ["bim-modeling-coordination", "4d-5d-simulation"],
          "Architectural": ["architectural-structural", "architectural-visualization"],
          "Structural": ["architectural-structural", "structural-analysis"],
          "Visualization": ["architectural-visualization", "vr-ar-experiences"],
          "Facilities": ["family-creation", "facilities-management"]
        };
        
        // Check if service id is in the selected category
        return serviceCategories[activeCategory]?.includes(service.id);
      });
    }
    
    // Filter by tags
    if (activeTags.length > 0) {
      result = result.filter(service => {
        // Check if any of the service features match active tags
        return service.features?.some(feature => 
          activeTags.some(tag => 
            feature.toLowerCase().includes(tag.toLowerCase())
          )
        );
      });
    }
    
    setFilteredServices(result);
  }, [searchTerm, activeCategory, activeTags]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/services/services-hero.jpg" 
          alt="MorphVision Services" 
          fill 
          className="object-cover object-center" 
          priority
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
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
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Comprehensive digital design solutions that elevate architecture, engineering, and construction projects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="#service-grid">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">
                Request a Consultation
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Service Filter & Directory */}
      <section id="service-grid" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Expert Services for Complex Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive service offerings are designed to meet the unique challenges of modern AEC projects, from concept to completion.
            </p>
          </motion.div>

          {/* Filter Controls */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  className="pl-10 bg-white border-gray-200 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge className="flex items-center gap-1 bg-gray-100 text-gray-700 hover:bg-gray-200">
                  <Filter className="h-3.5 w-3.5" />
                  Filters: {activeCategory !== "All" ? activeCategory : ""} {activeTags.length > 0 && `+${activeTags.length} tags`}
                </Badge>
                {activeTags.length > 0 && (
                  <Button 
                    variant="ghost" 
                    className="h-8 text-xs"
                    onClick={() => setActiveTags([])}
                  >
                    Clear tags
                  </Button>
                )}
              </div>
            </div>

            {/* Category Tabs */}
            <Tabs 
              defaultValue="All" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="mb-8"
            >
              <TabsList className="w-full justify-start overflow-x-auto flex-nowrap gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900 rounded-full"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Tags */}
            <ScrollArea className="whitespace-nowrap pb-4">
              <div className="flex gap-2">
                {serviceTags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant={activeTags.includes(tag) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      activeTags.includes(tag) 
                        ? "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200" 
                        : "bg-white hover:bg-gray-100"
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </ScrollArea>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={cardVariant}
                  whileHover="hover"
                  className="h-full"
                >
                  <Link href={`/services/${service.id}`} className="h-full block">
                    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 border-gray-200 hover:border-blue-300">
                      <div className="relative h-60 overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.png"}
                          alt={service.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-display font-bold tracking-tight">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <CardDescription className="text-gray-600 line-clamp-3">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {service.features?.slice(0, 2).map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-gray-100">
                              {feature.split(' ')[0]}
                            </Badge>
                          ))}
                          {(service.features?.length || 0) > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{(service.features?.length || 0) - 2} more
                            </Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 -mr-2">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">No services found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                  setActiveTags([]);
                }}>
                  Reset filters
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              How We Deliver Excellence
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                number: "01",
                title: "Discovery & Analysis",
                description: "We begin by understanding your project goals, challenges, and requirements.",
                icon: "Search"
              },
              {
                number: "02",
                title: "Strategic Planning",
                description: "Our team develops a comprehensive plan tailored to your specific needs.",
                icon: "FileText"
              },
              {
                number: "03",
                title: "Execution & Development",
                description: "We implement the plan with precision, using cutting-edge tools and methodologies.",
                icon: "Code2"
              },
              {
                number: "04",
                title: "Review & Delivery",
                description: "Final quality checks ensure deliverables meet our high standards before handover.",
                icon: "CheckCircle"
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Number badge with gradient */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold mt-4 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Connector line between steps (hidden on mobile) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Client Success</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                  <Image 
                    src="/images/testimonials/client1.jpg" 
                    alt="Client" 
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <svg className="h-12 w-12 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-800 text-xl mb-6 italic">
                  "MorphVision's BIM services transformed our complex healthcare project. Their attention to detail and collaborative approach resulted in significant cost savings and a smoother construction process."
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">David Chen</h4>
                  <p className="text-gray-500">Project Director, Global Construction Partners</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Sectors</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across various sectors, each with unique requirements and challenges.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              "Healthcare & Pharma",
              "Commercial & Office",
              "Residential & Mixed-Use",
              "Industrial & Manufacturing",
              "Infrastructure",
              "Education & Institutional"
            ].map((industry, index) => (
              <motion.div 
                key={index} 
                variants={cardVariant}
                whileHover="hover"
                className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm flex flex-col items-center justify-center aspect-square"
              >
                <h3 className="font-bold text-gray-800">{industry}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">FAQs</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and approach.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {[
              {
                question: "What makes MorphVision different in the BIM space?",
                answer: "Our key differentiators include our multidisciplinary team of experts, a proven track record of 190+ projects, commitment to global standards, a client-first approach, and continuous focus on innovation using tools like Revit, Navisworks, and Unreal Engine."
              },
              {
                question: "How do you ensure quality in your BIM models and services?",
                answer: "We employ rigorous quality assurance processes, adhere to international standards like ISO 19650, use advanced clash detection techniques, and maintain clear communication protocols throughout the project lifecycle to ensure high-quality deliverables."
              },
              {
                question: "Can you handle projects of different sizes and complexities?",
                answer: "Yes, our team has experience across a wide range of project scales, from specific component modeling to large-scale, complex projects involving architectural, structural, and MEPF coordination for sectors like healthcare, industrial, and commercial developments."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope, complexity, and specific requirements. We work closely with clients to establish realistic schedules and milestones, ensuring timely delivery without compromising quality."
              }
            ].map((faq, index) => (
              <Accordion type="single" collapsible key={index} className="mb-4">
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-blue-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Updated with background image instead of gradient */}
      <section className="py-24 relative overflow-hidden">
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
            
            {/* Creative floating elements */}
            <div className="absolute left-10 top-1/4 w-20 h-20 rounded-full border-4 border-white/20 animate-pulse-slow opacity-40" />
            <div className="absolute right-10 bottom-1/4 w-32 h-32 rounded-full border-4 border-white/20 animate-pulse-slow opacity-30 [animation-delay:1s]" />
            <div className="absolute right-1/4 top-10 w-16 h-16 rounded-full border-2 border-white/30 animate-pulse-slow opacity-50 [animation-delay:2s]" />
            
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

      {/* Project CTA */}
      <ProjectCTA />
    </div>
  );
}