'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, ChevronLeft, ChevronRight, Clock, Calendar, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCTA from '@/components/ProjectCTA';

// Sample blog posts data (in a real app, this would come from a database or API)
const blogPostsData = [
  {
    id: 'bim-construction-planning',
    title: 'How BIM Revolutionizes Construction Planning and Execution',
    slug: 'bim-construction-planning',
    author: {
      name: 'Rajesh Kumar',
      role: 'BIM Manager',
      avatar: '/images/team/rajesh.jpg'
    },
    category: 'BIM Technology',
    publishDate: '2023-03-15',
    readTime: '8 min',
    featuredImage: '/images/blog/bim-construction.jpg',
    excerpt: 'Discover how Building Information Modeling is transforming traditional construction planning processes and enabling more efficient project execution.',
    tags: ['BIM', 'Construction Planning', 'Project Management'],
    featured: true
  },
  {
    id: 'digital-twins-facility-management',
    title: 'Digital Twins: The Future of Facility Management',
    slug: 'digital-twins-facility-management',
    author: {
      name: 'Priya Sharma',
      role: 'Digital Transformation Lead',
      avatar: '/images/team/priya.jpg'
    },
    category: 'Digital Innovation',
    publishDate: '2023-02-28',
    readTime: '6 min',
    featuredImage: '/images/blog/digital-twins.jpg',
    excerpt: 'Learn how digital twin technology is revolutionizing facility management by creating virtual replicas of physical buildings and infrastructure.',
    tags: ['Digital Twins', 'Facility Management', 'IoT'],
    featured: true
  },
  {
    id: 'scan-to-bim-best-practices',
    title: 'Best Practices for Scan-to-BIM Implementation',
    slug: 'scan-to-bim-best-practices',
    author: {
      name: 'Vikram Singh',
      role: 'Scanning Specialist',
      avatar: '/images/team/vikram.jpg'
    },
    category: 'BIM Implementation',
    publishDate: '2023-02-15',
    readTime: '10 min',
    featuredImage: '/images/blog/scan-to-bim.jpg',
    excerpt: 'Explore the optimal workflows and technical considerations for converting laser scan data into accurate Building Information Models.',
    tags: ['Scan-to-BIM', 'Laser Scanning', 'Point Cloud Processing'],
    featured: false
  },
  {
    id: '5d-bim-cost-estimation',
    title: 'Leveraging 5D BIM for Accurate Cost Estimation',
    slug: '5d-bim-cost-estimation',
    author: {
      name: 'Aditya Patel',
      role: 'Cost Consultant',
      avatar: '/images/team/aditya.jpg'
    },
    category: 'Cost Management',
    publishDate: '2023-01-30',
    readTime: '7 min',
    featuredImage: '/images/blog/5d-bim.jpg',
    excerpt: 'How integrating cost data with BIM models is improving the accuracy and efficiency of construction cost estimation and management.',
    tags: ['5D BIM', 'Cost Estimation', 'Quantity Takeoff'],
    featured: false
  },
  {
    id: 'bim-standards-india',
    title: 'BIM Standards and Implementation in India',
    slug: 'bim-standards-india',
    author: {
      name: 'Ananya Desai',
      role: 'BIM Coordinator',
      avatar: '/images/team/ananya.jpg'
    },
    category: 'Standards & Compliance',
    publishDate: '2023-01-15',
    readTime: '9 min',
    featuredImage: '/images/blog/bim-standards.jpg',
    excerpt: 'An overview of BIM standards, guidelines, and implementation frameworks being adopted across the Indian AEC industry.',
    tags: ['BIM Standards', 'India', 'Compliance'],
    featured: false
  },
  {
    id: 'mep-coordination-challenges',
    title: 'Overcoming MEP Coordination Challenges with BIM',
    slug: 'mep-coordination-challenges',
    author: {
      name: 'Samir Joshi',
      role: 'MEP BIM Specialist',
      avatar: '/images/team/samir.jpg'
    },
    category: 'MEP Engineering',
    publishDate: '2022-12-20',
    readTime: '11 min',
    featuredImage: '/images/blog/mep-coordination.jpg',
    excerpt: 'Strategies for effectively coordinating complex mechanical, electrical, and plumbing systems using BIM collision detection and resolution techniques.',
    tags: ['MEP', 'Coordination', 'Clash Detection'],
    featured: false
  },
  {
    id: 'bim-infrastructure-projects',
    title: 'BIM for Infrastructure: Beyond Buildings',
    slug: 'bim-infrastructure-projects',
    author: {
      name: 'Rohit Kapoor',
      role: 'Infrastructure BIM Manager',
      avatar: '/images/team/rohit.jpg'
    },
    category: 'Infrastructure',
    publishDate: '2022-12-05',
    readTime: '8 min',
    featuredImage: '/images/blog/infrastructure-bim.jpg',
    excerpt: 'How BIM methodologies are being adapted and applied to infrastructure projects such as roads, bridges, tunnels, and railways.',
    tags: ['Infrastructure', 'Civil Engineering', 'Transportation'],
    featured: false
  },
  {
    id: 'ai-machine-learning-bim',
    title: 'AI and Machine Learning in BIM: Current Applications and Future Possibilities',
    slug: 'ai-machine-learning-bim',
    author: {
      name: 'Neha Gupta',
      role: 'Technology Research Lead',
      avatar: '/images/team/neha.jpg'
    },
    category: 'Emerging Technology',
    publishDate: '2022-11-18',
    readTime: '12 min',
    featuredImage: '/images/blog/ai-bim.jpg',
    excerpt: 'Exploring how artificial intelligence and machine learning are being integrated with BIM to automate processes and uncover new insights.',
    tags: ['AI', 'Machine Learning', 'Automation'],
    featured: false
  },
  {
    id: 'bim-sustainability-green-building',
    title: 'BIM's Role in Sustainable Design and Green Building Certification',
    slug: 'bim-sustainability-green-building',
    author: {
      name: 'Zara Sheikh',
      role: 'Sustainability Consultant',
      avatar: '/images/team/zara.jpg'
    },
    category: 'Sustainability',
    publishDate: '2022-11-02',
    readTime: '9 min',
    featuredImage: '/images/blog/sustainable-bim.jpg',
    excerpt: 'How BIM supports sustainability analysis, energy modeling, and achievement of green building certifications like LEED and GRIHA.',
    tags: ['Sustainability', 'Green Building', 'Energy Analysis'],
    featured: false
  },
  {
    id: 'bim-education-training',
    title: 'BIM Education and Training: Preparing the Next Generation',
    slug: 'bim-education-training',
    author: {
      name: 'Dr. Manoj Verma',
      role: 'Education Director',
      avatar: '/images/team/manoj.jpg'
    },
    category: 'Education & Training',
    publishDate: '2022-10-20',
    readTime: '7 min',
    featuredImage: '/images/blog/bim-education.jpg',
    excerpt: 'Insights into how educational institutions and training programs are evolving to meet the growing demand for BIM skills in the industry.',
    tags: ['Education', 'Training', 'Skills Development'],
    featured: false
  }
];

