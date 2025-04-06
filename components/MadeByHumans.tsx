'use client'

import React from "react";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MadeByHumans = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Made by Humans, <br />
              <span className="text-primary">For Humans</span>
            </h2>
            <p className="text-lg text-gray-600">
              We believe in the power of human creativity and expertise. Our team of skilled professionals brings years of experience and passion to every project, ensuring the highest quality results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Our team consists of industry experts with decades of combined experience in BIM and construction.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Solutions</h3>
                  <p className="text-gray-600">
                    We combine human creativity with cutting-edge technology to deliver innovative solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Touch</h3>
                  <p className="text-gray-600">
                    Every project receives our personal attention and care, ensuring your vision is realized.
                  </p>
                </div>
              </div>
            </div>
            <Button size="lg">Join Our Team</Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/made-by-humans.jpg"
              alt="Our team at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
