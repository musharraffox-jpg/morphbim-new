'use client'

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Project Manager",
    company: "ABC Construction",
    image: "/testimonials/person1.jpg",
    rating: 5,
    text: "Working with MorphBIM has transformed our project delivery process. Their expertise in BIM implementation and coordination has significantly improved our efficiency and reduced errors."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Architect",
    company: "XYZ Architects",
    image: "/testimonials/person2.jpg",
    rating: 5,
    text: "The team's attention to detail and commitment to quality is outstanding. They've helped us deliver complex projects on time and within budget."
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Engineering Director",
    company: "DEF Engineering",
    image: "/testimonials/person3.jpg",
    rating: 5,
    text: "MorphBIM's BIM solutions have revolutionized our workflow. Their technical expertise and professional approach make them an invaluable partner."
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star 
                    key={index}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button size="lg" className="group">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
