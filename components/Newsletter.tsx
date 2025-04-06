'use client'

import React, { useState, useRef, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about MorphVision's BIM services soon."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-white py-16 md:py-24" ref={sectionRef}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#20133d] to-[#512888] rounded-2xl p-8 md:p-12 shadow-xl opacity-0 animate-on-scroll">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-white">Get Industry Updates & Insights</h2>
              <p className="text-white/80 text-lg mb-6">
                Subscribe to our newsletter for the latest BIM trends, project showcases, and exclusive insights.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Email address" 
                  className="w-full px-5 py-3 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-white/50 text-white placeholder:text-white/50" 
                  required 
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-white hover:bg-gray-100 text-[#20133d] font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;