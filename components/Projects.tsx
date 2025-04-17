'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { useRouter } from "next/navigation";
import { ArrowRight, Filter, Search, Building2, Hospital, Factory, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; 
import { projects } from "@/app/data/projects";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2, ease: 'easeOut' }
  }
};

// Categories with icons
const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "Healthcare", label: "Healthcare", icon: Hospital },
  { id: "Pharmaceutical", label: "Pharmaceutical", icon: Factory },
  { id: "Industrial", label: "Industrial", icon: Building2 }
];

const Projects = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [displayLimit, setDisplayLimit] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter projects by category and search term
  const filteredProjects = projects
    .filter(project => activeFilter === "all" || project.category === activeFilter)
    .filter(project => 
      searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  // Determine how many projects to display
  const projectsToDisplay = filteredProjects.slice(0, displayLimit);
  const hasMoreProjects = filteredProjects.length > displayLimit;

  // Handle showing more projects
  const handleShowMore = () => {
    if (isExpanded) {
      setDisplayLimit(6);
      setIsExpanded(false);
      // Scroll back to top of projects section
      document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setDisplayLimit(filteredProjects.length);
      setIsExpanded(true);
    }
  };

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="w-full bg-white py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-2">
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-4 sm:mt-8">
            <div
              className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[400px] flex flex-col"
              style={{
                backgroundImage: "url('/pattern-2.jpg')",
              }}
            >
              

              <div className="relative z-10 max-w-3xl text-white mt-8 sm:mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                    Our Portfolio
                  </Badge>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
                    World-Class BIM Projects
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl">
                    Explore our comprehensive portfolio of successful BIM projects across various sectors.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* White box at the bottom with overflow - Hidden on mobile */}
            <div className="hidden sm:block w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>

          {/* Featured Projects Highlight */}
          <div className="mb-16 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Featured Projects
                </Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                  Our Showcase Work
                </h2>
              </div>
              
              <p className="text-gray-600 max-w-lg mt-4 md:mt-0">
                Discover our most impactful projects that showcase our expertise in various sectors of BIM implementation.
              </p>
            </div>
            
            {/* Featured Grid - 2 large cards in a grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  onClick={() => handleProjectClick(project.id)}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-80">
                    <Image
                      src={project.image || '/background-section2.png'}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <div className="flex gap-2 mb-3">
                        <Badge className="bg-white/90 text-gray-800 hover:bg-white">
                          {project.category}
                        </Badge>
                        {project.tags && project.tags[0] && (
                          <Badge className="bg-blue-500/90 text-white hover:bg-blue-600">
                            {project.tags[0].split('-').join(' ')}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                        <span>View Project</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 rounded-full px-5 transition-all ${
                    activeFilter === category.id 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {React.createElement(category.icon, { className: "w-4 h-4" })}
                  {category.label}
                </Button>
              ))}
            </div>
            
            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Grid */}
          <motion.div
            id="projects-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {projectsToDisplay.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariant}
                whileHover="hover"
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image || '/background-section2.png'}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 text-gray-800 hover:bg-white">
                      {project.category}
                    </Badge>
                    {project.tags && project.tags[0] && (
                      <Badge className="bg-blue-500/90 text-white hover:bg-blue-600">
                        {project.tags[0].split('-').join(' ')}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {project.location}
                    </span>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Show More / Show Less Button */}
          {filteredProjects.length > 6 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShowMore}
                className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {/* Background animation on hover */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative flex items-center">
                  {isExpanded ? (
                    <>Show Less <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }} className="ml-2"><ArrowRight className="h-5 w-5" /></motion.div></>
                  ) : (
                    <>View All Projects <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </span>
              </motion.button>
            </motion.div>
          )}
          
          {/* No results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600">Try changing your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient background with blurred shapes */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-700 opacity-90" />
        <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-3xl z-0" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-blue-300 opacity-20 rounded-full blur-2xl z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Ready to Collaborate?</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Let's Transform Your Vision Into Reality
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-3xl">
              Whether you need comprehensive BIM services or specialized expertise, our team is ready to deliver excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="flex items-center justify-center group px-6 py-3 bg-white text-[#20133d] font-medium rounded-full hover:bg-opacity-90 transition-all">
                Request a Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="flex items-center justify-center group px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-all">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;