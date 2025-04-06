'use client'

import React from "react";
import Image from "next/image";

const ImageShowcaseSection = () => {
  const features = [
    "Advanced Modeling: Accurate and detailed 3D representations.",
    "Collaborative Workflows: Seamless integration across teams.",
    "Cost Efficiency: Reduce waste and optimize resources.",
    "Precision Execution: From Civil 3D to MEP, we've got you covered."
  ];

  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience Precision Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our advanced BIM solutions are designed to transform how you manage construction projects, from residential builds to pharmaceutical facilities.
          </p>
        </div>
        
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <Image
            src="/og.jpg"
            alt="Showcase Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation BIM</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 flex items-center justify-center mt-1 flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      {feature}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
