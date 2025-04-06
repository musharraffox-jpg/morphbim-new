'use client'

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "MorphVision's BIM expertise transformed our project, reducing costs by 15% and ensuring on-time delivery.",
  author: "Amit Sharma",
  role: "Project Manager, UrbanCore Infra Pvt. Ltd.",
  backgroundImage: "/background-section1.png"
}, {
  content: "Their attention to detail and innovative BIM workflows made all the difference in our pharma facility project.",
  author: "Dr. Sneha Iyer",
  role: "Facility Planning Head, NexPharma Group",
  backgroundImage: "/background-section2.png"
}, {
  content: "We were able to streamline all our MEP coordination tasks thanks to MorphVision's clash detection and 5D BIM capabilities.",
  author: "Ravi Mehta",
  role: "Senior Engineer, MetroBuild Technologies",
  backgroundImage: "/background-section3.png"
}, {
  content: "MorphVision delivered accurate Civil 3D modeling for our highway expansion—saving us weeks of rework.",
  author: "Neha Kulkarni",
  role: "Lead Civil Engineer, Highline InfraTech",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-xl p-8 h-full flex flex-col justify-between text-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden" 
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(32, 19, 61, 0.7), rgba(32, 19, 61, 0.9)), url('${backgroundImage}')`
      }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-bl-2xl z-10"></div>
      
      <div className="relative z-0">
        <div className="text-4xl text-white/30 font-serif mb-4">"</div>
        <p className="text-xl mb-8 font-medium leading-relaxed">{content}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="opacity-0 animate-on-scroll">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>Testimonials</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-12 text-left">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="opacity-0 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard 
                  content={testimonial.content} 
                  author={testimonial.author} 
                  role={testimonial.role}
                  backgroundImage={testimonial.backgroundImage} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
