'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Check, Home, ChevronRight, Sparkles, Layers, Wrench, Briefcase, MessageSquare, 
  CheckCircle, Star, Phone, Target // Added Target
} from 'lucide-react' // Keeping essential icons
import { notFound } from 'next/navigation'
import { LayoutWrapper, SectionWrapper, SectionHeader } from '@/components/LayoutWrapper'
import { services, Service } from '@/app/data/services' // Assuming Service type is exported
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// --- Helper Functions & Data ---

const FALLBACK_IMAGE = '/background-section1.png'; // Use the specified fallback

// Consistent Image Fetching with Fallback
const getServiceImagery = (id: string): { hero: string; content: string } => {
  const imageBaseUrl = 'https://images.unsplash.com'
  const defaultImages = { hero: FALLBACK_IMAGE, content: FALLBACK_IMAGE }
  const serviceImages: Record<string, { hero: string; content: string }> = {
    'pharmaceutical': { 
      hero: `${imageBaseUrl}/photo-1579165466941-7493f1c65016?w=1920&q=80`, 
      content: `${imageBaseUrl}/photo-1567427017947-545c5f8d16cb?w=1080&q=80` 
    },
    'industrial': { 
      hero: `${imageBaseUrl}/photo-1581092916730-2c35b55a7ae7?w=1920&q=80`, 
      content: `${imageBaseUrl}/photo-1611641625213-63e070f5079e?w=1080&q=80` 
    },
    'infrastructure': { 
      hero: `${imageBaseUrl}/photo-1516788833579-b414f9801299?w=1920&q=80`, 
      content: `${imageBaseUrl}/photo-1621929747188-0b4dc28498d2?w=1080&q=80` 
    },
    'bim-modeling-coordination': {
      hero: `${imageBaseUrl}/photo-1554224154-26032ffc0d07?w=1920&q=80`, 
      content: `${imageBaseUrl}/photo-1593642634524-b40b5baae6bb?w=1080&q=80` 
    },
    'pre-construction': {
      hero: `${imageBaseUrl}/photo-1503387762-592deb58ef4e?w=1920&q=80`, 
      content: `${imageBaseUrl}/photo-1487611459768-bd414656ea10?w=1080&q=80` 
    },
    'facility-management': {
      hero: `${imageBaseUrl}/photo-1565951866579-ae78953b8a3a?w=1920&q=80`, 
      content: `${imageBaseUrl}/photo-1556761175-b413da4baf72?w=1080&q=80` 
    }
  }
  return serviceImages[id] || defaultImages;
}

// Simplified Tool Logos - prioritize official logos, fallback to text
const toolLogos: Record<string, string> = {
  'Autodesk Revit': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Autodesk_Revit_Logo.svg/128px-Autodesk_Revit_Logo.svg.png',
  'Navisworks': 'https://www.vectorlogo.zone/logos/autodesknavisworks/autodesknavisworks-icon.svg',
  'BIM 360': 'https://cdn.worldvectorlogo.com/logos/autodesk-bim-360.svg',
  'Dynamo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dynamo_logo.svg/128px-Dynamo_logo.svg.png',
  'Tekla Structures': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tekla_Structures_logo.svg/128px-Tekla_Structures_logo.svg.png',
  'Solibri Model Checker': 'https://solibri.com/images/logo/solibri-logo-blue.svg',
  'Civil 3D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Autodesk_Civil_3D_logo.svg/128px-Autodesk_Civil_3D_logo.svg.png',
  'Plant 3D': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Autodesk_Plant_3D_logo.svg/128px-Autodesk_Plant_3D_logo.svg.png',
  'InfraWorks': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Autodesk_InfraWorks_logo.svg/128px-Autodesk_InfraWorks_logo.svg.png',
}

const getToolLogoUrl = (toolName: string): string | null => {
  const lowerToolName = toolName.toLowerCase();
  if (toolLogos[toolName]) return toolLogos[toolName];
  
  const keys = Object.keys(toolLogos);
  for (const key of keys) {
    if (lowerToolName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerToolName)) {
      return toolLogos[key];
    }
  }
  return null; // Return null if no logo found
}

// Animation Variants (Subtle) - Copied from project page for consistency
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08 // Slightly faster stagger
    }
  }
};

// --- Service Page Component ---

