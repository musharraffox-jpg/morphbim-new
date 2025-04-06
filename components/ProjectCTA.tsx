'use client'

import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ProjectCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="project-cta" className="w-full bg-white py-0" ref={containerRef}>
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-4 sm:mt-8">
          <div 
            className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[350px] flex flex-col" 
            style={{
              backgroundImage: "url('/background-section2.png')",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            {/* Content Section */}
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 text-white max-w-3xl">
              {/* Header */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Ready to Transform Your Vision?
                </h2>
                <p className="text-lg text-white/90">
                  Partner with MorphVision to bring your projects to life with innovation, precision, and expertise.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center group px-6 py-3 bg-white text-[#20133d] font-medium rounded-full hover:bg-opacity-90 transition-all"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  href="/projects" 
                  className="flex items-center justify-center group px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            
            {/* White box at the bottom with overflow - Hidden on mobile */}
            <div className="hidden sm:block w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
