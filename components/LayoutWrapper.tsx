import React from 'react'
import { cn } from '@/lib/utils'

interface LayoutWrapperProps {
  children: React.ReactNode
  className?: string
  centered?: boolean
  id?: string
}

// --- Section Header Component Props ---
// Moved interface here for better organization
interface SectionHeaderProps {
  num?: number | string;
  title: string;
  icon?: React.ElementType; // Keep React.ElementType for flexibility
  className?: string; // Add className prop
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

export function SectionWrapper({ children, className, id }: LayoutWrapperProps) {
  return (
    <section className={cn(
      'w-full',
      'py-8 sm:py-12',
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

// --- Section Header Component ---
// Add the component definition here
export const SectionHeader: React.FC<SectionHeaderProps> = ({ num, title, icon: Icon, className }) => (
  <div className={cn("flex items-center gap-4 md:gap-6 mb-8 md:mb-12", className)}>
    <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-pulse-100 border border-pulse-200">
      {num ? (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white text-xs font-bold">{num}</span>
      ) : Icon ? (
        <Icon className="w-5 h-5 text-pulse-500" />
      ) : null}
      <span className="font-medium text-pulse-700 text-sm tracking-wide uppercase">{title}</span>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-pulse-200 to-transparent"></div>
  </div>
); 