'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Calendar, Clock, Building, MapPin, 
  Layers, Lightbulb, Zap, Star, ImageIcon, Code, 
  Compass, Target, CheckCircle, BarChart, TrendingUp, UsersRound, Eye
} from 'lucide-react' // Removed Home, ChevronRight, Check as they are not directly used below
import { notFound } from 'next/navigation'
import { LayoutWrapper, SectionWrapper, SectionHeader } from '@/components/LayoutWrapper'
import { projects, Project as ProjectData } from '@/app/data/projects' 
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, 
} from "@/components/ui/carousel"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// --- Type Definition ---
interface Metric {
  value: string;
  label: string;
  icon?: React.ElementType;
}
interface Project extends ProjectData {
  metrics?: Metric[];
  disciplines?: {
    name: string;
    description: string;
    services?: string[];
    challenges?: string[];
    solutions?: string[];
  }[];
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

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: "easeOut" } };
const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };

// --- Project Page Component ---
export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const unwrappedParams = React.use(params)
  const project = projects.find(p => p.id === unwrappedParams.projectId) as Project | undefined
  
  if (!project) {
    notFound()
  }

  const heroImage = project.image || getProjectHeroImage(project.category);
  const projectMetrics = project.metrics || defaultMetrics;

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  const completionText = project.date?.includes('-') ? project.date : `Est. Completion: ${project.date || 'TBD'}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* --- Hero Section (No text overlay) --- */}
      <div className="relative h-[45vh] md:h-[55vh] w-full mb-0">
        <Image 
          src={heroImage}
          alt={`${project.title} hero image`}
          fill priority
          className="object-cover z-0"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent/10 z-10"></div> {/* Lighter gradient */}
      </div>

      {/* --- Consolidated Info Card Section --- */}
      <SectionWrapper className="-mt-16 md:-mt-24 relative z-20">
          <motion.div 
             className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-100 max-w-4xl mx-auto"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
          >
              <Badge variant="secondary" className="mb-3 inline-block px-3 py-1 text-sm bg-pulse-100 text-pulse-700 border-pulse-200 rounded-md">
                  {project.category}
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-gray-900 mb-3 md:mb-4">
                  {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                  {project.description}
              </p>
              {/* Metadata Grid within the card */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 pt-4 border-t border-gray-200">
                 {project.location && (
                     <div className="flex items-center text-sm text-gray-600">
                         <MapPin className="w-4 h-4 text-gray-400 mr-1.5 flex-shrink-0" /> 
                         <span>{project.location}</span>
                     </div>
                 )}
                 {completionText && (
                     <div className="flex items-center text-sm text-gray-600">
                         <Calendar className="w-4 h-4 text-gray-400 mr-1.5 flex-shrink-0" /> 
                         <span>{completionText}</span>
                     </div>
                 )}
                 {project.client && (
                     <div className="flex items-center text-sm text-gray-600">
                         <Building className="w-4 h-4 text-gray-400 mr-1.5 flex-shrink-0" /> 
                         <span>{project.client}</span>
                     </div>
                 )}
                 {project.duration && (
                     <div className="flex items-center text-sm text-gray-600">
                         <Clock className="w-4 h-4 text-gray-400 mr-1.5 flex-shrink-0" /> 
                         <span>{project.duration}</span>
                     </div>
                 )}
              </div>
          </motion.div>
      </SectionWrapper>

      <main className="pt-16 md:pt-20 pb-16 md:pb-24">
        {/* --- Main Content Layout (Sidebar on Right) --- */}
        <LayoutWrapper className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-20 items-start">
          
          {/* --- Left Column (Main Content) --- */}
          <div className="lg:col-span-2 space-y-16 md:space-y-20">

            {/* Project Overview */}
            <SectionWrapper id="overview">
              <SectionHeader num={1} title="Project Overview" icon={Eye} />
              <motion.div
                variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                className="prose max-w-none"
              >
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.overview || project.description}
                </p>
              </motion.div>
            </SectionWrapper>

            {/* Disciplines Tabs (if project has multiple disciplines) */}
            {project.disciplines && project.disciplines.length > 0 && (
              <SectionWrapper id="disciplines">
                <SectionHeader num={2} title="Project Disciplines" icon={Layers} />
                <Tabs defaultValue={project.disciplines[0].name.toLowerCase()} className="w-full">
                  <TabsList className="grid grid-cols-3 max-w-md mx-auto">
                    {project.disciplines.map((discipline) => (
                      <TabsTrigger
                        key={discipline.name}
                        value={discipline.name.toLowerCase()}
                        className="text-sm md:text-base"
                      >
                        {discipline.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {project.disciplines.map((discipline) => (
                    <TabsContent
                      key={discipline.name}
                      value={discipline.name.toLowerCase()}
                      className="mt-6 space-y-6"
                    >
                      <Card className="bg-white border border-gray-100 shadow-sm">
                        <CardContent className="pt-6">
                          <p className="text-gray-600 mb-6">{discipline.description}</p>
                          
                          {discipline.services && discipline.services.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold mb-3 text-blue-700">Services Provided</h4>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {discipline.services.map((service, idx) => (
                                  <Badge key={idx} className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                                    {service}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {discipline.challenges && discipline.challenges.length > 0 && (
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold mb-3">Challenges</h4>
                              <ul className="space-y-2">
                                {discipline.challenges.map((challenge, idx) => (
                                  <li key={idx} className="flex gap-2">
                                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <span>{challenge}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {discipline.solutions && discipline.solutions.length > 0 && (
                            <div>
                              <h4 className="text-lg font-semibold mb-3">Solutions</h4>
                              <ul className="space-y-2">
                                {discipline.solutions.map((solution, idx) => (
                                  <li key={idx} className="flex gap-2">
                                    <Zap className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    <span>{solution}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </SectionWrapper>
            )}

            {/* Swipable Project Gallery (Moved Earlier) */} 
            {project.images && project.images.length > 0 && (
              <SectionWrapper id="gallery">
                <SectionHeader num={1} title="Project Gallery" icon={ImageIcon} />
                <Carousel 
                  opts={{ align: "start", loop: project.images.length > 1 }}
                  className="w-full max-w-full -mx-4"
                >
                  <CarouselContent className="px-4">
                    {project.images.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                        <motion.div
                          variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                          className="overflow-hidden rounded-xl shadow-lg border border-gray-100 group relative aspect-[16/10] cursor-grab"
                        >
                          <Image
                            src={image}
                            alt={`${project.title} gallery image ${index + 1}`}
                            fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={handleImageError}
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Eye className="w-8 h-8 text-white drop-shadow-md" />
                          </div>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.images.length > 1 && (
                    <>
                      <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex bg-white/70 hover:bg-white text-gray-700" />
                      <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex bg-white/70 hover:bg-white text-gray-700" />
                    </>
                  )}
                </Carousel>
              </SectionWrapper>
            )}

            {/* Key Features Section (Revised Style) */} 
            {project.features && project.features.length > 0 && (
              <SectionWrapper id="features">
                <SectionHeader num={2} title="Key Features" icon={CheckCircle} />
                <motion.div 
                  className="columns-1 sm:columns-2 gap-5 space-y-5"
                  variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                >
                  {project.features.map((feature, index) => (
                    <motion.div key={index} variants={fadeInUp} className="break-inside-avoid">
                      {/* Simple Feature Item - No Card, more space efficient */}
                      <div className="flex items-start p-4 bg-gray-50 border border-gray-100 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-base">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </SectionWrapper>
            )}

            {/* Challenges & Solutions - Only show for projects without disciplines */}
            {(!project.disciplines || project.disciplines.length === 0) && project.challenges && project.challenges.length > 0 && (
              <SectionWrapper id="challenges">
                <SectionHeader num={3} title="Challenges & Solutions" icon={Lightbulb} />
                
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Challenges */}
                  <div>
                    <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl flex items-center">
                          <Target className="h-5 w-5 text-pulse-500 mr-2" />
                          Challenges
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex gap-2">
                              <CheckCircle className="h-5 w-5 text-pulse-500 flex-shrink-0 mt-0.5" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Solutions */}
                  {project.solutions && project.solutions.length > 0 && (
                    <div>
                      <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl flex items-center">
                            <Zap className="h-5 w-5 text-pulse-500 mr-2" />
                            Solutions
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {project.solutions.map((solution, idx) => (
                              <li key={idx} className="flex gap-2">
                                <CheckCircle className="h-5 w-5 text-pulse-500 flex-shrink-0 mt-0.5" />
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </SectionWrapper>
            )}

            {/* Results & Impact Section */} 
            <SectionWrapper id="results">
              <SectionHeader num={5} title="Results & Impact" icon={BarChart} />
              {projectMetrics.length > 0 && (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10"
                  variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                >
                  {projectMetrics.map((metric: Metric, index: number) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="text-left shadow-sm border border-gray-100 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex items-center p-4">
                        {metric.icon && 
                            <div className="mr-4 p-3 bg-pulse-100 rounded-lg">
                                <metric.icon className="w-6 h-6 text-pulse-600" />
                            </div>
                        }
                        <div>
                          <div className="text-2xl font-bold text-pulse-700">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                            {metric.label}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {project.results && (
                <Card className="bg-white border border-gray-100 shadow-sm rounded-xl">
                  <CardContent className="p-6">
                    <p className="text-gray-700 text-lg leading-relaxed">{project.results}</p>
                  </CardContent>
                </Card>
              )}
            </SectionWrapper>

          </div> 
          {/* --- End Left Column --- */}

          {/* --- Right Column (Sidebar) --- */}
          <aside className="lg:col-span-1 space-y-10 lg:sticky lg:top-28">
            {/* Technologies Card */} 
            {project.technologies && project.technologies.length > 0 && (
              <Card className="shadow-sm border border-gray-100 bg-white rounded-xl">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center text-gray-800">
                    <Code className="w-5 h-5 text-pulse-500 mr-2" /> Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => {
                      const logoUrl = getTechLogoUrl(tech);
                      return (
                        <Badge key={index} variant="secondary" className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-800 border-gray-200 font-medium text-sm rounded-md">
                          {logoUrl ? (
                            <Image src={logoUrl} alt={tech} width={16} height={16} className="mr-1.5 object-contain" onError={handleImageError} />
                          ) : (
                            <Code size={14} className="mr-1.5 text-gray-500" />
                          )}
                          <span>{tech}</span>
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Services Used Card */} 
            {project.services && project.services.length > 0 && (
              <Card className="shadow-sm border border-gray-100 bg-white rounded-xl">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center text-gray-800">
                    <Layers className="w-5 h-5 text-pulse-500 mr-2" /> Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <Link key={index} href={`/services/${service.toLowerCase().replace(/ /g, '-')}`} passHref>
                        <Badge 
                          variant="outline" 
                          className="text-sm px-3 py-1.5 bg-pulse-50 text-pulse-700 border-pulse-200 hover:bg-pulse-100 hover:border-pulse-400 transition-colors cursor-pointer font-medium rounded-md"
                        >
                          {service}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CTA Card */} 
            <Card className="shadow-lg border-0 bg-gradient-to-br from-pulse-600 to-pulse-800 text-white sticky top-28 rounded-xl">
              <CardContent className="p-6 text-center">
                <Star className="w-6 h-6 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-3">Have a Similar Project?</h3>
                <p className="text-sm text-pulse-100 mb-5">Let MorphVision bring your vision to life with expert BIM solutions.</p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center w-full group px-6 py-3 bg-white text-pulse-600 font-medium rounded-full hover:bg-gray-100 transition-all"
                >
                  Contact Our Experts 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </aside>
          {/* --- End Right Column --- */}
        </LayoutWrapper>

        {/* --- Final CTA Section --- */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-20 relative overflow-hidden mt-16"
        >
          {/* Gradient background with blurred shapes */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-700 opacity-90" />
          <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-3xl z-0" />
          <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-blue-300 opacity-20 rounded-full blur-2xl z-0" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <motion.div
              variants={staggerContainer}
              className="text-center"
            >
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Start Your Project</Badge>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
              >
                Ready to Transform Your Next Project?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/80 mb-10 max-w-3xl mx-auto"
              >
                Partner with us to achieve exceptional results for your construction project.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center group px-6 py-3 bg-white text-[#20133d] font-medium rounded-full hover:bg-opacity-90 transition-all"
                >
                  Get a Consultation
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center group px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-all"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

      </main>
    </div>
  )
} 