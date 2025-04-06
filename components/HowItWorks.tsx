'use client'

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We begin with a thorough understanding of your project requirements and goals.",
    image: "/steps/consultation.jpg"
  },
  {
    id: 2,
    title: "Planning & Design",
    description: "Our team develops a comprehensive plan using advanced BIM technology.",
    image: "/steps/planning.jpg"
  },
  {
    id: 3,
    title: "Implementation",
    description: "We execute the plan with precision, using robotics and human expertise.",
    image: "/steps/implementation.jpg"
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Rigorous testing and verification ensure the highest standards are met.",
    image: "/steps/quality.jpg"
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures efficient project delivery from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {step.id}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>
                <Button variant="ghost" className="group">
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

export default HowItWorks;
