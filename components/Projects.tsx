import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Factory, 
  Map as MapIcon, 
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  ChevronRight
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  image: string;
  date: string;
  duration: string;
  client: string;
  icon: React.ElementType;
  highlights: string[];
  services: string[];
}

export const projects: Project[] = [
  {
    id: "skyline-tower",
    title: "Skyline Tower Complex",
    type: "High-Rise Buildings",
    location: "New York, USA",
    description: "A state-of-the-art mixed-use development featuring three interconnected towers with a total floor area of 500,000 sq ft. The project showcases advanced BIM implementation for complex structural systems and MEP coordination.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2023",
    duration: "18 months",
    client: "Skyline Development Corp",
    icon: Building2,
    highlights: [
      "Implemented 4D BIM for construction sequencing",
      "Achieved 30% reduction in coordination issues",
      "Integrated sustainable design features",
      "Real-time collaboration across 12 disciplines"
    ],
    services: [
      "BIM Modeling",
      "Clash Detection",
      "4D Construction Sequencing",
      "MEP Coordination",
      "Sustainability Analysis",
      "As-Built Documentation"
    ]
  },
  {
    id: "pharma-facility",
    title: "Pharmaceutical Manufacturing Facility",
    type: "Pharmaceutical",
    location: "Singapore",
    description: "A GMP-compliant pharmaceutical manufacturing facility with advanced clean room technology. BIM was crucial for ensuring compliance with strict regulatory requirements and optimizing operational efficiency.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2023",
    duration: "24 months",
    client: "Global Pharma Solutions",
    icon: Factory,
    highlights: [
      "GMP compliance validation through BIM",
      "Optimized clean room layouts",
      "Enhanced operational efficiency",
      "Comprehensive facility management system"
    ],
    services: [
      "Process Flow Optimization",
      "Clean Room Design",
      "HVAC System Modeling",
      "Equipment Layout",
      "Compliance Documentation",
      "FM Integration"
    ]
  },
  {
    id: "metro-station",
    title: "Metro Station Expansion",
    type: "Infrastructure",
    location: "London, UK",
    description: "Expansion of an existing metro station to accommodate increased passenger capacity. The project utilized BIM for complex underground construction and integration with existing infrastructure.",
    image: "https://images.unsplash.com/photo-1555952238-7d76baafc0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2022",
    duration: "36 months",
    client: "London Transport Authority",
    icon: MapIcon,
    highlights: [
      "Underground construction optimization",
      "Minimal disruption to existing services",
      "Enhanced passenger flow modeling",
      "Integration with existing infrastructure"
    ],
    services: [
      "Underground Modeling",
      "Structural Analysis",
      "Passenger Flow Simulation",
      "Utility Coordination",
      "Construction Planning",
      "As-Built Documentation"
    ]
  }
];

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section className="w-full py-20 bg-white" id="projects">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>Projects</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Showcasing BIM Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our portfolio of successful projects where we've applied advanced BIM technologies to deliver exceptional results across various industries.
          </p>
        </div>

        {/* Latest Projects Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Latest Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 inline-block mb-3">
                      {project.type}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">{project.title}</h4>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapIcon className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <button
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="inline-flex items-center text-pulse-500 font-medium text-sm hover:text-pulse-600 transition-colors"
                  >
                    View Case Study
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">All Projects</h2>
            <div className="flex gap-2">
              {["All Projects", "High-Rise Buildings", "Pharmaceutical", "Infrastructure"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-pulse-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="rounded-2xl overflow-hidden shadow-elegant mb-4">
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full mb-2">
                        {project.type}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <MapIcon className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-pulse-500 group-hover:text-pulse-600">
                  <span className="text-sm font-medium">View Case Study</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 