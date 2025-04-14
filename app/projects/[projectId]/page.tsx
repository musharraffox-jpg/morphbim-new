'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Calendar, Check, Clock, Building, MapPin, Home, ChevronRight, 
  Layers, Lightbulb, Zap, Star, ImageIcon, Code, 
  Compass, Target, CheckCircle, BarChart, TrendingUp, UsersRound,
  Eye
} from 'lucide-react'
import { notFound } from 'next/navigation'
import { LayoutWrapper, SectionWrapper } from '@/components/LayoutWrapper'
import { projects, Project as ProjectData } from '@/app/data/projects' // Import the type
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious, 
} from "@/components/ui/carousel" // Import Carousel

// --- Type Definition (including metrics) ---

interface Metric {
  value: string;
  label: string;
  icon?: React.ElementType;
}

interface Project extends ProjectData {
  metrics?: Metric[]; // Add optional metrics property
}

// --- Helper Functions & Data ---

const FALLBACK_IMAGE = '/background-section2.png'; // Fallback for project images

// Consistent Image Fetching for Project Hero
const getProjectHeroImage = (category: string): string => {
  const imageBaseUrl = 'https://images.unsplash.com'
  const categoryImageMap: Record<string, string> = {
    'Healthcare': `${imageBaseUrl}/photo-1538108149393-fbbd81895907?w=1920&q=80`,
    'Pharmaceutical': `${imageBaseUrl}/photo-1532187643603-ba119ca4109e?w=1920&q=80`,
    'Industrial': `${imageBaseUrl}/photo-1497366754035-f200968a6e72?w=1920&q=80`,
    'Data Center': `${imageBaseUrl}/photo-1558494949-ef010cbdcc31?w=1920&q=80`,
    'Commercial': `${imageBaseUrl}/photo-1486406146926-c627a92ad1ab?w=1920&q=80`,
    'Residential': `${imageBaseUrl}/photo-1600585154340-be6161a56a0c?w=1920&q=80`,
    'Infrastructure': `${imageBaseUrl}/photo-1516788833579-b414f9801299?w=1920&q=80`,
  }
  return categoryImageMap[category] || FALLBACK_IMAGE;
}

// Simplified Tool Logo fetching (URLs only)
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
  return null; // Return null if no logo found
}

// Default metrics for consistency
const defaultMetrics: Metric[] = [
  { value: "30%", label: "Reduction in Rework", icon: TrendingUp },
  { value: "15%", label: "Schedule Improvement", icon: Clock },
  { value: "<1%", label: "Clash Rate", icon: Target },
  { value: "+20%", label: "Team Efficiency", icon: UsersRound },
];

// Animation Variants (Subtle)
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

// --- Reusable Section Header Component ---
interface SectionHeaderProps {
  num?: number | string;
  title: string;
  icon?: React.ElementType;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ num, title, icon: Icon }) => (
  <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
    {num && (
      <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1 rounded-full bg-pulse-100 border border-pulse-200">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white text-xs font-bold">{num}</span>
        <span className="font-medium text-pulse-700 text-sm tracking-wide uppercase">{title}</span>
        {Icon && <Icon className="w-4 h-4 text-pulse-500 ml-1" />}
      </div>
    )}
    {!num && Icon && (
       <Icon className="w-7 h-7 text-pulse-500 mr-0" />
    )}
    {!num && !Icon && (
        <h2 className="text-3xl font-semibold text-gray-900 flex items-center">
             {title}
           </h2>
    ) }
     {/* Render title differently if num is not provided */}
     {!num && Icon && (
       <h2 className="text-3xl font-semibold text-gray-900 flex items-center">
         {title}
       </h2>
     )}
    <div className="flex-1 h-px bg-gradient-to-r from-pulse-200 to-transparent"></div>
  </div>
);

