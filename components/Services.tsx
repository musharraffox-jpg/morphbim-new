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
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex mb-6 items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Comprehensive BIM Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From conceptual design to facility management, we offer end-to-end BIM solutions tailored to your project's unique requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              style={{
                animationDelay: `${categoryIndex * 0.15}s`,
              }}
            >
              {/* Service Header with Icon and Title */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-600/90 opacity-90 transition-opacity group-hover:opacity-100"></div>
                <Image
                  src={`/background-section${categoryIndex + 1}.png`}
                  alt={`${category.title} background`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <category.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="mt-2 text-white/90 font-light">{category.description}</p>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-4 text-gray-800">Services Offered:</h4>
                <ul className="space-y-4 mb-6">
                  {category.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <div className="mt-1 p-1.5 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                        <service.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{service.title}</p>
                        <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button className="w-full group bg-white hover:bg-primary border border-primary text-primary hover:text-white transition-colors">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-primary to-blue-600 p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your projects with BIM excellence?</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Let's discuss how our expertise can bring your vision to life with precision and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100 group">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;