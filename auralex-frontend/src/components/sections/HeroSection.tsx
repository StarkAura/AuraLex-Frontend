"use client"

import React, { useState, useEffect } from "react";
import {
  Brain,
  Gamepad2,
  Mic,
  Volume2,
  Star,
  Play,
  ArrowRight,
} from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                AI-Powered Education
              </div>
              <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                Web3 Enabled
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Empowering
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Dyslexic{" "}
              </span>
              Learners
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionary AI-powered platform that helps students with
              dyslexia learn to read, write, and speak through personalized,
              gamified experiences with minimal parental guidance needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" />
                Start Learning Journey
              </button>
              <button className="border-2 border-indigo-200 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all duration-200 flex items-center justify-center">
                Watch Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-300 ${
                          activeFeature === index
                            ? "bg-gradient-to-r from-indigo-100 to-purple-100 scale-105"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <feature.icon
                          className={`h-8 w-8 mb-2 ${
                            activeFeature === index
                              ? "text-indigo-600"
                              : "text-gray-600"
                          }`}
                        />
                        <h3 className="font-semibold text-sm text-gray-900">
                          {feature.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 animate-bounce">
                <Star className="h-6 w-6 text-yellow-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
