'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Calendar, Clock, Building, MapPin, 
  Layers, Lightbulb, Zap, Star, ImageIcon, Code, 
  Compass, Target, CheckCircle2, BarChart, TrendingUp, UsersRound, Eye
} from 'lucide-react'
import { notFound } from 'next/navigation'
import { projects, Project as ProjectData } from '@/app/data/projects' 
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, 
} from "@/components/ui/carousel"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

// --- Type Definition ---
interface Metric {
  value: string;
  label: string;
  icon?: React.ElementType;
}

interface Project extends ProjectData {
  metrics?: Metric[];
}

// --- Helper Functions & Data ---
const FALLBACK_IMAGE = '/background-section2.png';

const getProjectHeroImage = (category: string): string => {
  const imageBaseUrl = 'https://images.unsplash.com'
  const categoryImageMap: Record<string, string> = {
    'Healthcare': `${imageBaseUrl}/photo-1538108149393-fbbd81895907?w=1920&q=80`,
    'Pharmaceutical': `${imageBaseUrl}/photo-1532187643603-ba119ca4109e?w=1920&q=80`,
    'Industrial': `${imageBaseUrl}/photo-1497366754035-f200968a6e72?w=1920&q=80`,
    'Commercial': `${imageBaseUrl}/photo-1486406146926-c627a92ad1ab?w=1920&q=80`,
    'Residential': `${imageBaseUrl}/photo-1600585154340-be6161a56a0c?w=1920&q=80`,
    'Infrastructure': `${imageBaseUrl}/photo-1516788833579-b414f9801299?w=1920&q=80`,
    'Scan to BIM': `${imageBaseUrl}/photo-1503387762-592deb58ef4e?w=1920&q=80`,
  }
  return categoryImageMap[category] || FALLBACK_IMAGE;
}

const techLogos: Record<string, string> = {
  'revit': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Autodesk_Revit_Logo.svg/128px-Autodesk_Revit_Logo.svg.png',
  'navisworks': 'https://www.vectorlogo.zone/logos/autodesknavisworks/autodesknavisworks-icon.svg',
  'bim 360': 'https://cdn.worldvectorlogo.com/logos/autodesk-bim-360.svg',
  'dynamo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dynamo_logo.svg/128px-Dynamo_logo.svg.png',
  'autocad': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/AutoCAD_logo.svg/128px-AutoCAD_logo.svg.png',
  'civil 3d': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Autodesk_Civil_3D_logo.svg/128px-Autodesk_Civil_3D_logo.svg.png',
  'solibri': 'https://solibri.com/images/logo/solibri-logo-blue.svg',
  'unreal engine': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Unreal_Engine_Logo.svg/128px-Unreal_Engine_Logo.svg.png'
}

const getTechLogoUrl = (techName: string): string | null => {
  const lowerTechName = techName.toLowerCase();
  if (techLogos[lowerTechName]) return techLogos[lowerTechName];
  const keys = Object.keys(techLogos);
  for (const key of keys) {
    if (lowerTechName.includes(key) || key.includes(lowerTechName)) {
      return techLogos[key];
    }
  }
  return null;
}

