'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  text: string
  link: string
  icon?: React.ReactNode
  secondary?: boolean
  onClick?: () => void
}

interface DetailHeroProps {
  title: string
  subtitle: string
  imageUrl: string
  category?: string
  breadcrumbs?: {
    href: string
    label: string
  }[]
  details?: {
    icon: React.ReactNode
    label: string
    value: string
  }[]
  stats?: {
    value: string
    label: string
  }[]
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
  className?: string
}

export function DetailHero({
  title,
  subtitle,
  imageUrl,
  category,
  breadcrumbs = [],
  details = [],
  stats = [],
  primaryButton,
  secondaryButton,
  className
}: DetailHeroProps) {
  return (
    <div className={cn("relative w-full bg-gray-900 text-white", className)}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/80" />
        
        {/* Special gradient for navbar visibility */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-900/90 to-transparent z-10" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }} 
        />
        
        {/* Accent Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pulse-600/20 via-transparent to-transparent" />
      </div>

      {/* Content Container - Adjusted spacing for navbar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <Home size={14} className="mr-1" />
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight size={14} />
                <Link 
                  href={crumb.href} 
                  className="hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              </div>
            ))}
            <ChevronRight size={14} />
            <span className="text-white font-medium truncate">{title}</span>
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Category Badge */}
            {category && (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pulse-500/10 border border-pulse-500/20 text-pulse-400">
                <div className="w-1.5 h-1.5 rounded-full bg-pulse-500 mr-2"></div>
                {category}
              </div>
            )}
            
            {/* Title & Description */}
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {subtitle}
            </p>
            
            {/* Details Row */}
            {details.length > 0 && (
              <div className="grid grid-cols-2 gap-4 pt-4">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    {detail.icon}
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* CTA Buttons */}
            {(primaryButton || secondaryButton) && (
              <div className="flex flex-wrap gap-4 pt-6">
                {primaryButton && (
                  <Link 
                    href={primaryButton.link} 
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-pulse-500 text-white font-medium hover:bg-pulse-600 transition-colors"
                    onClick={primaryButton.onClick}
                  >
                    {primaryButton.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                )}
                {secondaryButton && (
                  <Link 
                    href={secondaryButton.link}
                    className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-700 text-white font-medium hover:bg-white/5 transition-colors"
                    onClick={secondaryButton.onClick}
                  >
                    {secondaryButton.text}
                    {secondaryButton.icon}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Stats/Highlights Cards */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
    </div>
  )
} 