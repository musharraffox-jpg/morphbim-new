'use client'

import { Project } from '@/app/data/projects'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Clock, MapPin, Building2 } from 'lucide-react'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Metadata */}
      <section className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          <Badge variant="outline" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {project.location}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            {project.client}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {project.duration}
          </Badge>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-600 max-w-3xl">{project.overview}</p>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex items-center space-x-2">
                <CheckCircle2 className="text-green-500" />
                <span>{feature}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Challenges Faced</h2>
          <ul className="space-y-2">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Solutions Implemented</h2>
          <ul className="space-y-2">
            {project.solutions.map((solution, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Results & Impact */}
      {project.results && (
        <section className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Results & Impact</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg">{project.results}</p>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Technologies */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Services Provided</h2>
        <div className="flex flex-wrap gap-2">
          {project.services.map((service, index) => (
            <Badge key={index} variant="outline">
              {service}
            </Badge>
          ))}
        </div>
      </section>

      {/* Project Gallery */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">Have a similar project?</h2>
            <p className="text-primary-foreground/80">
              Let's discuss how we can help you achieve your goals
            </p>
            <Button variant="secondary" size="lg">
              Contact Our Experts
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
} 