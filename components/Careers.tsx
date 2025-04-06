import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Building2,
  Blocks,
  Code,
  GraduationCap,
  Users,
  Rocket,
  Heart,
  Factory,
  Map,
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  icon: React.ElementType;
}

export const positions: JobPosition[] = [
  {
    id: "senior-bim-engineer",
    title: "Senior BIM Engineer",
    type: "Full-time",
    location: "San Francisco, CA (Hybrid)",
    description: "Lead complex BIM projects and mentor junior team members while implementing cutting-edge construction technologies.",
    requirements: [
      "5+ years of experience with Autodesk Revit and related BIM tools",
      "Strong understanding of construction processes and methodologies",
      "Experience leading teams and managing client relationships",
      "Excellent problem-solving and communication skills"
    ],
    icon: Building2
  },
  {
    id: "bim-coordinator",
    title: "BIM Coordinator",
    type: "Full-time",
    location: "San Francisco, CA (Hybrid)",
    description: "Coordinate BIM processes across teams and ensure seamless integration of various building systems and components.",
    requirements: [
      "3+ years of BIM coordination experience",
      "Proficiency in Navisworks and BIM 360",
      "Strong understanding of MEP systems",
      "Experience in clash detection and resolution"
    ],
    icon: Blocks
  },
  {
    id: "software-developer",
    title: "Software Developer",
    type: "Full-time",
    location: "Remote (US)",
    description: "Build next-generation BIM automation tools and plugins to streamline construction workflows.",
    requirements: [
      "3+ years of software development experience",
      "Proficiency in C# and .NET framework",
      "Experience with Revit API development",
      "Strong problem-solving abilities"
    ],
    icon: Code
  }
];

const cultureItems = [
  {
    title: "Collaborative Environment",
    description: "Work alongside industry experts in a supportive environment that values teamwork and knowledge sharing.",
    icon: Users
  },
  {
    title: "Innovation First",
    description: "Be at the forefront of construction technology, working with the latest tools and developing new solutions.",
    icon: Rocket
  },
  {
    title: "Work-Life Balance",
    description: "Flexible work arrangements, competitive benefits, and a culture that prioritizes well-being.",
    icon: Heart
  }
];

export const Careers = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");

  const handleJobClick = (jobId: string) => {
    router.push(`/careers/${jobId}`);
  };

  return (
    <section className="w-full py-20 bg-white" id="careers">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Careers</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Join Our World-Class Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
          </p>
        </div>

        {/* Company Culture Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cultureItems.map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-pulse-50 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-pulse-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Open Positions Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">Open Positions</h3>
            <div className="text-sm text-gray-500">
              Positions: {positions.length.toString().padStart(2, '0')}
            </div>
          </div>

          <div className="grid gap-4">
            {positions.map((position) => (
              <div
                key={position.id}
                className="group border border-gray-200 rounded-xl overflow-hidden hover:border-pulse-500 transition-all duration-300"
              >
                <div className="p-6 flex items-start justify-between gap-6">
                  <div className="flex items-start gap-6 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-pulse-50 flex items-center justify-center flex-shrink-0">
                      <position.icon className="w-6 h-6 text-pulse-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-pulse-500 transition-colors">
                        {position.title}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">{position.type}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleJobClick(position.id)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-pulse-500 hover:bg-pulse-600 text-white font-medium text-sm transition-colors"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={() => handleJobClick(position.id)}
                      className="text-gray-500 hover:text-pulse-500"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers; 