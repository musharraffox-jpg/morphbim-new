'use client'

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // Card data
  const cardData = [
    {
      title: "BIM Modeling",
      description: "Advanced 3D modeling for all construction disciplines",
      features: [
        "Detailed MEP modeling and coordination",
        "4D & 5D BIM for scheduling and cost estimation",
        "Clash detection and resolution",
        "Building performance analysis"
      ],
      background: "background-section1.png",
      ctaText: "Explore BIM Services"
    },
    {
      title: "3D Scanning",
      description: "Transform existing structures with precise digital scanning",
      features: [
        "Point cloud to BIM conversion",
        "As-built documentation",
        "Renovation planning",
        "Facility management"
      ],
      background: "background-section2.png",
      ctaText: "Learn About Scanning"
    },
    {
      title: "Turnkey Solutions",
      description: "End-to-end project management from concept to completion",
      features: [
        "Complete project lifecycle management",
        "Design-build services",
        "Quality assurance and control",
        "Handover and documentation"
      ],
      background: "background-section3.png",
      ctaText: "View Turnkey Projects"
    }
  ];

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: 'auto',
    minHeight: '200px',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Use progress to determine which card should be active
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    // Handle resize for mobile/desktop transitions
    const handleResize = () => {
      // Reset ticking
      ticking.current = false;
      // Force recalculation
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  // Determine if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Setup resize listener
    window.addEventListener('resize', checkMobile, { passive: true });
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Function to render a card
  const renderCard = (index: number, isVisible: boolean) => {
    const card = cardData[index];
    
    return (
      <div 
        className={`${isMobile ? 'relative' : 'absolute inset-0'} overflow-hidden shadow-xl ${isVisible ? 'animate-card-enter' : ''}`} 
        style={isMobile ? {
          ...cardStyle,
          opacity: 1,
          zIndex: 10 + index * 10
        } : {
          ...cardStyle,
          zIndex: 10 + index * 10,
          transform: index === 0 
            ? `translateY(${isVisible ? '90px' : '200px'}) scale(0.9)` 
            : index === 1 
              ? `translateY(${isVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)` 
              : `translateY(${isVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
          opacity: isVisible ? (index === 0 ? 0.9 : 1) : 0,
          pointerEvents: isVisible ? 'auto' : 'none'
        }}
      >
        <div
          className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
          style={{
            backgroundImage: `url('/${card.background}')`,
            backgroundSize: "cover",
            backgroundPosition: index === 0 ? "top center" : index === 1 ? "center" : "bottom center",
            backgroundBlendMode: "overlay"
          }}
        ></div>
        
        <div className="absolute top-4 right-4 z-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
            <span className="text-sm font-medium">{card.title}</span>
          </div>
        </div>
        
        <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex flex-col justify-between">
          <div className="max-w-lg mb-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
              {card.description}
            </h3>
            
            <ul className="space-y-2 mt-8">
              {card.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-white">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <Link
              href="/services"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-[#20133d] font-medium hover:bg-white/90 transition-all group"
            >
              {card.ctaText}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: isMobile ? 'auto' : '300vh' }}
    >
      <section 
        className={`w-full ${isMobile ? 'relative py-16' : 'h-screen py-10 md:py-16 sticky top-0'} overflow-hidden bg-white`} 
        id="why-bim"
      >
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
                <span>Our Services</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              Comprehensive Solutions for Modern Industries
            </h2>
          </div>
          
          <div ref={cardsContainerRef} className={`relative ${isMobile ? 'flex flex-col gap-6' : 'flex-1 perspective-1000'}`}>
            {renderCard(0, isFirstCardVisible)}
            {renderCard(1, isSecondCardVisible)}
            {renderCard(2, isThirdCardVisible)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidSection;
