'use client'

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, PlusCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What types of projects does MorphVision specialize in?",
    answer: "MorphVision specializes in a wide range of projects including pharmaceutical cleanrooms, manufacturing units, industrial plants, utility systems, urban infrastructure redevelopment, pre-engineered buildings, hospitals, data centers, and commercial & residential projects. We have expertise in BIM modeling, detailed designing, scanning, redevelopment, and turnkey project solutions."
  },
  {
    question: "How does the project process work with MorphVision?",
    answer: "Our process typically begins with an initial consultation to understand your requirements, followed by a proposal outlining scope, timeline, and investment. Once approved, we proceed with design and modeling, incorporating your feedback at various milestones. We provide regular progress updates and deliver the final outputs according to the agreed specifications."
  },
  {
    question: "What software and technologies does MorphVision use?",
    answer: "We utilize industry-leading tools like Revit, Navisworks, and Unreal Engine to deliver accurate designs, immersive AR/VR experiences, and efficient project coordination. Our team is proficient in various software platforms that enable high-quality BIM modeling, scanning, and detailed designing."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary significantly based on scope, complexity, and requirements. Small-scale BIM modeling projects might take a few weeks, while comprehensive turnkey solutions could span several months. We provide detailed timelines during the proposal phase and keep you updated throughout the process."
  },
  {
    question: "Does MorphVision work with international clients?",
    answer: "Yes, MorphVision works with clients globally. With our expertise and technological capabilities, we can collaborate effectively across time zones and deliver projects to international standards and specifications."
  }
];

const FaqItem = ({ faq, isActive, onToggle, index }: { faq: FaqItem; isActive: boolean; onToggle: () => void; index: number }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);
  
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [faq]);
  
  return (
    <div 
      className={`overflow-hidden rounded-xl mb-4 ${isActive ? 'bg-white shadow-md border border-gray-200' : 'bg-white hover:bg-gray-50 border border-gray-100'} transition-all duration-300`}
    >
      <button
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none group"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <div className={`flex-shrink-0 mr-4 w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'} transition-colors duration-300`}>
            <span className="font-medium text-sm">{index + 1}</span>
          </div>
          <h3 className={`text-lg font-semibold ${isActive ? 'text-gray-800' : 'text-gray-700'} transition-colors duration-300`}>
            {faq.question}
          </h3>
        </div>
        <div className={`flex-shrink-0 ml-4 p-1 rounded-full ${isActive ? 'bg-gray-100 text-gray-800' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'} transform transition-all duration-300 ${isActive ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 h-0'}`} 
        style={{ height: isActive ? height : 0 }}
      >
        <div ref={contentRef} className="px-5 pb-5 pl-[68px]">
          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
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
  
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-gray-100 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-gray-200/30 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-on-scroll">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-800 text-white mr-2">05</span>
              <span>FAQs</span>
            </div>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 opacity-0 animate-on-scroll">
            Frequently Asked Questions
          </h2>
          
          <p className="text-gray-600 text-lg mb-10 opacity-0 animate-on-scroll">
            Get answers to common questions about our BIM services, process, and capabilities
          </p>
          
          <div className="opacity-0 animate-on-scroll">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isActive={activeIndex === index}
                onToggle={() => toggleFaq(index)}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center opacity-0 animate-on-scroll">
            <p className="text-gray-600 mb-4">Don't see your question here?</p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Ask a Question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
