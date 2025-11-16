'use client'

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// Dynamically import the LottieAnimation component
const LottieAnimation = dynamic(() => import("./LottieAnimation"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-auto max-w-lg mx-auto flex items-center justify-center">
      <div className="animate-pulse bg-gray-200 rounded-xl w-full aspect-square"></div>
    </div>
  )
});

const heroImages = [
  { src: '/images/hero/hero-0.png', alt: 'Hero Image 1' },
  { src: '/images/hero/hero-1.png', alt: 'Hero Image 2' },
  { src: '/images/hero/hero-2.png', alt: 'Hero Image 3' },
  { src: '/images/hero/hero-3.png', alt: 'Hero Image 4' },
  { src: '/images/hero/hero-4.png', alt: 'Hero Image 5' },
  { src: '/images/hero/hero-5.png', alt: 'Hero Image 6' }
]

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuredSectionRef = useRef<HTMLDivElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [lottieError, setLottieError] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // Parallax effect
  const bgRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const numImages = heroImages.length

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
              src="/city.png" 
              alt="MorphVision BIM" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out" 
              style={{ transformStyle: 'preserve-3d' }} 
            />
            <div className="absolute inset-0">
              <Image
                src="/city-night.png"
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

  // Auto-advance carousel
  useEffect(() => {
    if (numImages <= 1) return
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % numImages)
    }, 5000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, numImages])

  const goTo = (idx: number) => {
    setCurrent(idx)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }
  const prev = () => goTo((current - 1 + numImages) % numImages)
  const next = () => goTo((current + 1) % numImages)

  return (
    <section className='min-h-screen flex flex-col items-center justify-center bg-white' id='hero'>
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden rounded-3xl shadow-2xl bg-black/90" style={{boxShadow: '0 8px 40px 0 rgba(0,0,0,0.10)'}}>

        {/* Carousel Images */}
        <div className='absolute inset-0 w-full h-full z-0 rounded-3xl overflow-hidden'>
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              className='absolute inset-0 w-full h-full'
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <Image
                src={heroImages[current].src}
                alt={heroImages[current].alt}
                fill
                priority
                className='object-cover w-full h-full rounded-3xl'
                style={{ filter: 'brightness(0.7) contrast(1.1)' }}
              />
              <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60 rounded-3xl' />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* No prev/next controls as per new design */}

        {/* Dots */}
        <div className='absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-1.5 z-20'>
          {heroImages.map((img, idx) => (
            <button
              key={img.src}
              className={`h-1 w-5 rounded-sm border border-white/60 ${idx === current ? 'bg-white' : 'bg-white/30'} transition-colors duration-200`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Hero Content with framer-motion animation */}
        <motion.div
          className='relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 lg:py-40 w-full min-h-[70vh]'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            className='mb-4 sm:mb-6 flex items-center justify-center gap-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className='inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#20133d] text-white text-sm font-bold'>01</span>
            <span className='text-white/90 text-base sm:text-lg tracking-wide font-medium'>Transforming the Built Environment</span>
          </motion.div>
          <motion.h1
            className='text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)] mb-4 sm:mb-6'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building Information Modeling.<br className='hidden sm:inline' />
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text'>Digital Design Excellence.</span>
          </motion.h1>
          <motion.p
            className='text-white/80 max-w-2xl mx-auto text-lg sm:text-xl mb-8 sm:mb-12 font-normal drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            MorphVision delivers comprehensive BIM and digital design solutions that elevate architecture, engineering, and construction projects. We transform complex design challenges into precise, coordinated, and constructible models.
          </motion.p>
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link
              href='/contact'
              className='flex items-center justify-center group w-full sm:w-auto text-center bg-pulse-500 hover:bg-pulse-600 transition-colors duration-200 text-white font-semibold rounded-full px-8 py-4 text-base shadow-lg border border-white/10'
            >
              Get Started
              <ArrowRight className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1' />
            </Link>
            <button
              onClick={scrollToFeatured}
              className='flex items-center justify-center group w-full sm:w-auto text-center bg-white/10 border border-pulse-500 text-pulse-500 hover:bg-pulse-50 transition-colors duration-200 rounded-full px-8 py-4 text-base font-semibold shadow-lg'
            >
              Explore Our Services
              <ArrowDown className='ml-2 w-4 h-4 transition-transform group-hover:translate-y-1' />
            </button>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
