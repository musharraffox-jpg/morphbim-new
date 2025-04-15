'use client'

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Compass,
  HardHat,
  Settings,
  Building,
  Eye,
  ScanLine,
  Wrench,
  Ruler,
  Clock,
  FileText,
  HelpingHand,
  Building2,
  Scan,
  LayoutGrid
} from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  services: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Design & Engineering",
    description: "Precision planning meets innovative technology.",
    icon: Compass,
    services: [
      {
        title: "LOD 300 Modeling",
        description: "High-detail BIM models for architecture, structure, MEP, and Civil 3D projects.",
        icon: Building
      },
      {
        title: "Visualization & VR",
        description: "Immersive renders and virtual reality walkthroughs to bring your vision to life.",
        icon: Eye
      },
      {
        title: "BIM Coordination",
        description: "Clash detection and resolution for flawless design integration.",
        icon: ScanLine
      },
      {
        title: "MEP Engineering",
        description: "Expert design and coordination for mechanical, electrical, and plumbing systems.",
        icon: Wrench
      },
      {
        title: "Structural Consulting",
        description: "Robust structural designs backed by years of engineering expertise.",
        icon: Ruler
      }
    ]
  },
  {
    title: "Construction",
    description: "Build smarter with Morphvison's construction-ready solutions.",
    icon: HardHat,
    services: [
      {
        title: "LOD 400 Modeling",
        description: "Detailed models for construction analysis, BOQ, and cost estimation.",
        icon: Building2
      },
      {
        title: "4D Scheduling",
        description: "Sync timelines with 3D models for accurate project planning.",
        icon: Clock
      },
      {
        title: "Shop Drawings",
        description: "Ready-to-use drawings to accelerate on-site progress.",
        icon: FileText
      },
      {
        title: "On-Site BIM Support",
        description: "Real-time assistance to implement BIM workflows at the construction site.",
        icon: HelpingHand
      }
    ]
  },
  {
    title: "Operations",
    description: "Maximize asset value with post-construction BIM.",
    icon: Settings,
    services: [
      {
        title: "As-Built Modeling",
        description: "Digital twins of your completed projects for facility management.",
        icon: Building
      },
      {
        title: "Scan-to-BIM",
        description: "Convert physical spaces into precise BIM models with advanced scanning tech.",
        icon: Scan
      },
      {
        title: "Facility Management",
        description: "Optimize operations with BIM-driven insights and maintenance plans.",
        icon: LayoutGrid
      }
    ]
  }
];

const Services = () => {
  return (
    <section className="w-full relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[800px] h-[800px] -top-64 -left-64 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute w-[600px] h-[600px] -bottom-64 -right-64 bg-gradient-to-l from-primary/20 to-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-primary-200 text-sm font-medium"
          >
            Transformative BIM Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-blue-400 leading-tight"
          >
            Building Digital Twins
            <br />
            <span className="text-3xl md:text-5xl font-light bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              of Tomorrow's Infrastructure
            </span>
          </motion.h1>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-primary-300/30"
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{category.title}</h3>
                  <p className="text-sm text-primary-100">{category.description}</p>
                </div>
              </div>

              {/* Service List */}
              <ul className="space-y-4">
                {category.services.map((service, sIdx) => (
                  <li
                    key={service.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex-shrink-0 mt-1 p-2 bg-primary-500/10 rounded-lg">
                      <service.icon className="h-5 w-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{service.title}</h4>
                      <p className="text-sm text-primary-100 mt-1">{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/20 to-blue-600/20 rounded-3xl blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 lg:mt-28 text-center"
        >
          <div className="inline-block relative bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-1">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl px-8 py-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Revolutionize
                <br />
                Your Construction Workflow?
              </h3>
              <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
                Let's co-create digital twins of your next landmark project with millimeter precision and AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="xl"
                  className="bg-white text-gray-900 hover:bg-gray-100 group font-semibold gap-2"
                >
                  Schedule Demo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="ghost"
                  size="xl"
                  className="text-white border border-white/20 hover:border-primary-300 hover:text-primary-300 gap-2"
                >
                  Explore Case Studies
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;