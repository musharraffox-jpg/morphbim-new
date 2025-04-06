'use client'

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { positions } from "@/components/Careers";

const JobDetails = () => {
  const params = useParams();
  const router = useRouter();
  const jobId = params.jobId as string;
  
  const job = positions.find(p => p.id === jobId);
  
  if (!job) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
        <Button onClick={() => router.push('/careers')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Careers
        </Button>
      </div>
    );
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <Button 
          variant="ghost" 
          className="mb-8"
          onClick={() => router.push('/careers')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Careers
        </Button>

        {/* Job Header */}
        <div className="relative h-48 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden mb-8">
          <Image
            src="/background-section1.png"
            alt={`${job.title} background`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
          <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 inline-block mb-3 w-fit">
              {job.type}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{job.title}</h1>
            <div className="flex items-center text-white/80">
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
              <div className="prose max-w-none">
                <p>{job.description}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Apply Now</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" type="number" placeholder="5" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about yourself..." />
                </div>
                
                <div>
                  <Label>Resume</Label>
                  <Input type="file" accept=".pdf,.doc,.docx" />
                </div>
                
                <Button className="w-full">Submit Application</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails; 