// --- Project Page Component ---

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const unwrappedParams = React.use(params)
  // Use the extended Project type here
  const project = projects.find(p => p.id === unwrappedParams.projectId) as Project | undefined
  
  if (!project) {
    notFound()
  }

  const heroImage = project.image || getProjectHeroImage(project.category);
  const projectMetrics = project.metrics || defaultMetrics;

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  // Format Completion Date
  const completionText = project.date?.includes('-') ? project.date : `Est. Completion: ${project.date || 'TBD'}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* --- Hero Section --- */}
      <div className="relative h-[55vh] md:h-[70vh] w-full flex items-end text-white mb-12 md:mb-16">
        <Image 
          src={heroImage}
          alt={`${project.title} hero image`}
          fill priority
          className="object-cover z-0"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent/10 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 lg:p-12 z-20">
          <LayoutWrapper>
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Badge variant="secondary" className="mb-3 text-sm px-3 py-1 bg-white/20 text-white backdrop-blur-sm border-white/30">
                {project.category}
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-2 md:mb-3 text-shadow-lg">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </LayoutWrapper>
        </div>
      </div>

      {/* --- Key Metadata Row --- */}
      <SectionWrapper className="mb-16 md:mb-20 -mt-4 md:-mt-8 relative z-30">
          <motion.div 
             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             >
             {project.location && (
                 <div className="flex items-center">
                     <MapPin className="w-5 h-5 text-pulse-500 mr-2 flex-shrink-0" /> 
                     <span className="text-gray-700 text-sm font-medium">{project.location}</span>
                 </div>
             )}
             {completionText && (
                 <div className="flex items-center">
                     <Calendar className="w-5 h-5 text-pulse-500 mr-2 flex-shrink-0" /> 
                     <span className="text-gray-700 text-sm font-medium">{completionText}</span>
                 </div>
             )}
             {project.client && (
                 <div className="flex items-center">
                     <Building className="w-5 h-5 text-pulse-500 mr-2 flex-shrink-0" /> 
                     <span className="text-gray-700 text-sm font-medium">{project.client}</span>
                 </div>
             )}
              {project.duration && (
                  <div className="flex items-center">
                      <Clock className="w-5 h-5 text-pulse-500 mr-2 flex-shrink-0" /> 
                      <span className="text-gray-700 text-sm font-medium">{project.duration}</span>
                  </div>
              )}
          </motion.div>
      </SectionWrapper>

      <main className="pb-16 md:pb-24">
        {/* --- Main Content Layout (Sidebar on Right) --- */}
        <LayoutWrapper className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-20 items-start">
          
          {/* --- Left Column (Main Content) --- */}
          <div className="lg:col-span-2 space-y-16 md:space-y-20">

            {/* Overview Section */} 
            <SectionWrapper id="overview" className="pt-0">
              {/* Using simpler header for overview - no number chip */}
              <SectionHeader title="Project Overview" icon={Compass} />
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>{project.overview || project.description}</p>
                {/* Add more detailed paragraphs if available in project.details or similar */}
              </div>
            </SectionWrapper>

            {/* Key Features Section */} 
            {project.features && project.features.length > 0 && (
              <SectionWrapper id="features">
                <SectionHeader num={1} title="Key Features" icon={CheckCircle} />
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                >
                  {project.features.map((feature, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      {/* Smoother Corner Card */}
                      <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl">
                        <CardContent className="p-5 flex items-start">
                          <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-base">{feature}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </SectionWrapper>
            )}

            {/* Challenges & Solutions */} 
            {(project.challenges && project.challenges.length > 0) || (project.solutions && project.solutions.length > 0) ? (
                <SectionWrapper id="challenges-solutions">
                    {project.challenges && project.challenges.length > 0 && (
                      <div className="mb-12 md:mb-16">
                         <SectionHeader num={2} title="Challenges" icon={Lightbulb} />
                         <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                             <AccordionItem value="challenges-item" className="border-b-0">
                                 <AccordionTrigger className="px-5 py-4 text-lg font-medium hover:no-underline text-gray-800 bg-gray-50/50 hover:bg-gray-100 transition-colors">
                                     Key Project Hurdles
                                 </AccordionTrigger>
                                 <AccordionContent className="px-5 pb-5 pt-4">
                                     <ul className="space-y-3">
                                         {project.challenges.map((challenge, index) => (
                                             <li key={index} className="flex items-start text-gray-700">
                                                 <Target className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                                 <span className="text-base">{challenge}</span>
                                             </li>
                                         ))}
                                     </ul>
                                 </AccordionContent>
                             </AccordionItem>
                         </Accordion>
                      </div>
                     )} 
                    
                     {project.solutions && project.solutions.length > 0 && (
                         <div>
                             <SectionHeader num={3} title="Solutions" icon={Zap} />
                             <ol className="space-y-6 border-l-2 border-pulse-200 pl-8 relative">
                               {/* Vertical line */}
                               <div className="absolute top-2 bottom-2 left-[1px] w-0.5 bg-pulse-200"></div>
                                 {project.solutions.map((solution, index) => (
                                     <motion.li 
                                         key={index} 
                                         className="relative pl-4 pb-2"
                                         variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}
                                     >
                                         {/* Dot on the line */}
                                         <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-pulse-500 rounded-full border-4 border-white ring-1 ring-pulse-200"></div>
                                         <p className="text-gray-700 text-base leading-relaxed">{solution}</p>
                                     </motion.li>
                                 ))}
                             </ol>
                         </div>
                     )}
                </SectionWrapper>
            ) : null}

            {/* Results & Impact Section */} 
            <SectionWrapper id="results">
              <SectionHeader num={4} title="Results & Impact" icon={BarChart} />
              {projectMetrics.length > 0 && (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10"
                  variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                >
                  {projectMetrics.map((metric: Metric, index: number) => (
                    <motion.div key={index} variants={fadeInUp}>
                       {/* Updated Metric Card Style */}
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

            {/* Swipable Project Gallery */} 
            {project.images && project.images.length > 0 && (
              <SectionWrapper id="gallery">
                <SectionHeader num={5} title="Project Gallery" icon={ImageIcon} />
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
                      <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
                      <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
                    </>
                  )}
                </Carousel>
              </SectionWrapper>
            )}
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
                <Button asChild size="lg" variant="secondary" className="w-full bg-white text-pulse-600 hover:bg-gray-100 font-semibold group rounded-lg">
                  <Link href="/contact">
                    Contact Our Experts 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
          {/* --- End Right Column --- */}
        </LayoutWrapper>

        {/* --- Final CTA Section --- */}
        {/* Keeping this for now, can be removed if preferred */}
        <SectionWrapper className="pt-16 pb-16 md:pt-20 md:pb-20 mt-16 md:mt-20 bg-gray-50/50 border-t border-gray-100">
           <div className="text-center max-w-2xl mx-auto">
             <motion.div 
               variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
             >
               <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gray-900">Start Your Next Success Story</h2>
               <p className="text-lg text-gray-600 mb-8">
                 Partner with us to achieve exceptional results for your construction project.
               </p>
               <Button asChild size="lg" className="bg-pulse-600 hover:bg-pulse-700 text-white font-semibold group px-8 py-3 rounded-lg">
                 <Link href="/contact">
                   Get a Consultation
                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
               </Button>
             </motion.div>
           </div>
         </SectionWrapper>

      </main>
    </div>
  )
} 