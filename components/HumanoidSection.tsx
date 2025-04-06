'use client'

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    id: "collaboration",
    title: "Enhanced Collaboration",
    description: "Real-time collaboration tools that bring teams together, regardless of location.",
    image: "/features/collaboration.jpg",
    benefits: [
      "Real-time Updates",
      "Team Communication",
      "File Sharing",
      "Version Control"
    ]
  },
  {
    id: "efficiency",
    title: "Improved Efficiency",
    description: "Streamlined workflows and automated processes to save time and reduce errors.",
    image: "/features/efficiency.jpg",
    benefits: [
      "Automated Tasks",
      "Workflow Optimization",
      "Error Reduction",
      "Time Savings"
    ]
  },
  {
    id: "innovation",
    title: "Continuous Innovation",
    description: "Stay ahead with cutting-edge technology and innovative solutions.",
    image: "/features/innovation.jpg",
    benefits: [
      "Latest Technology",
      "Creative Solutions",
      "Future-Proof",
      "Competitive Edge"
    ]
  }
];

const HumanoidSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            The Human Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine human expertise with advanced technology to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Feature Image */}
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>

              {/* Feature Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{benefit}</span>
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

export default HumanoidSection;
