'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight, ChevronRight, CheckCircle, Star,
  Clock, Layers, Users2, Target, X, Plus,
  PencilRuler, Building2, Layers3, Leaf, ShieldCheck, Ruler,
  Sparkles, Wrench
} from 'lucide-react'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { services, Service } from '@/app/data/services'
import { projects } from '@/app/data/projects'

// Fallback image if a service doesn't have one - using reliable online sources
const FALLBACK_IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
  content: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
  whoWeAre: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
  projectGallery: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80",
  finalCta: "https://images.unsplash.com/photo-1461914152595-a86cd63ad790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80"
};

type FallbackImageKey = keyof typeof FALLBACK_IMAGES;

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

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2, type: "spring", stiffness: 300 } }
};

// Helper function to get service imagery with fallbacks
const getServiceImagery = (service?: Service, type: FallbackImageKey = 'hero'): { hero: string; content: string } => {
  const defaultImages = {
    hero: FALLBACK_IMAGES[type] || FALLBACK_IMAGES.hero,
    content: FALLBACK_IMAGES[type] || FALLBACK_IMAGES.content
  }

  if (!service) return defaultImages;

  // Use service.image if available, otherwise fallback
  const contentImg = service.image || FALLBACK_IMAGES[type];
  const heroImg = service.image || FALLBACK_IMAGES[type];

  return { hero: heroImg, content: contentImg };
}

// Icon mapping for dynamic icons
const IconMap: Record<string, React.ElementType> = {
  ArrowRight, ChevronRight, CheckCircle, Star,
  Clock, Layers, Users2, Target, X, Plus,
  PencilRuler, Building2, Layers3, Leaf, ShieldCheck, Ruler,
  Sparkles, Wrench
};

type ProjectGalleryItem = {
  image: string
  title: string
  location: string
  scope: string
  highlights: string[]
}

