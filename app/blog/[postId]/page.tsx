import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

// Blog post data (in a real app, this would come from a database or API)
const blogPostsData = [
  {
    id: 'bim-in-pharmaceutical-industry',
    title: 'The Impact of BIM in the Pharmaceutical Industry',
    slug: 'bim-in-pharmaceutical-industry',
    category: 'Industry Insights',
    publishDate: '2023-09-10',
    readTime: '5 min read',
    author: {
      name: 'Rajesh Kumar',
      title: 'BIM Director',
      avatar: '/background-section1.png'
    },
    featuredImage: '/background-section1.png',
    excerpt: 'Discover how Building Information Modeling is transforming pharmaceutical facility design, construction, and maintenance, leading to improved compliance and efficiency.',
    content: `
      <p>The pharmaceutical industry faces unique challenges in facility design and construction, with stringent regulatory requirements, complex systems, and the need for contamination control. Building Information Modeling (BIM) has emerged as a transformative technology in this sector, offering significant advantages throughout the facility lifecycle.</p>
      
      <h2>Regulatory Compliance and Documentation</h2>
      <p>One of the most significant advantages of BIM in pharmaceutical projects is the ability to embed regulatory requirements directly into the model. FDA, GMP, and other regulatory standards can be incorporated as parameters, ensuring that designs meet compliance requirements from the earliest stages.</p>
      <p>The detailed documentation generated from BIM models also streamlines the validation process. When regulatory authorities require evidence of compliance, the comprehensive data available in the BIM model provides a single source of truth, significantly reducing the time and effort needed for documentation.</p>
      
      <h2>Cleanroom Design Optimization</h2>
      <p>Cleanroom environments are critical to pharmaceutical manufacturing. BIM enables precise modeling of these specialized spaces, including:</p>
      <ul>
        <li>Airflow patterns and pressure cascades</li>
        <li>Material and personnel flow optimization</li>
        <li>Equipment placement and maintenance access</li>
        <li>Contamination control measures</li>
      </ul>
      <p>By simulating these elements in a virtual environment, potential issues can be identified and resolved before construction begins, avoiding costly modifications later.</p>
      
      <h2>Systems Coordination</h2>
      <p>Pharmaceutical facilities contain complex, interconnected systems, including HVAC, plumbing, electrical, and specialized process equipment. BIM's clash detection capabilities ensure that these systems are properly coordinated, preventing interference issues during construction.</p>
      <p>This coordination extends to maintenance considerations as well. BIM models can incorporate access requirements for equipment maintenance, ensuring that all systems remain serviceable throughout the facility's lifecycle.</p>
      
      <h2>Cost and Schedule Benefits</h2>
      <p>The pharmaceutical industry faces significant pressure to bring new facilities online quickly and cost-effectively. BIM contributes to both of these goals by:</p>
      <ul>
        <li>Reducing design errors and changes during construction</li>
        <li>Enabling accurate quantity takeoffs and cost estimates</li>
        <li>Facilitating prefabrication of complex systems</li>
        <li>Supporting lean construction methodologies</li>
      </ul>
      <p>These benefits translate directly to faster project delivery and reduced capital costs.</p>
      
      <h2>Facility Management and Operations</h2>
      <p>Perhaps the most enduring value of BIM for pharmaceutical companies comes in the operations phase. The as-built BIM model serves as a comprehensive digital twin of the facility, supporting:</p>
      <ul>
        <li>Preventive maintenance planning</li>
        <li>Space management and renovation planning</li>
        <li>Energy performance optimization</li>
        <li>Regulatory compliance documentation</li>
      </ul>
      <p>This operational data can be continuously updated, ensuring that the digital model remains an accurate representation of the physical facility throughout its lifecycle.</p>
      
      <h2>Case Study: MediPharm Facility in Mumbai</h2>
      <p>A recent project completed by MorphVision for a leading pharmaceutical manufacturer in Mumbai demonstrates these benefits in practice. By implementing BIM Level 3 throughout the project:</p>
      <ul>
        <li>Design and documentation time was reduced by 30%</li>
        <li>Construction RFIs decreased by over 60% compared to similar projects</li>
        <li>Validation and commissioning timelines were shortened by 3 weeks</li>
        <li>Overall project ROI increased by 15% due to reduced changes and faster time to market</li>
      </ul>
      
      <h2>Future Directions</h2>
      <p>The integration of BIM with other emerging technologies promises even greater benefits for pharmaceutical facilities in the future:</p>
      <ul>
        <li>IoT sensors connected to the BIM model for real-time monitoring and predictive maintenance</li>
        <li>AR/VR applications for operator training and maintenance guidance</li>
        <li>AI-driven optimization of facility operations based on production demands</li>
        <li>Blockchain integration for immutable record-keeping of critical processes</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>As the pharmaceutical industry continues to evolve, BIM has become not just a design and construction tool, but a strategic asset that supports the entire facility lifecycle. Organizations that embrace this technology gain competitive advantages through improved compliance, reduced costs, faster time to market, and enhanced operational efficiency.</p>
    `,
    tags: ['BIM', 'Pharmaceutical', 'Cleanroom', 'Facility Design', 'Compliance']
  },
  {
    id: 'bim-for-sustainable-design',
    title: 'Leveraging BIM for Sustainable Design and Construction',
    slug: 'bim-for-sustainable-design',
    category: 'Sustainability',
    publishDate: '2023-08-25',
    readTime: '4 min read',
    author: {
      name: 'Priya Sharma',
      title: 'Sustainability Lead',
      avatar: '/background-section2.png'
    },
    featuredImage: '/background-section2.png',
    excerpt: 'Learn how BIM technologies are enabling more sustainable building design, construction, and operation through advanced analysis and optimization tools.',
    content: `
      <p>Sustainable design and construction have moved from being optional considerations to essential requirements in today's building industry. Building Information Modeling (BIM) provides powerful tools that support sustainability goals throughout a project's lifecycle.</p>
      
      <h2>Early-Stage Analysis</h2>
      <p>One of BIM's most significant sustainability benefits is the ability to perform analysis early in the design process when changes are least costly. This includes:</p>
      <ul>
        <li>Solar studies to optimize building orientation and glazing</li>
        <li>Wind flow analysis for natural ventilation strategies</li>
        <li>Daylighting studies to reduce artificial lighting requirements</li>
        <li>Thermal performance simulation to minimize HVAC loads</li>
      </ul>
      <p>By conducting these analyses while the design is still flexible, teams can make informed decisions that significantly impact the building's environmental footprint.</p>
      
      <h2>Material Selection and Waste Reduction</h2>
      <p>BIM enables precise quantity takeoffs, reducing material waste in several ways:</p>
      <ul>
        <li>Accurate ordering of construction materials</li>
        <li>Optimization of standard material dimensions</li>
        <li>Prefabrication planning to minimize on-site waste</li>
        <li>Tracking of recycled content and sustainably sourced materials</li>
      </ul>
      <p>The model can also incorporate embodied carbon data, allowing designers to compare the environmental impact of different material choices.</p>
      
      <h2>Energy Performance Optimization</h2>
      <p>Energy analysis integrated with BIM helps teams design more efficient buildings:</p>
      <ul>
        <li>Dynamic energy modeling throughout the design process</li>
        <li>HVAC system optimization and rightsizing</li>
        <li>Renewable energy system integration and performance simulation</li>
        <li>Envelope performance analysis and improvement</li>
      </ul>
      <p>These capabilities are critical for achieving certifications like LEED, BREEAM, or net-zero energy goals.</p>
      
      <h2>Water Conservation Strategies</h2>
      <p>BIM's detailed modeling capabilities extend to plumbing and site systems, supporting water conservation through:</p>
      <ul>
        <li>Rainwater harvesting system design and sizing</li>
        <li>Greywater reuse system integration</li>
        <li>Efficient fixture specification and water use calculation</li>
        <li>Landscape irrigation optimization</li>
      </ul>
      <p>The comprehensive nature of BIM allows these systems to be coordinated with other building elements for maximum efficiency.</p>
      
      <h2>Operational Efficiency</h2>
      <p>The value of BIM for sustainability extends well beyond design and construction. During building operation:</p>
      <ul>
        <li>The BIM model can be integrated with building management systems for real-time performance monitoring</li>
        <li>Energy and water consumption can be tracked against design targets</li>
        <li>Maintenance can be scheduled to maintain optimal system performance</li>
        <li>Renovations can be planned with full knowledge of existing systems</li>
      </ul>
      <p>This "digital twin" approach ensures that sustainability goals established during design are maintained throughout the building's life.</p>
      
      <h2>Case Study: Green Office Tower in Bangalore</h2>
      <p>A recent commercial project in Bangalore demonstrates the sustainability benefits of BIM. The design team used integrated BIM-based analysis to:</p>
      <ul>
        <li>Reduce energy consumption by 35% compared to the baseline</li>
        <li>Decrease water usage by 45% through efficient fixtures and water reuse</li>
        <li>Optimize the façade design to maximize daylighting while controlling heat gain</li>
        <li>Achieve LEED Platinum certification with minimal additional cost</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>BIM is not just a design and documentation tool—it's a powerful platform for achieving sustainability goals. By enabling data-driven decisions throughout the building lifecycle, BIM helps create buildings that are not only more environmentally responsible but also more comfortable, healthier, and more economical to operate.</p>
      
      <p>As climate change concerns intensify and sustainability regulations become more stringent, BIM's role in creating environmentally responsible built environments will only grow in importance.</p>
    `,
    tags: ['BIM', 'Sustainability', 'Green Building', 'Energy Efficiency', 'LEED']
  }
];