const defaultMetrics: Metric[] = [
  { value: "30%", label: "Rework Reduction", icon: TrendingUp },
  { value: "15%", label: "Faster Completion", icon: Clock },
  { value: "<1%", label: "Clash Rate", icon: Target },
  { value: "+20%", label: "Efficiency Gain", icon: UsersRound },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const unwrappedParams = React.use(params);
  const project = projects.find(p => p.id === unwrappedParams.projectId);
  
  if (!project) {
    return notFound();
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  const projectWithMetrics: Project = {
    ...project,
    metrics: defaultMetrics
  };

  return (
    <div className="bg-white min-h-screen pt-8">
      {/* Hero Section */}
      <section className='section-container pb-2'>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-4 sm:mt-8"
        >
          <div
            className="bg-no-repeat bg-cover bg-center p-6 sm:p-8 md:p-12 min-h-[300px] sm:min-h-[400px] flex flex-col relative flex-grow"
            style={{
              backgroundImage: `url("${getProjectHeroImage(project.category)}")`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          >
            {/* Dark overlay with backdrop filter */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 mix-blend-multiply"
              style={{ backdropFilter: 'blur(0px) brightness(0.8)' }}
            />
            
            {/* Content Section */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.div variants={fadeInUp}>
                  <Badge
                    className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-display text-4xl md:text-6xl font-bold mb-6 text-white"
                >
                  <span className="block">{project.title}</span>
                </motion.h1>
                
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap gap-5 mb-8"
                >
                  <div className="flex items-center text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                    <MapPin className="h-4 w-4 mr-2 text-white/70" />
                    <span>{project.location}</span>
                  </div>
                  {project.client && (
                    <div className="flex items-center text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                      <Building className="h-4 w-4 mr-2 text-white/70" />
                      <span>{project.client}</span>
                    </div>
                  )}
                  {project.date && (
                    <div className="flex items-center text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                      <Calendar className="h-4 w-4 mr-2 text-white/70" />
                      <span>{project.date}</span>
                    </div>
                  )}
                </motion.div>
                
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-white/90 mb-8 max-w-3xl"
                >
                  {project.description}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Project Details (2/3 width) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="lg:col-span-2 space-y-8"
            >
              {/* Project Overview */}
              <motion.div variants={fadeInUp} className="bg-white rounded-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
                  Project Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.overview || project.description}
                </p>

                {/* Key Metrics */}
                {projectWithMetrics.metrics && (
                  <div className="mt-8">
                    <h3 className="text-xl font-display font-bold mb-4 text-gray-900">
                      Project Metrics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {projectWithMetrics.metrics.map((metric, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                          {metric.icon && (
                            <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                              <metric.icon className="h-5 w-5 text-blue-600" />
                            </div>
                          )}
                          <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Technologies Used */}
              {project.technologies && project.technologies.length > 0 && (
                <motion.div variants={fadeInUp} className="bg-white rounded-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, index) => {
                      const logoUrl = getTechLogoUrl(tech);
                      return (
                        <div key={index} className="flex items-center bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                          {logoUrl ? (
                            <Image 
                              src={logoUrl} 
                              alt={tech} 
                              width={24} 
                              height={24} 
                              className="mr-2"
                              onError={handleImageError}
                            />
                          ) : (
                            <Code className="w-5 h-5 mr-2 text-gray-500" />
                          )}
                          <span className="text-gray-700">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Challenges & Solutions */}
              {(project.challenges || project.solutions) && (
                <motion.div variants={fadeInUp} className="bg-white rounded-lg p-8 border border-gray-100">
                  <Tabs defaultValue="challenges" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="challenges">Challenges</TabsTrigger>
                      <TabsTrigger value="solutions">Solutions</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="challenges" className="space-y-4">
                      <h3 className="text-xl font-display font-bold mb-4 text-gray-900">
                        Project Challenges
                      </h3>
                      {project.challenges ? (
                        <ul className="space-y-4">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                                <Lightbulb className="h-3 w-3 text-white" />
                              </div>
                              <span className="ml-3 text-gray-700">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 italic">No specific challenges documented for this project.</p>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="solutions" className="space-y-4">
                      <h3 className="text-xl font-display font-bold mb-4 text-gray-900">
                        Our Solutions
                      </h3>
                      {project.solutions ? (
                        <ul className="space-y-4">
                          {project.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                                <CheckCircle2 className="h-3 w-3 text-white" />
                              </div>
                              <span className="ml-3 text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 italic">No specific solutions documented for this project.</p>
                      )}
                    </TabsContent>
                  </Tabs>
                </motion.div>
              )}

              {/* Project Images */}
              {project.images && project.images.length > 0 && (
                <motion.div variants={fadeInUp} className="bg-white rounded-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
                    Project Gallery
                  </h2>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <div className="overflow-hidden rounded-lg aspect-square relative">
                              <Image
                                src={image || FALLBACK_IMAGE}
                                alt={`Project image ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                onError={handleImageError}
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-4 gap-2">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  </Carousel>
                </motion.div>
              )}

              {/* Disciplines Section */}
              {project.disciplines && project.disciplines.length > 0 && (
                <motion.div variants={fadeInUp} className="bg-white rounded-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
                    Project Disciplines
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {project.disciplines.map((discipline, index) => (
                      <AccordionItem key={index} value={`discipline-${index}`}>
                        <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-blue-600">
                          {discipline.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-2 pb-4 space-y-4">
                            <p className="text-gray-700">{discipline.description}</p>
                            
                            {discipline.services && discipline.services.length > 0 && (
                              <div className="mt-4">
                                <h4 className="text-md font-semibold text-gray-900 mb-2">Services Provided</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {discipline.services.map((service, idx) => (
                                    <li key={idx} className="flex items-center">
                                      <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                                      <span className="text-gray-700">{service}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {discipline.challenges && discipline.challenges.length > 0 && (
                              <div className="mt-4">
                                <h4 className="text-md font-semibold text-gray-900 mb-2">Challenges</h4>
                                <ul className="space-y-2">
                                  {discipline.challenges.map((challenge, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <Lightbulb className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                                      <span className="text-gray-700">{challenge}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {discipline.solutions && discipline.solutions.length > 0 && (
                              <div className="mt-4">
                                <h4 className="text-md font-semibold text-gray-900 mb-2">Solutions</h4>
                                <ul className="space-y-2">
                                  {discipline.solutions.map((solution, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                                      <span className="text-gray-700">{solution}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              )}
            </motion.div>
            
            {/* Right Column - Sidebar (1/3 width) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="lg:col-span-1 space-y-8"
            >
              {/* Project Info Card */}
              <div className="bg-white rounded-lg p-8 border border-gray-100 sticky top-24">
                <h2 className="text-2xl font-display font-bold mb-6 text-gray-900">
                  Project Information
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Location</h3>
                      <p className="text-gray-700">{project.location}</p>
                    </div>
                  </div>
                  
                  {project.client && (
                    <div className="flex items-start">
                      <Building className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">Client</h3>
                        <p className="text-gray-700">{project.client}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.date && (
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">Date</h3>
                        <p className="text-gray-700">{project.date}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.duration && (
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">Duration</h3>
                        <p className="text-gray-700">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Services Provided</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <Badge 
                          key={index}
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    asChild 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link href="/contact">
                      Request Similar Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Related Projects */}
              <div className="bg-white rounded-lg p-8 border border-gray-100">
                <h2 className="text-xl font-display font-bold mb-6 text-gray-900">
                  Related Projects
                </h2>
                
                <div className="space-y-4">
                  {projects
                    .filter(p => 
                      p.id !== project.id && 
                      (p.category === project.category || 
                       (p.tags && project.tags && p.tags.some(tag => project.tags!.includes(tag))))
                    )
                    .slice(0, 3)
                    .map((relatedProject) => (
                      <Link 
                        key={relatedProject.id} 
                        href={`/projects/${relatedProject.id}`}
                        className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-blue-50 border border-gray-200 transition-colors group"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                            {relatedProject.title}
                          </h3>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
                            <span>{relatedProject.location}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  
                  {projects.filter(p => 
                    p.id !== project.id && 
                    (p.category === project.category || 
                     (p.tags && project.tags && p.tags.some(tag => project.tags!.includes(tag))))
                  ).length === 0 && (
                    <p className="text-sm text-gray-500 italic">No related projects available.</p>
                  )}
                  
                  <Link 
                    href="/projects"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-2"
                  >
                    View all projects
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Transform Your Next Project?
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Partner with us to achieve exceptional results for your construction project with our expert BIM solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                <Link href="/contact">
                  Get a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}