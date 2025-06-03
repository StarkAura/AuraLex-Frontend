import React from "react";
import {
  Brain,
  Gamepad2,
  Mic,
  Volume2,

} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description:
        "Personalized paths that adapt to each student's unique needs",
    },
    {
      icon: Gamepad2,
      title: "Gamified Experience",
      description: "Interactive games that make learning fun and engaging",
    },
    {
      icon: Volume2,
      title: "Text-to-Speech",
      description:
        "Natural voices with word highlighting for better comprehension",
    },
    {
      icon: Mic,
      title: "Speech Recognition",
      description: "Voice-activated exercises for pronunciation practice",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Designed for{" "}
            <span className="text-indigo-600">Every Learning Style</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform adapts to each student's unique needs,
            providing personalized learning experiences that grow with them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-200">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
