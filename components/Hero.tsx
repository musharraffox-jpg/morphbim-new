'use client'

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import the LottieAnimation component
const LottieAnimation = dynamic(() => import("./LottieAnimation"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-auto max-w-lg mx-auto flex items-center justify-center">
      <div className="animate-pulse bg-gray-200 rounded-xl w-full aspect-square"></div>
    </div>
  )
});

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuredSectionRef = useRef<HTMLDivElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [lottieError, setLottieError] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only attempt to load Lottie in browser environment
    if (typeof window === 'undefined') return;
    
    const fetchLottieData = async () => {
      try {
        setIsLoading(true);
        
        // Instead of trying to fetch and parse the Lottie file directly,
        // we'll use a different approach for binary Lottie files
        // Option 1: Use a JSON version of the Lottie animation
        // Option 2: Use a different animation format like WebM (which you already have)
        
        // For now, we'll set an error to prevent the JSON parsing error
        setLottieError(true);
        console.log("Using WebM video instead of Lottie animation");
        
      } catch (error) {
        console.error("Error loading animation:", error);
        setLottieError(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchLottieData();
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  const scrollToFeatured = () => {
    if (typeof window === 'undefined' || !featuredSectionRef.current) return;
    
    const yOffset = -80; // Add some offset for navbar
    const y = featuredSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  };
  
  const renderHeroImage = () => {
    if (isLoading) {
      return (
        <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <div className="w-full h-auto max-w-lg mx-auto aspect-square bg-gray-200 animate-pulse rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Loading...</span>
          </div>
        </div>
      );
    }
    
    if (lottieData && !lottieError) {
      return (
        <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <LottieAnimation 
            animationPath={lottieData} 
            className="w-full h-auto max-w-lg mx-auto"
            loop={true}
            autoplay={true}
          />
        </div>
      );
    }
    
    return (
      <>
        <div className="absolute inset-0 bg-dark-900 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
        <div 
          ref={imageRef}
          className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl"
        >
          <div className="relative w-full h-full aspect-square">
            <Image 
              src="/og.jpg" 
              alt="MorphVision BIM" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out" 
              style={{ transformStyle: 'preserve-3d' }} 
            />
            <div className="absolute inset-0">
              <Image
                src="/og.jpg"
                alt="MorphVision BIM Overlay"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ mixBlendMode: 'overlay', opacity: 0.5 }}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  return (
    <section 
      className="overflow-hidden relative bg-cover" 
      id="hero" 
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%', 
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
              <span>Your Vision, Our Innovation</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              Redefining Industries<br className="hidden sm:inline" />Through Cutting-Edge BIM Solutions
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left"
            >
              MorphVision specializes in BIM, Detailed Designing, Scanning, Redevelopment, and Turnkey Project Solutions. With 190+ successful projects and 40+ skilled professionals, we deliver excellence across pharmaceutical, industrial, and commercial sectors.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <Link 
                href="/contact" 
                className="flex items-center justify-center group w-full sm:w-auto text-center" 
                style={{
                  backgroundColor: '#FE5C02',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px', // Slightly reduced padding for mobile
                  border: '1px solid white',
                }}
              >
                Discuss Your Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button
                onClick={scrollToFeatured}
                className="flex items-center justify-center group w-full sm:w-auto text-center bg-transparent border border-pulse-500 text-pulse-500 hover:bg-pulse-50 transition-colors duration-300 rounded-full py-4 px-6"
              >
                Explore Our Services
                <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {renderHeroImage()}
          </div>
        </div>
        
        {/* Featured Services Preview */}
        <div ref={featuredSectionRef} className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
          {[
            {
              icon: "🏗️",
              title: "BIM Modeling",
              description: "3D modeling and coordination for all construction disciplines"
            },
            {
              icon: "🔍",
              title: "Scanning & Redevelopment",
              description: "Transform existing structures with precise digital scanning"
            },
            {
              icon: "🔑",
              title: "Turnkey Solutions",
              description: "End-to-end project management from concept to completion"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-elegant">
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