export default function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const unwrappedParams = React.use(params);
  const service = services.find(s => s.id === unwrappedParams.serviceId);
  const [modal, setModal] = useState<ProjectGalleryItem | null>(null);

  if (!service) return notFound();

  // Get related projects by matching the service ID with project tags
  const relatedProjects = projects
    .filter(project => project.tags?.includes(service.id))
    .slice(0, 3);

  // Helper for icons
  const getIcon = (name: string) => {
    const Icon = IconMap[name] || IconMap["Target"];
    return <Icon className="w-5 h-5" />;
  };

  // Get service imagery
  const { hero: heroImage } = getServiceImagery(service);

  // Parallax for hero image
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);

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
              backgroundImage: `url("${heroImage}")`,
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
                    {service.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-display text-4xl md:text-6xl font-bold mb-6 text-white"
                >
                  <span className="block">{service.heroHeadline || service.title}</span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                    {service.heroSubheadline ? service.heroSubheadline.split('.')[0] : ''}
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-white/90 mb-8 max-w-3xl"
                >
                  {service.heroSubheadline || service.description}
                </motion.p>
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#core-services"
                    className="flex items-center justify-center group px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all shadow-lg"
                  >
                    Explore Service Details
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center group px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* White box at the bottom with overflow - Hidden on mobile */}
            <div className="hidden sm:block w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </motion.section>
      </section>

      {/* Who We Are Section */}
      {service.whoWeAre && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                  Who We Are
                </Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                  {service.whoWeAre.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.whoWeAre.paragraph}
                </p>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={service.whoWeAre?.image || FALLBACK_IMAGES.whoWeAre}
                    alt={service.whoWeAre?.title || "Who We Are"}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full opacity-70 z-0" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-50 rounded-full opacity-70 z-0" />
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Core Services Section */}
      {service.coreServices && service.coreServices.length > 0 && (
        <motion.section
          id="core-services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-24 bg-gray-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Our Core Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Our Specialized Offerings
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide a comprehensive range of professional services tailored to meet your specific project needs.
              </p>
            </div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {service.coreServices.map((item, i) => {
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover="hover"
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                  >
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center text-blue-600 mb-6"
                    >
                      {getIcon(item.icon)}
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 flex-1">{item.description}</p>

                    {item.link && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-blue-600 font-medium mt-4 hover:text-blue-800 group"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Featured Projects Section */}
      {relatedProjects.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Featured Projects
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Our Work in {service.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of successful projects that showcase our expertise in {service.title.toLowerCase()}.
              </p>
            </div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {relatedProjects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                  onClick={() => setModal({
                    image: project.image || '/placeholder.png',
                    title: project.title,
                    location: project.location,
                    scope: project.category,
                    highlights: project.technologies || []
                  })}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-md">
                    <Image
                      src={project.image || "/placeholder.png"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.location}</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-1 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.location} &bull; {project.category}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Project Modal */}
          <Dialog open={!!modal} onOpenChange={(open) => !open && setModal(null)}>
            <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white">
              {modal && (
                <>
                  <div className="relative aspect-video">
                    <Image
                      src={modal.image || FALLBACK_IMAGES.projectGallery}
                      alt={modal.title}
                      fill
                      className="object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full shadow"
                      onClick={() => setModal(null)}
                    >
                      <X className="w-5 h-5 text-gray-700" />
                    </Button>
                  </div>
                  <div className="p-8">
                    <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {modal.title}
                    </DialogTitle>
                    <DialogDescription className="text-gray-500 mb-4">
                      {modal.location} — <span className="font-medium">{modal.scope}</span>
                    </DialogDescription>
                    <Separator className="my-4" />
                    <h4 className="font-medium text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {modal.highlights.length > 0 ? (
                        modal.highlights.map((highlight, i) => (
                          <Badge key={i} className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                            {highlight}
                          </Badge>
                        ))
                      ) : (
                        <p className="text-gray-400">No highlights available</p>
                      )}
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </motion.section>
      )}

      
      

      {/* Why Choose Us Section */}
      {service.whyChooseUs && service.whyChooseUs.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-24 bg-gray-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Our Competitive Advantages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What sets us apart and makes us the ideal partner for your next project.
              </p>
            </div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
            >
              {service.whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover="hover"
                    variants={iconVariants}
                    className="mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md"
                  >
                    {getIcon(item.icon)}
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{item.text}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Process Section - New Addition */}
      {service.process && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Our Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                {service.process.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {service.process.description}
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2 hidden md:block"></div>
              
              <motion.div
                variants={stagger}
                className="relative z-10"
              >
                {service.process.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
                      i % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold z-10 relative">
                          {i + 1}
                        </div>
                        <div className="absolute -inset-3 rounded-full bg-blue-100 z-0"></div>
                      </div>
                    </div>
                    <div className={`md:w-1/2 text-center md:text-left ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                      <h3 className="text-2xl font-bold mb-4">{step.split(':')[0]}</h3>
                      <p className="text-gray-600">{step.split(':')[1] || step}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Tools Section - New Addition */}
      {service.tools && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-24 bg-gray-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Our Toolset
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                {service.tools.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {service.tools.description}
              </p>
            </div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {service.tools.list.map((tool, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold">{tool}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* FAQ Section - New Addition */}
      {service.faq && service.faq.questions && service.faq.questions.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                FAQ
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                {service.faq.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {service.faq.description}
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {service.faq.questions.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>
      )}

      {/* Final CTA Section */}
      {service.finalCta && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-20 relative overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={service.finalCta?.image || FALLBACK_IMAGES.finalCta}
              alt={service.finalCta?.title || "Get Started"}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <motion.div
              variants={stagger}
              className="text-center"
            >
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Get Started</Badge>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
              >
                {service.finalCta.title}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/80 mb-10 max-w-3xl mx-auto"
              >
                {service.finalCta.subtext}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center"
              >
                {service.finalCta.buttons.map((button, i) => (
                  <Button 
                    key={i}
                    asChild 
                    size="lg" 
                    variant={button.variant === 'default' ? 'default' : 'outline'}
                    className={button.variant === 'default' 
                      ? "bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg" 
                      : "border border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                    }
                  >
                    <Link href={button.link || '/contact'}>
                      {button.label}
                    </Link>
                  </Button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
}