'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Check, Home, ChevronRight, Sparkles, Layers, Wrench, Briefcase, MessageSquare, 
  CheckCircle, Star, Phone // Keeping essential icons
} from 'lucide-react'
import { notFound } from 'next/navigation'
import { LayoutWrapper, SectionWrapper } from '@/components/LayoutWrapper'
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
    <div className="min-h-screen bg-white">
      
      {/* --- Hero Section --- */}
      <div className="relative h-[50vh] md:h-[60vh] w-full flex items-end text-white">
        <Image
          src={heroImage}
          alt={`${service.title} Hero Banner`}
          fill
          priority
          className="object-cover z-0"
          onError={handleImageError} // Added onError fallback
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
        <LayoutWrapper className="relative z-20 pb-10 md:pb-16">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            {/* Breadcrumbs - Standard Style */}
            <nav className="flex items-center space-x-1.5 text-sm text-white/80 mb-4">
              <Link href="/" className="hover:text-white transition-colors flex items-center">
                <Home size={14} className="mr-1" /> Home
              </Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{service.title}</span>
            </nav>
            {/* Title and Description */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight mb-3 text-shadow">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </LayoutWrapper>
      </div>

      <main className="pt-16 md:pt-20">
        {/* --- Main Content Area --- */}
        <LayoutWrapper className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-20 items-start">
          
          {/* --- Left Column (Main Content) --- */} 
          <div className="lg:col-span-2 space-y-16 md:space-y-20">
            
            {/* Overview Section */} 
            <SectionWrapper id="overview" className="pt-0">
               <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
                 <Sparkles className="w-7 h-7 text-pulse-500 mr-2.5" /> Overview
               </h2>
               <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
                 <p>{service.overview || service.description}</p>
                 {/* Add more paragraphs if needed */}
               </div>
               <div className="relative aspect-video rounded-lg overflow-hidden shadow-md border border-gray-100">
                 <Image 
                   src={contentImage}
                   alt={`${service.title} Content Image`}
                   fill sizes="(max-width: 1024px) 100vw, 66vw"
                   className="object-cover"
                   onError={handleImageError}
                 />
               </div>
            </SectionWrapper>
            
            {/* Process Section */} 
            {service.process?.steps && service.process.steps.length > 0 && (
              <SectionWrapper id="process">
                <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center">
                  <Layers className="w-7 h-7 text-pulse-500 mr-2.5" /> {service.process.title || 'Our Process'}
                </h2>
                 {service.process.description && <p className="text-lg text-gray-600 mb-8 max-w-3xl">{service.process.description}</p>} 
                {/* Simple Numbered List for Process */}
                <ol className="space-y-6 border-l-2 border-pulse-200 pl-6">
                  {service.process.steps.map((step, index) => (
                    <motion.li 
                      key={index} 
                      className="relative pl-4 pb-2"
                      variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="absolute -left-[34px] top-1 w-6 h-6 bg-pulse-500 rounded-full text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">{index + 1}</div>
                      <p className="text-gray-700 text-base leading-relaxed">{step}</p>
                    </motion.li>
                  ))}
                </ol>
              </SectionWrapper>
            )}

            {/* Tools & Technologies Section */} 
            {service.tools?.list && service.tools.list.length > 0 && (
              <SectionWrapper id="tools">
                 <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center">
                   <Wrench className="w-7 h-7 text-pulse-500 mr-2.5" /> {service.tools.title || 'Technology Stack'}
                 </h2>
                 {service.tools.description && <p className="text-lg text-gray-600 mb-8 max-w-3xl">{service.tools.description}</p>} 
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                >
                  {service.tools.list.map((tool, index) => {
                    const logoUrl = getToolLogoUrl(tool);
                    return (
                      <motion.div key={index} variants={fadeInUp}>
                        <Badge variant="secondary" className="flex items-center px-4 py-2 bg-gray-100 border-gray-200 text-gray-800 text-sm font-medium">
                          {logoUrl ? (
                            <Image src={logoUrl} alt={tool} width={18} height={18} className="mr-2 object-contain" onError={handleImageError} />
                          ) : (
                            <Wrench size={16} className="mr-2 text-gray-500" /> // Fallback icon
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
                <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center">
                  <Briefcase className="w-7 h-7 text-pulse-500 mr-2.5" /> {service.caseStudies.title || 'Related Projects'}
                </h2>
                {service.caseStudies.description && <p className="text-lg text-gray-600 mb-8 max-w-3xl">{service.caseStudies.description}</p>} 
                <motion.div 
                  className="grid gap-6 grid-cols-1 sm:grid-cols-2"
                  variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                >
                   {service.caseStudies.projects.map((project, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                        {/* Standard Card for Case Study */}
                        <Card className="overflow-hidden group rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 bg-white h-full flex flex-col">
                          <div className="relative h-48 w-full">
                            <Image 
                               src={project.image || FALLBACK_IMAGE} 
                               alt={project.title} 
                               fill 
                               sizes="(max-width: 768px) 100vw, 50vw" 
                               className="object-cover"
                               onError={handleImageError} 
                             />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent/10"></div>
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

            {/* FAQ Section */} 
            {service.faq?.questions && service.faq.questions.length > 0 && (
              <SectionWrapper id="faq">
                <h2 className="text-3xl font-semibold text-gray-900 mb-8 flex items-center">
                   <MessageSquare className="w-7 h-7 text-pulse-500 mr-2.5" /> {service.faq.title || 'Frequently Asked Questions'}
                 </h2>
                 {service.faq.description && <p className="text-lg text-gray-600 mb-8 max-w-3xl">{service.faq.description}</p>}
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {service.faq.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="bg-white border border-gray-200 rounded-lg shadow-sm data-[state=open]:border-pulse-200"
                    >
                      <AccordionTrigger className="px-5 py-4 text-base font-medium text-gray-800 hover:no-underline text-left data-[state=open]:text-pulse-700">
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
          <aside className="lg:col-span-1 space-y-10 lg:sticky lg:top-28">

            {/* Features Card (Sidebar) */} 
            {service.features && service.features.length > 0 && (
              <Card className="shadow-sm border border-gray-100 bg-white">
                <CardHeader><CardTitle className="text-xl flex items-center"><CheckCircle className="w-5 h-5 text-pulse-500 mr-2" /> Key Features</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Benefits Card (Sidebar) */} 
            {service.benefits && service.benefits.length > 0 && (
              <Card className="shadow-sm border border-gray-100 bg-white">
                 <CardHeader><CardTitle className="text-xl flex items-center"><Star className="w-5 h-5 text-pulse-500 mr-2" /> Core Benefits</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2.5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            
            {/* Sidebar CTA */} 
            <Card className="shadow-md border-0 bg-gradient-to-br from-pulse-500 to-pulse-700 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Need Expert Help?</h3>
                <p className="text-sm text-pulse-100 mb-5">Let's discuss how our {service.title} service can benefit your project.</p>
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

        {/* --- Final CTA Section --- */}
        <SectionWrapper className="pt-16 pb-16 md:pt-20 md:pb-20 mt-16 md:mt-20 bg-gray-50 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gray-900">Ready to Transform Your Project?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Partner with MorphVision for expert {service.title} solutions. Let's build something exceptional together.
              </p>
              <Button asChild size="lg" className="bg-pulse-600 hover:bg-pulse-700 text-white font-semibold group px-8 py-3">
                <Link href="/contact">
                  Discuss Your Project
                  <Phone className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </SectionWrapper>

      </main>
    </div>
  );
}