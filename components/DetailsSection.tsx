'use client'

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const details = [
  {
    id: "quality",
    title: "Quality Assurance",
    description: "Our rigorous quality control processes ensure that every deliverable meets the highest standards.",
    image: "/details/quality.jpg",
    features: [
      "Regular Reviews",
      "Quality Checks",
      "Standards Compliance",
      "Documentation"
    ]
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Round-the-clock technical support to address your queries and concerns promptly.",
    image: "/details/support.jpg",
    features: [
      "Technical Assistance",
      "Issue Resolution",
      "Regular Updates",
      "Emergency Support"
    ]
  },
  {
    id: "training",
    title: "Training & Resources",
    description: "Comprehensive training programs and resources to help you maximize the benefits of BIM.",
    image: "/details/training.jpg",
    features: [
      "Workshop Sessions",
      "Online Resources",
      "Best Practices",
      "Case Studies"
    ]
  }
];

const DetailsSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We go above and beyond to ensure your success with our comprehensive support and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail) => (
            <div 
              key={detail.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Detail Image */}
              <div className="relative h-48">
                <Image
                  src={detail.image}
                  alt={detail.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {detail.title}
                </h3>
              </div>

              {/* Detail Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {detail.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {detail.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
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

export default DetailsSection;
