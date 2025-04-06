'use client'

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsSection from "@/components/SpecsSection";
import Features from "@/components/Features";
import DetailsSection from "@/components/DetailsSection";
import MadeByHumans from "@/components/MadeByHumans";

export default function ServicesPage() {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    // Check if we're in the browser environment
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
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <SpecsSection />
        <Features />
        <DetailsSection />
        <MadeByHumans />
      </main>
      <Footer />
    </div>
  );
} 