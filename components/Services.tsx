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
    <section className="w-full py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive BIM services to help you achieve your project goals with precision and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div 
              key={category.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="relative h-48">
                <Image
                  src={`/background-section${serviceCategories.indexOf(category) + 1}.png`}
                  alt={`${category.title} background`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{service.title}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 