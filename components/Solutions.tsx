'use client'

import React, { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Train,
  TestTube,
  GraduationCap,
  Settings,
  Wrench,
  Network,
  Building,
  BookOpen,
  Cpu,
  GitBranch,
  ArrowRight
} from "lucide-react";
import ConsultationForm from "./ConsultationForm";
import { Button } from "@/components/ui/button";

interface SolutionCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  solutions: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

const solutionCategories: SolutionCategory[] = [
  {
    title: "Industry Segments",
    description: "Transform your projects with industry-specific BIM solutions.",
    icon: Building2,
    solutions: [
      {
        title: "Buildings",
        description: "Residential, commercial, and industrial solutions with a focus on efficiency and sustainability.",
        icon: Building
      },
      {
        title: "Infrastructure",
        description: "Civil 3D-driven designs for transportation, utilities, and public works.",
        icon: Train
      },
      {
        title: "Pharma Facilities",
        description: "Precision execution for regulated environments, ensuring compliance and quality.",
        icon: TestTube
      }
    ]
  },
  {
    title: "Consulting",
    description: "Strategic support to enhance your BIM journey.",
    icon: GraduationCap,
    solutions: [
      {
        title: "BIM Training",
        description: "Equip your team with hands-on skills for BIM success.",
        icon: BookOpen
      },
      {
        title: "BIM Implementation",
        description: "Seamless integration of BIM processes into your workflows.",
        icon: Settings
      },
      {
        title: "Technology Support",
        description: "Expert guidance on software and tools for maximum ROI.",
        icon: Wrench
      }
    ]
  },
  {
    title: "Automation",
    description: "Boost productivity with custom tech solutions.",
    icon: Cpu,
    solutions: [
      {
        title: "Plugin Development",
        description: "Tailored plugins to simplify modeling and coordination tasks.",
        icon: GitBranch
      },
      {
        title: "Software Integration",
        description: "Connect your tools with Morphvison's API expertise for a unified workflow.",
        icon: Network
      }
    ]
  }
];

const Solutions = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <ConsultationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />

      <section className="w-full py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our specialized BIM solutions designed to meet the unique needs of different construction sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((category, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Solution Image */}
                <div className="relative h-48">
                  <Image
                    src={`/background-section${index + 1}.png`}
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

                {/* Solution Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {category.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{solution.title}</span>
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
    </>
  );
};

export default Solutions; 