export default function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const unwrappedParams = React.use(params)
  const service = services.find(s => s.id === unwrappedParams.serviceId) as Service | undefined
  
  if (!service) {
    notFound()
  }

  const { hero: heroImage, content: contentImage } = getServiceImagery(service.id);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <div className="min-h-screen bg-gray-50"> {/* Changed base bg to gray-50 */}
      
      {/* --- Hero Section --- */}
      <div className="relative h-[45vh] md:h-[50vh] w-full flex items-end text-white">
        <Image
          src={heroImage}
          alt={`${service.title} Hero Banner`}
          fill
          priority
          className="object-cover z-0"
          onError={handleImageError}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
        <LayoutWrapper className="relative z-20 pb-8 md:pb-12">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-1.5 text-sm text-white/80 mb-3">
              <Link href="/" className="hover:text-white transition-colors flex items-center">
                <Home size={14} className="mr-1" /> Home
              </Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{service.title}</span>
            </nav>
            {/* Title and Short Description */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold font-display tracking-tight mb-2 text-shadow">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl">
              {service.description} {/* Keeping it concise for the hero */}
            </p>
          </motion.div>
        </LayoutWrapper>
      </div>

      {/* --- Intro Info Card (Similar to Project Page) --- */}
      <LayoutWrapper className="mt-[-40px] md:mt-[-60px] relative z-30 pb-12 md:pb-16">
        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          animate="animate" 
          transition={{ delay: 0.1 }}
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-2">
              <Badge variant="outline" className="mb-3 border-pulse-200 text-pulse-600 bg-pulse-50">
                Service Overview
              </Badge>
              <h2 className="text-2xl md:text-3xl font-semibold font-display text-gray-900 mb-3">
                 {service.title} {/* Use h2 for semantic structure */} 
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.overview || service.description} {/* Use full overview here */} 
              </p>
            </div>
             {/* Service Icon */}
            <div className="hidden md:flex justify-center items-center">
              <Layers className="w-16 h-16 text-pulse-300 opacity-80" /> 
            </div>
          </div>
        </motion.div>
      </LayoutWrapper>

      <main className="pt-0 pb-16 md:pb-24"> {/* Removed top padding, added bottom padding */} 
        {/* --- Main Content Area --- */}
        <LayoutWrapper className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12 md:gap-y-16 items-start">
          
          {/* --- Left Column (Main Content) --- */} 
          <div className="lg:col-span-2 space-y-12 md:space-y-16">
            
             {/* Visual Context Section */}
            <SectionWrapper id="visual-overview" className="pt-0">
               <SectionHeader num={1} title="Visual Context" icon={Sparkles} /> {/* Added SectionHeader */} 
               <div className="relative aspect-video rounded-lg overflow-hidden shadow-md border border-gray-200 mt-6"> {/* Added border */} 
                 <Image 
                   src={contentImage}
                   alt={`${service.title} Content Image`}
                   fill sizes="(max-width: 1024px) 100vw, 66vw"
                   className="object-cover"
                   onError={handleImageError}
                 />
               </div>
            </SectionWrapper>
            
            {/* Process Section - Using simplified list style */} 
            {service.process?.steps && service.process.steps.length > 0 && (
              <SectionWrapper id="process">
                 <SectionHeader num={2} title={service.process.title || 'Our Process'} icon={Layers} /> {/* Updated icon */} 
                 {service.process.description && <p className="text-base text-gray-600 mt-4 mb-6 max-w-3xl leading-relaxed">{service.process.description}</p>} 
                 {/* Simplified Numbered List for Process - Refined Styling */}
                <motion.ol 
                    className="space-y-4" 
                    variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
                  {service.process.steps.map((step, index) => (
                    <motion.li 
                      key={index} 
                       // Applying style similar to Project's Solution list
                      className="flex items-start p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                      variants={fadeInUp} 
                    >
                       {/* Use CheckCircle or a numbered circle */}
                       <div className="flex-shrink-0 w-8 h-8 bg-pulse-100 rounded-full text-pulse-700 flex items-center justify-center text-sm font-semibold mr-4">{index + 1}</div>
                       <p className="text-gray-700 text-base leading-relaxed mt-1">{step}</p> 
                    </motion.li>
                  ))}
                </motion.ol>
              </SectionWrapper>
            )}

            {/* Tools & Technologies Section */} 
            {service.tools?.list && service.tools.list.length > 0 && (
              <SectionWrapper id="tools">
                 <SectionHeader num={3} title={service.tools.title || 'Technology Stack'} icon={Wrench} /> 
                 {service.tools.description && <p className="text-base text-gray-600 mt-4 mb-6 max-w-3xl leading-relaxed">{service.tools.description}</p>} 
                <motion.div 
                  className="flex flex-wrap gap-3"
                  variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                >
                  {service.tools.list.map((tool, index) => {
                    const logoUrl = getToolLogoUrl(tool);
                    return (
                      <motion.div key={index} variants={fadeInUp}>
                         {/* Slightly smaller badges */}
                        <Badge variant="secondary" className="flex items-center px-3 py-1.5 bg-gray-100 border-gray-200 text-gray-700 text-sm font-medium rounded-md">
                          {logoUrl ? (
                            <Image src={logoUrl} alt={tool} width={16} height={16} className="mr-1.5 object-contain" onError={handleImageError} />
                          ) : (
                            <Wrench size={14} className="mr-1.5 text-gray-500" /> 
                          )}
                          {tool}
                        </Badge>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </SectionWrapper>
            )}

            {/* Case Studies Section */} 
            {service.caseStudies?.projects && service.caseStudies.projects.length > 0 && (
              <SectionWrapper id="case-studies">
                 <SectionHeader num={4} title={service.caseStudies.title || 'Related Projects'} icon={Briefcase} /> 
                 {service.caseStudies.description && <p className="text-base text-gray-600 mt-4 mb-6 max-w-3xl leading-relaxed">{service.caseStudies.description}</p>} 
                <motion.div 
                  className="grid gap-6 grid-cols-1 sm:grid-cols-2"
                  variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                >
                   {service.caseStudies.projects.map((project, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                         {/* Standard Card for Case Study - Consistent styling */}
                        <Card className="overflow-hidden group rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 bg-white h-full flex flex-col">
                          <div className="relative h-48 w-full">
                            <Image 
                               src={project.image || FALLBACK_IMAGE} 
                               alt={project.title} 
                               fill 
                               sizes="(max-width: 768px) 100vw, 50vw" 
                               className="object-cover"
                               onError={handleImageError} 
                             />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          </div>
                          <CardContent className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">{project.description}</p>
                            <Button asChild variant="link" size="sm" className="text-pulse-600 hover:text-pulse-700 mt-auto px-0 self-start group/link font-medium">
                               <Link href={`/projects/${project.id}`}>
                                  View Project <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                               </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                   ))}
                </motion.div>
              </SectionWrapper>
            )}

            {/* FAQ Section - Consistent Styling */} 
            {service.faq?.questions && service.faq.questions.length > 0 && (
              <SectionWrapper id="faq">
                 <SectionHeader num={5} title={service.faq.title || 'Frequently Asked Questions'} icon={MessageSquare} /> 
                 {service.faq.description && <p className="text-base text-gray-600 mt-4 mb-6 max-w-3xl leading-relaxed">{service.faq.description}</p>} 
                 <Accordion type="single" collapsible className="w-full space-y-3 mt-6">
                  {service.faq.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                       // Consistent styling with rounded corners and border 
                      className="bg-white border border-gray-200 rounded-lg shadow-sm data-[state=open]:border-pulse-300 data-[state=open]:shadow-md transition-all duration-200"
                    >
                      <AccordionTrigger className="px-5 py-4 text-base font-medium text-gray-800 hover:no-underline text-left data-[state=open]:text-pulse-700 data-[state=open]:font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 pt-1 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </SectionWrapper>
            )}
          </div> 
          {/* --- End Left Column --- */}

          {/* --- Right Column (Sidebar) --- */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24"> {/* Adjusted sticky top */} 

            {/* Features Card (Sidebar) - Consistent Styling */} 
            {service.features && service.features.length > 0 && (
              <Card className="shadow-sm border border-gray-200 bg-white rounded-xl"> {/* Rounded-xl */} 
                 <CardHeader><CardTitle className="text-xl flex items-center text-gray-800"><CheckCircle className="w-5 h-5 text-pulse-500 mr-2" /> Key Features</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" /> {/* Updated check color */} 
                        <span className="text-gray-700 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {/* Removed Benefits Card as it's not in data source */}

             {/* Sidebar CTA - Consistent Styling */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-pulse-500 to-pulse-700 text-white rounded-xl"> {/* Rounded-xl */} 
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" /> {/* Added an icon */} 
                <h3 className="text-xl font-semibold mb-2">Need Expert Help?</h3>
                <p className="text-sm text-pulse-100 mb-5">Let's discuss how our {service.title} service can elevate your project.</p>
                <Button asChild size="lg" variant="secondary" className="w-full bg-white text-pulse-600 hover:bg-gray-100 font-semibold group">
                  <Link href="/contact">
                    Get In Touch 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

          </aside>
          {/* --- End Right Column --- */}
        </LayoutWrapper>

         {/* --- Final CTA Section - Consistent Styling --- */} 
        <SectionWrapper className="pt-16 pb-16 md:pt-20 md:pb-20 mt-12 md:mt-16 bg-white border-t border-gray-200"> {/* Changed bg to white */} 
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
               <Badge variant="outline" className="mb-4 border-pulse-200 text-pulse-600 bg-pulse-50">Let's Collaborate</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gray-900">Ready to Transform Your Project?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Partner with MorphVision for expert {service.title} solutions. We bring precision, efficiency, and innovation to every project. Let's build something exceptional together.
              </p>
              <Button asChild size="lg" className="bg-pulse-600 hover:bg-pulse-700 text-white font-semibold group px-8 py-3 rounded-full">
                <Link href="/contact">
                  <span>
                    Discuss Your Project
                    <Phone className="ml-2 w-5 h-5 inline-block" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </SectionWrapper>

      </main>
    </div>
  );
}