// Categories for filtering
const categories = [
  'All Categories',
  'BIM Technology',
  'Digital Innovation',
  'BIM Implementation',
  'Cost Management',
  'Standards & Compliance',
  'MEP Engineering',
  'Infrastructure',
  'Emerging Technology',
  'Sustainability',
  'Education & Training'
];

export default function Blog() {
  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Filter posts based on search query and category
  const filteredPosts = blogPostsData.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory = 
      selectedCategory === 'All Categories' || 
      post.category === selectedCategory;
      
    return matchesSearch && matchesCategory;
  });
  
  // Get featured posts
  const featuredPosts = blogPostsData.filter(post => post.featured);
  
  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="bg-gradient-to-r from-[#20133d] to-[#512888] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="pulse-chip mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
                <span>Blog</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Insights & Resources
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Explore our blog for the latest insights, trends, and best practices in BIM, digital construction, and the future of the built environment.
              </p>
              
              <div className="relative max-w-lg">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search blog posts..." 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // Reset to first page on new search
                  }}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-white placeholder-white/60"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured posts */}
        {featuredPosts.length > 0 && searchQuery === '' && selectedCategory === 'All Categories' && currentPage === 1 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-display font-bold mb-8">Featured Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <Link 
                    key={index}
                    href={`/blog/${post.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="relative h-64">
                        <Image 
                          src={post.featuredImage || '/images/blog/default.jpg'} 
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-block px-3 py-1 bg-pulse-500 text-white text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-pulse-500 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <div className="flex items-center mr-4">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime} read</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-auto">
                          <div className="mr-3">
                            <Image 
                              src={post.author.avatar || '/images/team/default.jpg'} 
                              alt={post.author.name}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{post.author.name}</div>
                            <div className="text-xs text-gray-500">{post.author.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Blog posts grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <h2 className="text-2xl font-display font-bold mb-4 md:mb-0">
                {searchQuery || selectedCategory !== 'All Categories' 
                  ? `${filteredPosts.length} ${filteredPosts.length === 1 ? 'Result' : 'Results'} Found` 
                  : 'Latest Articles'}
              </h2>
              
              <div className="w-full md:w-auto">
                <select 
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1); // Reset to first page on new category
                  }}
                  className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent appearance-none"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post, index) => (
                  <Link 
                    key={index}
                    href={`/blog/${post.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="relative h-48">
                        <Image 
                          src={post.featuredImage || '/images/blog/default.jpg'} 
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-block px-3 py-1 bg-pulse-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-pulse-500 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-xs text-gray-500 mb-4">
                          <div className="flex items-center mr-3">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{post.readTime} read</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-auto">
                          <div className="mr-2">
                            <Image 
                              src={post.author.avatar || '/images/team/default.jpg'} 
                              alt={post.author.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                          </div>
                          <div className="text-xs">
                            <span className="font-medium">{post.author.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any posts matching your search criteria. Try adjusting your filters or search term.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Categories');
                    setCurrentPage(1);
                  }}
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      currentPage === 1 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-gray-700 hover:bg-pulse-50 hover:text-pulse-500'
                    } transition-colors`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    const isCurrentPage = currentPage === pageNumber;
                    
                    // Show limited page numbers with ellipsis for better UI when many pages
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isCurrentPage
                              ? 'bg-pulse-500 text-white'
                              : 'bg-white text-gray-700 hover:bg-pulse-50 hover:text-pulse-500'
                          } transition-colors`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (
                      (pageNumber === 2 && currentPage > 3) ||
                      (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={pageNumber}>...</span>;
                    }
                    
                    return null;
                  })}
                  
                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      currentPage === totalPages 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-white text-gray-700 hover:bg-pulse-50 hover:text-pulse-500'
                    } transition-colors`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Popular tags */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold mb-8">Popular Topics</h2>
            
            <div className="flex flex-wrap gap-3">
              {/* Extract unique tags and sort by frequency */}
              {[...new Set(blogPostsData.flatMap(post => post.tags))]
                .map(tag => ({
                  tag,
                  count: blogPostsData.filter(post => post.tags.includes(tag)).length
                }))
                .sort((a, b) => b.count - a.count)
                .slice(0, 12) // Take top 12 tags
                .map((tagData, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(tagData.tag);
                      setCurrentPage(1);
                    }}
                    className="flex items-center px-4 py-2 bg-gray-100 hover:bg-pulse-50 hover:text-pulse-500 rounded-full transition-colors"
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    <span>{tagData.tag}</span>
                    <span className="ml-2 w-6 h-6 rounded-full bg-white text-xs flex items-center justify-center">
                      {tagData.count}
                    </span>
                  </button>
                ))
              }
            </div>
          </div>
        </section>
        
        {/* Newsletter subscription */}
        <section className="py-20 bg-pulse-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest insights, articles, and resources straight to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-pulse-500 text-white font-medium rounded-lg hover:bg-pulse-600 transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
        
        <ProjectCTA />
      </main>
      <Footer />
    </div>
  );
} 