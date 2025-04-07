'use client'

import React, { useState, useRef, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight, Mail } from "lucide-react";

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
    <section id="newsletter" className="bg-white py-16 md:py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#FE5C02]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#20133d]/5 rounded-full blur-3xl"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-10 md:left-20 w-16 h-16 rounded-full border-2 border-[#FE5C02]/20 opacity-60"></div>
      <div className="absolute bottom-1/4 right-10 md:right-20 w-24 h-24 rounded-lg border-2 border-[#20133d]/20 opacity-60 rotate-45"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.1)] opacity-0 animate-on-scroll backdrop-blur-sm border border-gray-100">
          {/* Decorative icon */}
          <div className="mx-auto mb-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#FE5C02] to-[#20133d]/70 flex items-center justify-center shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#20133d] to-[#FE5C02]">
              Stay Informed with Industry Insights
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Subscribe to our newsletter for exclusive BIM trends, project showcases, and expert insights delivered straight to your inbox.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Your email address" 
                  className="w-full pl-12 pr-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE5C02] focus:border-transparent shadow-sm text-gray-700" 
                  required 
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-gradient-to-r from-[#FE5C02] to-[#20133d] hover:from-[#ff6f1a] hover:to-[#342058] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
              </button>
            </div>
            <div className="text-center mt-4 text-sm text-gray-500">
              We respect your privacy. No spam, just valuable insights.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;