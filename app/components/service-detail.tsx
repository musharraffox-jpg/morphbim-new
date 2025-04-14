'use client'

import { Service } from '@/app/data/services'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Clock, MapPin, Building2 } from 'lucide-react'

interface ServiceDetailProps {
  service: Service
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl font-bold">{service.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="text-gray-600">{service.overview}</p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex items-center space-x-2">
                <CheckCircle2 className="text-green-500" />
                <span>{feature}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{service.process.title}</h2>
        <div className="space-y-4">
          {service.process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                {index + 1}
              </div>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{service.tools.title}</h2>
        <div className="flex flex-wrap gap-2">
          {service.tools.list.map((tool, index) => (
            <Badge key={index} variant="secondary">
              {tool}
            </Badge>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{service.caseStudies.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.caseStudies.projects.map((project) => (
            <Card key={project.id}>
              <CardContent className="p-6 space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <Button variant="outline" className="w-full">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{service.faq.title}</h2>
        <Accordion type="single" collapsible className="w-full">
          {service.faq.questions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Let's build your pharma facility together</h2>
            <p className="text-primary-foreground/80">
              Ready to transform your pharmaceutical facility with our specialized BIM solutions?
            </p>
            <Button variant="secondary" size="lg">
              Discuss Your Project
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
} 