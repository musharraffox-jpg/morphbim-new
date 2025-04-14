import React from 'react'
import { cn } from '@/lib/utils'

interface LayoutWrapperProps {
  children: React.ReactNode
  className?: string
  centered?: boolean
  id?: string
}

export function LayoutWrapper({ children, className, centered = false, id }: LayoutWrapperProps) {
  return (
    <div className={cn(
      'container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16',
      'max-w-7xl',
      className
    )} id={id}>
      {children}
    </div>
  )
}

export function SectionWrapper({ children, className, centered = false, id }: LayoutWrapperProps) {
  return (
    <section className={cn(
      'w-full',
      'text-left',
      className
    )} id={id}>
      {children}
    </section>
  )
}

export function ContentWrapper({ children, className, id }: LayoutWrapperProps) {
  return (
    <div className={cn(
      'prose prose-lg max-w-none',
      'prose-headings:font-semibold prose-headings:text-gray-900',
      'prose-p:text-gray-600',
      'prose-a:text-blue-600 hover:prose-a:text-blue-800',
      'prose-ul:list-disc prose-ul:pl-6',
      'prose-li:marker:text-gray-400',
      'prose-h2:mt-12 prose-h2:mb-6',
      'prose-h3:mt-8 prose-h3:mb-4',
      className
    )} id={id}>
      {children}
    </div>
  )
}

export function GridWrapper({ children, className, id }: LayoutWrapperProps) {
  return (
    <div className={cn(
      'grid gap-8 md:grid-cols-2',
      className
    )} id={id}>
      {children}
    </div>
  )
}

export function ListWrapper({ children, className, id }: LayoutWrapperProps) {
  return (
    <ul className={cn(
      'space-y-2',
      className
    )} id={id}>
      {children}
    </ul>
  )
} 