'use client'

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import MadeByHumans from "@/components/MadeByHumans";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Clock, MapPin } from "lucide-react";
import Link from "next/link";

// Mock data for job listings
const jobs = [
  {
    id: "bim-specialist",
    title: "BIM Specialist",
    location: "Nagpur, Maharashtra",
    type: "Full-time",
    salary: "₹5L - ₹8L",
    description: "Seeking an experienced BIM Specialist with advanced skills in Autodesk Revit and other BIM tools to join our growing team.",
  },
  {
    id: "project-manager",
    title: "Project Manager",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹8L - ₹12L",
    description: "Looking for a detail-oriented Project Manager with BIM experience to oversee complex construction projects.",
  },
  {
    id: "mep-coordinator",
    title: "MEP Coordinator",
    location: "Remote",
    type: "Full-time",
    salary: "₹6L - ₹9L",
    description: "Join our team as an MEP Coordinator to ensure seamless integration of mechanical, electrical, and plumbing systems in our BIM projects.",
  },
];

export default function CareersPage() {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
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
        <section className="w-full py-20 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center mb-16">
              <div className="pulse-chip inline-flex mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
                <span>Careers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're looking for talented individuals who are passionate about BIM and construction technology.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {jobs.map((job) => (
                <div 
                  key={job.id}
                  className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <h2 className="text-2xl font-semibold mb-2 sm:mb-0">{job.title}</h2>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm">{job.type}</span>
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">{job.salary}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>Morphvison</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>Posted 2 weeks ago</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8">
                      {job.description}
                    </p>
                    
                    <Link href={`/careers/${job.id}`}>
                      <Button className="group">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Newsletter />
        <MadeByHumans />
      </main>
      <Footer />
    </div>
  );
} 