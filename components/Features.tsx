import React from "react";
import { 
  Building2, 
  Users2, 
  Clock, 
  Ruler, 
  FlaskConical, 
  Wrench,
  Leaf 
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Accurate Modeling",
    description: "Detailed 3D models built with cutting-edge tools to ensure precision and clarity for all project stakeholders."
  },
  {
    icon: Users2,
    title: "Real-Time Collaboration",
    description: "Seamlessly connect teams with coordinated BIM workflows, reducing errors and boosting efficiency."
  },
  {
    icon: Clock,
    title: "Cost and Time Optimization",
    description: "Leverage 4D and 5D BIM to track schedules and budgets, keeping your project on target."
  },
  {
    icon: Ruler,
    title: "Civil 3D Expertise",
    description: "Advanced modeling for infrastructure projects, delivering robust designs for roads, utilities, and more."
  },
  {
    icon: FlaskConical,
    title: "Pharma Compliance",
    description: "Tailored execution solutions for pharmaceutical facilities, ensuring regulatory standards and operational excellence."
  },
  {
    icon: Wrench,
    title: "Custom Tools",
    description: "From family creation to plugin development, we craft bespoke solutions to fit your unique needs."
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    description: "Integrate eco-friendly practices into your projects through advanced BIM-based environmental analysis and optimization."
  }
];

const Features = () => {
  return (
    <section id="features" className="w-full bg-white py-20">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
            <span>Features</span>
          </div>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Precision BIM for Every Project
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Morphvison brings advanced Building Information Modeling (BIM) solutions to transform your construction process from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-pulse-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-pulse-50 flex items-center justify-center group-hover:bg-pulse-500 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-pulse-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