export default async function BlogPostDetail({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;
  const post = blogPostsData.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center px-6 py-3 bg-pulse-500 text-white font-medium rounded-full hover:bg-pulse-600 transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Blog
            </Link>
          </div>
        </main>
      </div>
    );
  }
  
  // Find related posts (excluding current one)
  const relatedPosts = blogPostsData
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative">
          <div className="relative h-[40vh] md:h-[50vh]">
            <Image 
              src={post.featuredImage} 
              alt={post.title} 
              fill 
              className="object-cover" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl">
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center text-white/80 hover:text-white mb-4"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Blog
                  </Link>
                  
                  <div className="mb-4">
                    <span className="bg-pulse-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">{post.title}</h1>
                  
                  <div className="flex flex-wrap gap-4 text-white/80">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>By {post.author.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center flex-wrap gap-2">
                      <Tag className="w-5 h-5 text-gray-500" />
                      {post.tags.map(tag => (
                        <Link 
                          key={tag} 
                          href={`/blog/tag/${tag.toLowerCase()}`}
                          className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">Share:</span>
                      <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{post.author.name}</h3>
                      <p className="text-gray-600">{post.author.title}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Table of contents could go here */}
                  
                  {/* Featured posts */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
                    
                    <div className="space-y-6">
                      {relatedPosts.map(relatedPost => (
                        <Link 
                          key={relatedPost.id} 
                          href={`/blog/${relatedPost.id}`}
                          className="group block"
                        >
                          <div className="flex gap-4">
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <Image 
                                src={relatedPost.featuredImage} 
                                alt={relatedPost.title} 
                                fill 
                                className="object-cover transition-transform duration-300 group-hover:scale-105" 
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-pulse-500 transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                                <span>{new Date(relatedPost.publishDate).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                      
                      <Link 
                        href="/blog" 
                        className="inline-flex items-center text-pulse-500 font-medium hover:text-pulse-600 transition-colors"
                      >
                        View all articles
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Newsletter signup */}
                  <div className="bg-[#20133d] rounded-xl p-6 text-white">
                    <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-white/80 mb-6">
                      Stay updated with the latest insights and news about BIM, design, and technology.
                    </p>
                    <form className="space-y-4">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
                      />
                      <button 
                        type="submit" 
                        className="w-full bg-white text-[#20133d] font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
} 