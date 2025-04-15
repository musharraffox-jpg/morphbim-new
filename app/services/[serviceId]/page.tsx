'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRight, Check, Home, ChevronRight, Sparkles, Layers, Wrench, Briefcase, MessageSquare, 
  CheckCircle, Star, Phone, Target, PencilRuler, Building2, Layers3, Leaf, Users2, ShieldCheck, Ruler, Clock, X
} from 'lucide-react' // Keeping essential icons
import { notFound } from 'next/navigation'
import { LayoutWrapper, SectionWrapper, SectionHeader } from '@/components/LayoutWrapper'
import { services, Service } from '@/app/data/services'
import { projects } from '@/app/data/projects'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

// --- Helper Functions & Data ---

const LucideIcons = { 
  ArrowRight, Check, Home, ChevronRight, Sparkles, Layers, Wrench, Briefcase, MessageSquare, 
  CheckCircle, Star, Phone, Target, PencilRuler, Building2, Layers3, Leaf, Users2, ShieldCheck, Ruler, Clock, X
}

const FALLBACK_IMAGE = '/placeholder.png'; // Use placeholder

// Consistent Image Fetching with Fallback
const getServiceImagery = (service?: Service): { hero: string; content: string } => {
  const defaultImages = { hero: FALLBACK_IMAGE, content: FALLBACK_IMAGE }
  // Use service.image if available, otherwise fallback
  const contentImg = service?.image || FALLBACK_IMAGE;
  // Keep a different hero or use content as fallback too
  const heroImg = service?.image || FALLBACK_IMAGE; // Or define specific hero images if needed
  return { hero: heroImg, content: contentImg }; 
}

// Animation Variants (Subtle) - Copied from project page for consistency
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

// --- Service Page Component ---

type ProjectGalleryItem = {
  image: string
  title: string
  location: string
  scope: string
  highlights: string[]
}

export default function ServicePage({ params }: { params: Promise<{ serviceId: string }> }) {
  const unwrappedParams = React.use(params)
  const service = services.find(s => s.id === unwrappedParams.serviceId)
  const [modal, setModal] = React.useState<ProjectGalleryItem | null>(null)
  if (!service) return null

  // Project gallery: filter projects by service.id
  const relatedProjects = projects.filter(p => (p.services || []).some(svc => svc.toLowerCase().replace(/[^a-z0-9]/g, '').includes(service.id.replace(/[^a-z0-9]/g, '')))).slice(0, 3)

  // Helper for icons
  const Icon = (name: string) => (LucideIcons as any)[name] || (LucideIcons as any)['Circle']

  const heroImage = service.image || '/placeholder.png'

  // Parallax for hero image
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src={heroImage} alt={service.heroHeadline || service.title} fill priority className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4 py-32">
          <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight">
            {service.heroHeadline}
          </motion.h1>
          <motion.p variants={fadeInUp} transition={{ delay: 0.2 }} className="text-white/90 text-2xl md:text-3xl mb-10 max-w-2xl mx-auto">
            {service.heroSubheadline}
          </motion.p>
          <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
            <Button size="lg" className="bg-pulse-500 text-white font-semibold px-10 py-4 rounded-full shadow-xl text-lg" whileHover={{ scale: 1.05 }}>
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      {service.whoWeAre && (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="relative h-[400px] rounded-2xl overflow-hidden shadow-elegant">
              <Image src={service.whoWeAre.image || '/placeholder.png'} alt={service.whoWeAre.title} fill className="object-cover w-full h-full" />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col justify-center">
              <div className="pulse-chip mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
                <span>Who We Are</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{service.whoWeAre.title}</h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
                {service.whoWeAre.paragraph}
              </p>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Core Services Section */}
      {service.coreServices && (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="pulse-chip mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Our Core Services</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">What We Offer</h2>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.coreServices.map((card, i) => {
                const CardIcon = Icon(card.icon)
                return (
                  <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-elegant hover:shadow-elegant-hover transition-all">
                    <motion.div whileHover={{ scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <CardIcon className="w-12 h-12 text-pulse-500 mb-4" />
                    </motion.div>
                    <h3 className="font-semibold text-xl mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-base mb-2">{card.description}</p>
                    {card.link && <Link href={card.link} className="text-pulse-500 font-medium hover:underline text-sm">Learn More</Link>}
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Project Gallery Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="pulse-chip mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>Project Gallery</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Selected Work</h2>
          {relatedProjects.length > 0 ? (
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((proj, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }} className="group bg-white rounded-xl shadow-elegant overflow-hidden hover:shadow-elegant-hover transition-all duration-300 cursor-pointer" onClick={() => setModal({
                  image: proj.image || '/placeholder.png',
                  title: proj.title,
                  location: proj.location,
                  scope: proj.category,
                  highlights: proj.features || []
                })}>
                  <div className="relative h-60">
                    <Image src={proj.image || '/placeholder.png'} alt={proj.title} fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-pulse-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {proj.location}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-pulse-500 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {proj.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center text-gray-500 py-16 text-xl">No projects found for this service yet.</div>
          )}
        </div>
        {/* Modal for project details */}
        <Dialog open={!!modal} onOpenChange={() => setModal(null)}>
          <DialogContent className="p-0 bg-white rounded-2xl overflow-hidden shadow-xl max-w-xl w-full">
            {modal && (
              <>
                <DialogTitle className="sr-only">{modal.title}</DialogTitle>
                <div className="relative w-full h-56 md:h-72">
                  <Image src={modal.image || '/placeholder.png'} alt={modal.title} fill className="object-cover w-full h-full" />
                  <button
                    onClick={() => setModal(null)}
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                <div className="p-8 flex flex-col items-center text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">{modal.title}</h3>
                  <div className="text-gray-500 text-sm">{modal.location} &mdash; <span className="font-medium">{modal.scope}</span></div>
                  <ul className="flex flex-wrap justify-center gap-2 mt-4">
                    {modal.highlights.length > 0
                      ? modal.highlights.map((h, i) => (
                          <li key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{h}</li>
                        ))
                      : <li className="text-gray-400">No highlights available.</li>
                    }
                  </ul>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </motion.section>

      {/* Why Choose Us Section */}
      {service.whyChooseUs && (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="pulse-chip mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>Why Industry Leaders Work With Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Why Choose Us</h2>
            <motion.div variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {service.whyChooseUs.map((item, i) => {
                const ItemIcon = Icon(item.icon)
                return (
                  <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center">
                    <motion.div whileHover={{ scale: 1.2, y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <ItemIcon className="w-10 h-10 text-pulse-500 mb-3" />
                    </motion.div>
                    <span className="font-semibold text-lg mb-1">{item.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Final CTA Section */}
      {service.finalCta && (
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="relative min-h-[40vh] flex items-center justify-center bg-pulse-500">
          <Image src={service.finalCta.image || '/placeholder.png'} alt={service.finalCta.title} fill className="object-cover object-center z-0 opacity-30" />
          <div className="absolute inset-0 bg-pulse-500/80 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4 py-20">
            <h2 className="text-white font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-xl">{service.finalCta.title}</h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">{service.finalCta.subtext}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {service.finalCta.buttons.map((btn, i) => (
                <Button asChild key={i} size="lg" variant={btn.variant as any || 'default'} className={btn.variant === 'secondary' ? 'bg-white/80 text-pulse-500' : 'bg-white text-pulse-500 font-bold'} whileHover={{ scale: 1.05 }}>
                  <Link href={btn.link}>{btn.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}