'use client'

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Define the Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  duration: string;
  client: string;
  highlights: string[];
  services: {
    title: string;
    description: string;
  }[];
}

// Export the projects array so it can be imported by other components
export const projects: Project[] = [
  {
    id: "project1",
    title: "Modern Office Complex",
    description: "A state-of-the-art office complex featuring sustainable design and advanced BIM integration. The project showcases innovative space utilization and energy-efficient systems.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "commercial",
    year: "2023",
    duration: "18 months",
    client: "Skyline Development Corp",
    highlights: [
      "Implemented 4D BIM for construction sequencing",
      "Achieved 30% reduction in coordination issues",
      "Integrated sustainable design features",
      "Real-time collaboration across 12 disciplines"
    ],
    services: [
      {
        title: "BIM Modeling",
        description: "Comprehensive 3D modeling of all building systems"
      },
      {
        title: "Clash Detection",
        description: "Automated clash detection and resolution"
      },
      {
        title: "4D Construction Sequencing",
        description: "Visualization of construction timeline and process"
      }
    ]
  },
  {
    id: "project2",
    title: "Residential Tower",
    description: "Luxury residential tower with innovative space utilization and smart home technology. The project features premium amenities and sustainable design elements.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "residential",
    year: "2023",
    duration: "24 months",
    client: "Luxury Living Developments",
    highlights: [
      "Smart home integration throughout",
      "Energy-efficient building envelope",
      "Premium amenities and facilities",
      "Sustainable materials and systems"
    ],
    services: [
      {
        title: "Architectural BIM",
        description: "Detailed modeling of residential spaces"
      },
      {
        title: "MEP Coordination",
        description: "Integration of mechanical, electrical, and plumbing systems"
      },
      {
        title: "Sustainability Analysis",
        description: "Environmental impact assessment and optimization"
      }
    ]
  },
  {
    id: "project3",
    title: "Healthcare Facility",
    description: "Modern healthcare facility designed for optimal patient care and staff efficiency. The project incorporates advanced medical technology and patient-centered design.",
    image: "https://images.unsplash.com/photo-1555952238-7d76baafc0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "healthcare",
    year: "2022",
    duration: "36 months",
    client: "HealthCare Innovations",
    highlights: [
      "Patient-centered design approach",
      "Advanced medical technology integration",
      "Efficient staff workflow optimization",
      "Compliance with healthcare regulations"
    ],
    services: [
      {
        title: "Healthcare BIM",
        description: "Specialized modeling for healthcare facilities"
      },
      {
        title: "Equipment Planning",
        description: "Integration of medical equipment and systems"
      },
      {
        title: "Compliance Documentation",
        description: "Documentation for regulatory compliance"
      }
    ]
  },
  {
    id: "project4",
    title: "Industrial Complex",
    description: "Large-scale industrial complex with advanced automation and safety features. The project demonstrates efficient production flow and sustainable industrial design.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "industrial",
    year: "2022",
    duration: "30 months",
    client: "Industrial Solutions Inc",
    highlights: [
      "Automated production systems",
      "Enhanced safety protocols",
      "Optimized material flow",
      "Sustainable industrial practices"
    ],
    services: [
      {
        title: "Industrial BIM",
        description: "Specialized modeling for industrial facilities"
      },
      {
        title: "Process Flow Optimization",
        description: "Analysis and optimization of production processes"
      },
      {
        title: "Safety System Integration",
        description: "Implementation of safety systems and protocols"
      }
    ]
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
  { id: "healthcare", label: "Healthcare" },
  { id: "industrial", label: "Industrial" }
];

const Projects = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various sectors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className="min-w-[120px]"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <Button variant="ghost" className="group">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 